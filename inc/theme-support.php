<?php
/**
 * Plugin Theme Support
 *
 * @package Echo
 * @since 0.1.0
 */

add_theme_support( 'post-thumbnails' );

add_image_size(
	'echo-hero',
	1600,
	700,
	true
);

if ( ! function_exists( 'echo_image_sizes' ) ) :
	/**
	 * Echo Image Sizes
	 *
	 * @param Array $sizes Image Sizes.
	 */
	function echo_image_sizes( $sizes ) {
		return array_merge(
			$sizes,
			array(
				'echo-hero' => __( 'Echo Hero', 'echo' ),
			)
		);
	}
	add_filter( 'image_size_names_choose', 'echo_image_sizes' );
endif;
