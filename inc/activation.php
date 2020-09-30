<?php
/**
 * Activiation
 *
 * @package Echo
 * @since 0.1.0
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

	// advanced custom fields.
	echo_plugin_active(
		$plugin_name,
		'Advanced Custom Fields',
		array(
			'advanced-custom-fields/acf.php',
			'advanced-custom-fields-pro/acf.php',
		)
	);

	// wpgraphql.
	echo_plugin_active(
		$plugin_name,
		'WPGraphQL',
		array(
			'wp-graphql/wp-graphql.php',
		)
	);

	// wpgraphql for acf.
	echo_plugin_active(
		$plugin_name,
		'WPGraphQL for Advanced Custom Fields',
		array(
			'wp-graphql-acf/wp-graphql-acf.php',
		)
	);
endif;
