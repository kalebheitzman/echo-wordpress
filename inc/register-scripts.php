<?php
/**
 * Register Scripts
 *
 * @package Echo
 */

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
			'wpApiSettings',
			array(
				'root'      => esc_url_raw( rest_url() ),
				'nonce'     => wp_create_nonce( 'wp_rest' ),
				'graphql'   => get_site_url() . '/graphql',
				'siteTitle' => get_bloginfo( 'name' ),
				'pageTitle' => $post->post_title,
			)
		);

		// if event post, enqueue the react app script.
		if ( is_singular( 'event' ) ) {
			wp_enqueue_script( 'echo-plugin-script' );
		}
	}
	add_action( 'wp_enqueue_scripts', 'echo_plugin_scripts' );
endif;
