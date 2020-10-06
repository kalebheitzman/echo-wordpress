<?php
/**
 * Auto Approve Comments
 *
 * @package Echo
 * @since 0.1.2
 */

if ( ! function_exists( 'echo_autoapprove_comment' ) ) :

	/**
	 * Auto Approve Comments on Event Post Type
	 *
	 * @param [integer] $comment_id Comment Id.
	 * @param [object]  $comment_object WordPress Comment.
	 */
	function echo_autoapprove_comment( $comment_id, $comment_object ) {

		$post_id = $comment_object->comment_post_ID;
		if ( 'event' === get_post_type( $post_id ) ) {
			$retrieved_comment              = get_comment( $comment_id, ARRAY_A );
			$commentarr                     = $retrieved_comment;
			$commentarr['comment_ID']       = $comment_id;
			$commentarr['comment_approved'] = 1;
			wp_update_comment( $commentarr );
		}
	}

	add_action( 'wp_insert_comment', 'echo_autoapprove_comment', 99, 2 );
	add_filter( 'duplicate_comment_id', '__return_false' );
endif;
