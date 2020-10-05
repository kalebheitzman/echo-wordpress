<?php
/**
 * Options Page
 *
 * @package Echo
 * @since 0.1.0
 */

if ( function_exists( 'acf_add_options_page' ) ) :
	/**
	 * Register Options Page
	 */
	acf_add_options_page(
		array(
			'page_title'      => __( 'Echo', 'echo' ),
			'menu_title'      => __( 'Echo', 'echo' ),
			'menu_slug'       => 'echo_options_page',
			'capability'      => 'manage_options',
			'icon_url'        => 'dashicons-video-alt3',
			'redirect'        => false,
			'show_in_graphql' => true,
			'position'        => 2,
		)
	);

endif;
