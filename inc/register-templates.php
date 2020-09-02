<?php
/**
 * Register Templates
 *
 * @package Echo
 */

if ( ! function_exists( 'echo_register_event_template' ) ) :
	/**
	 * Register Event Template
	 *
	 * @param String $template Template File.
	 */
	function echo_register_event_template( $template ) {
		if ( is_singular( 'event' ) ) {
			$template = plugin_dir_path( dirname( __FILE__ ) ) . 'inc/templates/singular-event.php';
		}

		return $template;
	}
	add_filter( 'single_template', 'echo_register_event_template', 50, 1 );
endif;
