<?php
/**
 * Echo Rest Endpoint
 *
 * @package Echo
 * @since 0.1.2
 */

if ( ! function_exists( 'echo_register_endpoint' ) ) :

	/**
	 * Register Custom REST Endpoint
	 */
	function echo_register_endpoint() {

		$args = array(
			'post_type' => 'event',
		);
	}

	add_action(
		'rest_api_init',
		function() {
			register_rest_route(
				'echo/v1',
				'/event/(?P<id>\d+)',
				array(
					'methods'  => 'GET',
					'callback' => 'echo_register_endpoint',
				)
			);
		}
	);

endif;
