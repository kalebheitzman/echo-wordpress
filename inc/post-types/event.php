<?php
/**
 * Event Custom Post Type
 *
 * @package Echo
 * @since 1.0.0
 */

/**
 * Register Event Custom Post Type
 */
function echo_event_post_type() {

	$labels = array(
		'name'                  => _x( 'Events', 'Post Type General Name', 'echo' ),
		'singular_name'         => _x( 'Event', 'Post Type Singular Name', 'echo' ),
		'menu_name'             => __( 'Events', 'echo' ),
		'name_admin_bar'        => __( 'Events', 'echo' ),
		'archives'              => __( 'Event Archives', 'echo' ),
		'attributes'            => __( 'Event Attributes', 'echo' ),
		'parent_item_colon'     => __( 'Parent Event', 'echo' ),
		'all_items'             => __( 'All Events', 'echo' ),
		'add_new_item'          => __( 'Add New Event', 'echo' ),
		'add_new'               => __( 'Add Event', 'echo' ),
		'new_item'              => __( 'New Event', 'echo' ),
		'edit_item'             => __( 'Edit Event', 'echo' ),
		'update_item'           => __( 'Update Event', 'echo' ),
		'view_item'             => __( 'View Event', 'echo' ),
		'view_items'            => __( 'View Events', 'echo' ),
		'search_items'          => __( 'Search Event', 'echo' ),
		'not_found'             => __( 'Not found', 'echo' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'echo' ),
		'featured_image'        => __( 'Featured Image', 'echo' ),
		'set_featured_image'    => __( 'Set featured image', 'echo' ),
		'remove_featured_image' => __( 'Remove featured image', 'echo' ),
		'use_featured_image'    => __( 'Use as featured image', 'echo' ),
		'insert_into_item'      => __( 'Insert into event', 'echo' ),
		'uploaded_to_this_item' => __( 'Uploaded to this event', 'echo' ),
		'items_list'            => __( 'Events list', 'echo' ),
		'items_list_navigation' => __( 'Events list navigation', 'echo' ),
		'filter_items_list'     => __( 'Filter events list', 'echo' ),
	);
	$args = array(
		'label'               => __( 'Event', 'echo' ),
		'description'         => __( 'A collection of events', 'echo' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'custom-fields' ),
		'taxonomies'          => array( 'category', 'post_tag' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-calendar-alt',
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest'        => true,
		'hierarchical'        => false,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'event',
		'graphql_plural_name' => 'events',
	);
	register_post_type( 'event', $args );

}
add_action( 'init', 'echo_event_post_type', 0 );
