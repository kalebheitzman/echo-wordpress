<?php
/**
 * Register Scripts
 *
 * @package Echo
 * @since 0.1.0
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

		// blank stylesheet to inject styles.
		wp_enqueue_style(
			'project-echo-custom-css',
			plugin_dir_url( dirname( __FILE__ ) ) . 'dist/style.css',
			array(),
			'1.0.0'
		);

		// event branding colors.
		if ( have_rows( 'event_colors' ) ) :
			while ( have_rows( 'event_colors' ) ) : the_row();
				$html_background          = get_sub_field( 'html_background' );
				$body_background          = get_sub_field( 'body_backgound' );
				$primary_background_color = get_sub_field( 'primary_background_color' );
				$primary_background_hover = get_sub_field( 'primary_background_hover' );
				$primary_text_color       = get_sub_field( 'primary_text_color' );
				$text_color               = get_sub_field( 'text_color' );
			endwhile;
		endif;

		$custom_css = "
			:root {
				--highlight-primary-bg: $primary_background_color;
				--highlight-primary-color: $primary_text_color;
				--highlight-primary-hover: $primary_background_hover;
				
				--text-color: $text_color;
				--html-background-color: $html_background;
				--body-background-color: $body_background;
			}
		";

		// add custom css colors.
		wp_add_inline_style( 'project-echo-custom-css', $custom_css );

		// add react app js.
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

		// localize script with WordPress vars.
		wp_localize_script(
			'echo-plugin-script',
			'echoSettings',
			array(
				'nonce'           => wp_create_nonce( 'wp_rest' ),
				'graphql'         => get_site_url() . '/graphql',
				'siteTitle'       => get_bloginfo( 'name' ),
				'pageTitle'       => $post->post_title,
				'eventID'         => $post->ID,
				'twitterCallback' => plugins_url( 'twitter-callback.php', __FILE__ ),
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
