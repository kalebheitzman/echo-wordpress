<?php
/**
 * Options Page
 *
 * @package Echo
 * @since 0.0.1
 */

if ( function_exists( 'acf_add_options_page' ) ) :
	/**
	 * Register Options Page
	 */
	acf_add_options_page(
		array(
			'page_title'      => __( 'Project Echo', 'echo' ),
			'menu_title'      => __( 'Project Echo', 'echo' ),
			'menu_slug'       => 'echo_options_page',
			'capability'      => 'manage_options',
			'redirect'        => false,
			'show_in_graphql' => true,
		)
	);

endif;
