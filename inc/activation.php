<?php
/**
 * Activiation
 *
 * @package Echo
 */

/**
 * Plugin Variables
 */
$plugin_name = __( 'Project Echo', 'echo ' );

if ( ! function_exists( 'echo_plugin_active' ) ) :
	/**
	 * Check for dependent plugins and disable Project Echo as needed.
	 */
	require_once plugin_dir_path( __FILE__ ) . 'plugin-active.php';
	echo_plugin_active(
		$plugin_name,
		'Advanced Custom Fields',
		array(
			'advanced-custom-fields/acf.php',
			'advanced-custom-fields-pro/acf.php',
		)
	);
endif;
