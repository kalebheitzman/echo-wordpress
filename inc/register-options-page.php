<?php
/**
 * Options Page
 *
 * @package Echo
 * @since 0.0.1
 */

if ( ! function_exists( 'echo_options_page' ) ) :
	/**
	 * Echo Options Page
	 *
	 * @since 0.0.1
	 */
	function echo_options_page() {
		?>

		<h1>Project Echo</h1>
		<p>Configure Project Echo to meet your livestreaming and 
		conferencing needs.</p>

		<h2>Color and Branding</h2>

		<?php
	}
endif;

if ( ! function_exists( 'echo_register_options_page' ) ) :
	/**
	 * Register Flight Manager Options Page
	 *
	 * @since 0.0.1
	 */
	function echo_register_options_page() {
		add_options_page(
			__( 'Project Echo', 'echo' ),
			__( 'Project Echo', 'echo' ),
			'manage_options',
			'echo',
			'echo_options_page',
			'2'
		);
	}

	add_action( 'admin_menu', 'echo_register_options_page' );
endif;
