<?php
/**
 * Unregister Styles
 *
 * @package Echo
 */

if ( ! function_exists( 'echo_unregister_styles' ) ) :
	/**
	 * Unregsiter Styles
	 */
	function echo_unregister_styles() {
		$theme = wp_get_theme();
		var_dump($theme);	
		$stylesheet = get_stylesheet();
		wp_dequeue_style( $stylesheet );
		wp_deregister_style( $stylesheet );
	}
	add_action( 'wp_enqueue_scripts', 'echo_unregister_styles', 20 );
endif;
