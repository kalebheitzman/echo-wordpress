<?php
/**
 * Load Dependent Plugins
 *
 * @package echo
 * @since 0.1.0
 */

/**
 * Verify if a plugin is active, if not deactivate the actual plugin and
 * show an error.
 *
 * @param [string] $my_plugin_name Plugin Name.
 * @param [string] $dependency_plugin_name Dependency Plugins.
 * @param [array]  $paths_to_plugin Path of the plugin to verify
 * with the format 'dependency_plugin/dependency_plugin.php'.
 * @param [string] $version_to_check Optional, verify certain version
 * of the dependent plugin.
 */
function echo_plugin_active(
	$my_plugin_name,
	$dependency_plugin_name,
	$paths_to_plugin,
	$version_to_check = null
) {

	// Needed to the function "deactivate_plugins" works.
	include_once ABSPATH . 'wp-admin/includes/plugin.php';

	$active = false;
	foreach ( $paths_to_plugin as $plugin ) {
		if ( is_plugin_active( $plugin ) ) {
			$active = true;
		}
	}

	if ( ! $active ) {
		// Deactivate the current plugin.
		deactivate_plugins( 'wp-project-echo/plugin.php' );

		// Show an error alert on the admin area.
		add_action(
			'admin_notices',
			function() use ( $my_plugin_name, $dependency_plugin_name ) {
				?>
					<div class="updated error">
						<p>
							<?php
								echo sprintf(
									wp_kses_post( 'The plugin <strong>"%s"</strong> needs the plugin <strong>"%s"</strong> active', 'echo' ),
									esc_attr( $my_plugin_name ),
									esc_attr( $dependency_plugin_name )
								);
								echo '<br>';
								echo sprintf(
									wp_kses_post( '<strong>%s has been deactivated</strong>', 'echo' ),
									esc_attr( $my_plugin_name )
								);
							?>
						</p>
				</div>
				<?php
				if ( isset( $_GET['activate'] ) ) // phpcs:ignore 
						unset( $_GET['activate'] ); // phpcs:ignore
			}
		);
	} else {

		// If version to check is not defined do nothing.
		if ( null === $version_to_check ) {
			return;
		}

		// Get the plugin dependency info.
		$dep_plugin_data = get_plugin_data( WP_PLUGIN_DIR . '/' . $path_to_plugin );

		// Compare version.
		$error = version_compare( $dep_plugin_data['Version'], $version_to_check, '>=' ) ? true : false;

		if ( $error ) {

			// Deactivate the current plugin.
			deactivate_plugins( plugin_basename( __FILE__ ) );

			add_action(
				'admin_notices',
				function() use ( $my_plugin_name, $dependency_plugin_name, $version_to_check ) {
					?>
						<div class="updated error">
								<p>
										<?php
										echo sprintf(
											wp_kses_post( 'The plugin <strong>"%s"</strong> needs the <strong>version %s</strong> or newer of <strong>"%s"</strong>', 'echo' ),
											esc_attr( $my_plugin_name ),
											esc_attr( $version_to_check ),
											esc_attr( $dependency_plugin_name )
										);
										echo '<br>';
										echo sprintf(
											wp_kses_post( '<strong>%s has been deactivated</strong>', 'echo' ),
											esc_attr( $my_plugin_name )
										);
										?>
								</p>
						</div>
					<?php
					if ( isset( $_GET['activate'] ) ) { // phpcs:ignore
						unset( $_GET['activate'] ); // phpcs:ignore
					}
				}
			);
		}
	}
}
