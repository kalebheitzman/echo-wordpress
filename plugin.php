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
$plugin_dir = plugin_dir_path( __FILE__ );

/**
 * Activation
 */
require_once $plugin_dir . 'inc/activation.php';

/**
 * Install Echo DB
 */
require_once $plugin_dir . 'inc/install-echo-db.php';
register_activation_hook( __FILE__, 'echo_install_tables' );

/**
 * Add ACF Fields Programatically
 */
// require_once $plugin_dir . 'inc/acf-fields.php';

/**
 * Register Scripts
 */
require_once $plugin_dir . 'inc/register-scripts.php';

/**
 * Register Options Page
 */
require_once $plugin_dir . 'inc/register-options-page.php';

/**
 * Register Custom Page Templates
 */
require_once $plugin_dir . 'inc/register-templates.php';

/**
 * Register Theme Support
 */
require_once $plugin_dir . 'inc/theme-support.php';

/**
 * Register Custom Post Types
 */
require_once $plugin_dir . 'inc/post-types/event.php';
