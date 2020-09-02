<?php
/**
 * Register Scripts
 *
 * @package Echo
 */

if ( ! function_exists( 'echo_remove_scripts' ) ) :
	/**
	 * Remove theme scripts
	 */
	function echo_remove_scripts() {
		global $wp_scripts;
		global $post;

		if ( is_singular( 'event' ) ) {
			foreach ( $wp_scripts->queue as $handle ) {
				if ( strpos( $wp_scripts->registered[ $handle ]->src, '/themes/' ) !== false ) {
					wp_dequeue_script( $handle );
					wp_deregister_script( $handle );
				}
			}
		}
	}
	add_action( 'wp_print_scripts', 'echo_remove_scripts', 100 );
endif;

if ( ! function_exists( 'echo_remove_styles' ) ) :
	/**
	 * Remove theme styles
	 */
	function echo_remove_styles() {
		global $wp_styles;
		global $post;

		if ( is_singular( 'event' ) ) {
			foreach ( $wp_styles->queue as $handle ) {
				if ( strpos( $wp_styles->registered[ $handle ]->src, '/themes/' ) !== false ) {
					wp_dequeue_style( $handle );
					wp_deregister_style( $handle );
				}
			}
		}
	}
	add_action( 'wp_print_styles', 'echo_remove_styles', 100 );
endif;

if ( ! function_exists( 'echo_plugin_scripts' ) ) :
	/**
	 * Register Project Echo Scripts
	 *
	 * Register the ReactJS App Script that's needed for our plugin to work. This
	 * includes the the react app and WordPress nonce needed to perform REST API
	 * calls.
	 *
	 * @since  1.0.0
	 */
	function echo_plugin_scripts() {
		global $post;

		wp_register_script(
			'echo-plugin-script',
			plugin_dir_url( dirname( __FILE__ ) ) . 'dist/bundle.js',
			array(
				'jquery',
				'wp-element',
			),
			'1.0.0',
			true
		);

		wp_localize_script(
			'echo-plugin-script',
			'echoSettings',
			array(
				'nonce'            => wp_create_nonce( 'wp_rest' ),
				'graphql'          => get_site_url() . '/graphql',
				'siteTitle'        => get_bloginfo( 'name' ),
				'pageTitle'        => $post->post_title,
				'eventID'          => $post->ID,
				'youtubeChannelId' => 'UChH-_9AfBWwWJdyKJbqAbjA',
				'youtubeApiKey'    => 'AIzaSyCRCYTfhf8ARhwM1lR320cjYfW2ObZZ8c8',
			)
		);

		// if event post, enqueue the react app script.
		if ( is_singular( 'event' ) ) {
			wp_enqueue_script( 'echo-plugin-script' );
		}
	}
	add_action( 'wp_enqueue_scripts', 'echo_plugin_scripts' );
	add_filter( 'show_admin_bar', '__return_false' );
endif;
