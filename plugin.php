<?php
/**
 * Echo Conferencing for WordPress
 *
 * @package           Echo
 * @author            Kaleb Heitzman
 * @copyright         2020 Kaleb Heitzman
 * @license           GPL-3.0
 *
 * @wordpress-plugin
 * Plugin Name:       Project Echo
 * Plugin URI:        https://github.com/kalebheitzman/wp-echo-conferencing
 * Description:       A ReactJS-based video live streaming and conferencing app for your website (requires <a href="https://www.advancedcustomfields.com/" target="_blank">Advanced Custom Fields</a>).
 * Version:           0.1.0
 * Requires at least: 5.4
 * Requires PHP:      7.2
 * Author:            Kaleb Heitzman
 * Author URI:        https://heitzman.co
 * Text Domain:       echo
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Plugin Variables
 */
$plugin_dir  = plugin_dir_path( __FILE__ );
$plugin_name = __( 'Project Echo', 'echo ' );

if ( ! function_exists( 'echo_plugin_active' ) ) :
	/**
	 * Check for dependent plugins and disable Project Echo as needed.
	 */
	require_once $plugin_dir . 'inc/plugin-active.php';
	echo_plugin_active(
		$plugin_name,
		'Advanced Custom Fields',
		array(
			'advanced-custom-fields/acf.php',
			'advanced-custom-fields-pro/acf.php',
		)
	);
endif;

if ( ! function_exists( 'echo_plugin_scripts' ) ) :
	/**
	 * WP React Plugin Scripts
	 *
	 * Register the ReactJS App Script that's needed for our plugin to work. This
	 * includes the the react app and WordPress nonce needed to perform REST API
	 * calls.
	 *
	 * @since  1.0.0
	 */
	function echo_plugin_scripts() {

		wp_register_script(
			'echo-plugin-script',
			plugin_dir_url( __FILE__ ) . 'dist/bundle.js',
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
				'root'     => esc_url_raw( rest_url() ),
				'nonce'    => wp_create_nonce( 'wp_rest' ),
			)
		);

		// if event post, enqueue the react app script.
		if ( is_singular( 'event' ) ) {
			wp_enqueue_script( 'echo-plugin-script' );
		}
	}
	add_action( 'wp_enqueue_scripts', 'echo_plugin_scripts' );
endif;

/**
 * Unregister Theme Styles
 */
// require_once $plugin_dir . 'inc/unregister-styles.php';

/**
 * Register Custom Page Templates
 */
require_once $plugin_dir . 'inc/register-templates.php';

/**
 * Register Custom Post Types
 */
if ( ! post_type_exists( 'event' ) ) :
	require_once $plugin_dir . 'inc/post-types/event.php';
endif;
