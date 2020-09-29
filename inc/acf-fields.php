<?php // phpcs:ignorefile
/**
 * ACF Fields for Project Echo
 *
 * @package Echo
 * @since 0.1.0
 */

if( function_exists('acf_add_local_field_group') ):

	acf_add_local_field_group(array(
		'key' => 'group_5f61253a221c5',
		'title' => 'Echo Social Login',
		'fields' => array(
			array(
				'key' => 'field_5f612540e4110',
				'label' => 'Google Client ID',
				'name' => 'echo_google_client_id',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
			array(
				'key' => 'field_5f62987617915',
				'label' => 'Facebook App ID',
				'name' => 'echo_facebook_app_id',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'echo_options_page',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'echoSocialLogin',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f43f62b323f3',
		'title' => 'Event Information & Branding',
		'fields' => array(
			array(
				'key' => 'field_5f43f9574cef7',
				'label' => 'Event Livestream URL',
				'name' => 'event_livestream_url',
				'type' => 'url',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '100',
					'class' => 'event-livestream-url',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => '',
				'placeholder' => '',
			),
			array(
				'key' => 'field_5f43f65a48fe6',
				'label' => 'Event Start Time',
				'name' => 'event_start_time',
				'type' => 'date_time_picker',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => 'event-start-time',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'display_format' => 'F j, Y g:i a',
				'return_format' => 'F j, Y g:i a',
				'first_day' => 1,
			),
			array(
				'key' => 'field_5f43f68748fe7',
				'label' => 'Event End Time',
				'name' => 'event_end_time',
				'type' => 'date_time_picker',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => 'event-end-time',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'display_format' => 'F j, Y g:i a',
				'return_format' => 'F j, Y g:i a',
				'first_day' => 1,
			),
			array(
				'key' => 'field_5f486c12e3ad9',
				'label' => 'Event Logo',
				'name' => 'event_logo',
				'type' => 'image',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'return_format' => 'array',
				'preview_size' => 'medium',
				'library' => 'all',
				'min_width' => '',
				'min_height' => '',
				'min_size' => '',
				'max_width' => '',
				'max_height' => '',
				'max_size' => '',
				'mime_types' => 'png, jpg, jpeg',
			),
			array(
				'key' => 'field_5f4fd7c40f80d',
				'label' => 'Event Colors',
				'name' => 'event_colors',
				'type' => 'group',
				'instructions' => 'Set colors to match your event branding.',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_5f4fd971196c3',
						'label' => 'HTML Background',
						'name' => 'html_background',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#333333',
					),
					array(
						'key' => 'field_5f4fd9c405d48',
						'label' => 'Body Backgound',
						'name' => 'body_backgound',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#FFFFFF',
					),
					array(
						'key' => 'field_5f4fd7e40f80e',
						'label' => 'Primary Background Color',
						'name' => 'primary_background_color',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#ff444e',
					),
					array(
						'key' => 'field_5f4fd904196c2',
						'label' => 'Primary Background Hover',
						'name' => 'primary_background_hover',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#ff4447',
					),
					array(
						'key' => 'field_5f4fd87c7df9d',
						'label' => 'Primary Text Color',
						'name' => 'primary_text_color',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#FFFFFF',
					),
					array(
						'key' => 'field_5f4fd8a77df9e',
						'label' => 'Text Color',
						'name' => 'text_color',
						'type' => 'color_picker',
						'instructions' => '',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '#333333',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'eventInformation',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f45d1ee2968d',
		'title' => 'Schedule Information',
		'fields' => array(
			array(
				'key' => 'field_5f442390871c9',
				'label' => 'Event Schedule',
				'name' => 'event_schedule',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'collapsed' => '',
				'min' => 0,
				'max' => 0,
				'layout' => 'row',
				'button_label' => 'Add Schedule Item',
				'sub_fields' => array(
					array(
						'key' => 'field_5f4423a4871ca',
						'label' => 'Schedule Item Time',
						'name' => 'schedule_item_time',
						'type' => 'date_time_picker',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'display_format' => 'F j, g:i a',
						'return_format' => 'm/d/Y g:i a',
						'first_day' => 1,
					),
					array(
						'key' => 'field_5f4423ed871cb',
						'label' => 'Schedule Item Title',
						'name' => 'schedule_item_title',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_5f44243384a26',
						'label' => 'Schedule Item Description',
						'name' => 'schedule_item_description',
						'type' => 'textarea',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'maxlength' => '',
						'rows' => 4,
						'new_lines' => 'wpautop',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 1,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'scheduleInformation',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f45cf91937ab',
		'title' => 'Rooms Information',
		'fields' => array(
			array(
				'key' => 'field_5f43f99740532',
				'label' => 'Rooms',
				'name' => 'event_rooms',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => 'event-breakout-rooms',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'collapsed' => '',
				'min' => 0,
				'max' => 0,
				'layout' => 'row',
				'button_label' => 'Add Event Room',
				'sub_fields' => array(
					array(
						'key' => 'field_5f43f9bb40533',
						'label' => 'Room Slug',
						'name' => 'event_room_slug',
						'type' => 'text',
						'instructions' => 'Enter a unique hyphenated room slug such as echo-room-1.',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => 'breakout-room-url',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => 'echo-room-1',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_5f43fa93bda9c',
						'label' => 'Room Title',
						'name' => 'event_room_title',
						'type' => 'text',
						'instructions' => 'Enter a room title such as Echo Room 1.',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => 'Echo Room 1',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_5f45758aa02b1',
						'label' => 'Room Description',
						'name' => 'event_room_description',
						'type' => 'textarea',
						'instructions' => 'Enter a description for this room.',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'maxlength' => '',
						'rows' => 4,
						'new_lines' => '',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 2,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'roomsInformation',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f47a63793ced',
		'title' => 'Q&A Information',
		'fields' => array(
			array(
				'key' => 'field_5f47a6503a5d1',
				'label' => 'Questions & Answers',
				'name' => 'event_questions',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'collapsed' => '',
				'min' => 0,
				'max' => 0,
				'layout' => 'row',
				'button_label' => 'Add Q&A',
				'sub_fields' => array(
					array(
						'key' => 'field_5f47a6733a5d2',
						'label' => 'Question',
						'name' => 'event_question',
						'type' => 'textarea',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'maxlength' => '',
						'rows' => 4,
						'new_lines' => 'wpautop',
					),
					array(
						'key' => 'field_5f47a68b3a5d3',
						'label' => 'Answer',
						'name' => 'event_answer',
						'type' => 'textarea',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'maxlength' => '',
						'rows' => '',
						'new_lines' => 'wpautop',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 3,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'qaInformation',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f47b60de082d',
		'title' => 'Polls Information',
		'fields' => array(
			array(
				'key' => 'field_5f47b61d27ce8',
				'label' => 'Event Polls',
				'name' => 'event_polls',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'collapsed' => '',
				'min' => 0,
				'max' => 0,
				'layout' => 'row',
				'button_label' => 'Add Poll',
				'sub_fields' => array(
					array(
						'key' => 'field_5f47b63527ce9',
						'label' => 'Event Poll Question',
						'name' => 'event_poll_question',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_5f47b94f2cf4f',
						'label' => 'Event Poll Type',
						'name' => 'event_poll_type',
						'type' => 'radio',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'choices' => array(
							'choose' => 'Yes/No',
							'scale' => 'Scale 1-5',
							'options' => 'Multiple Options',
						),
						'allow_null' => 0,
						'other_choice' => 0,
						'default_value' => '',
						'layout' => 'horizontal',
						'return_format' => 'value',
						'save_other_choice' => 0,
					),
					array(
						'key' => 'field_5f47bacf2d7da',
						'label' => 'Event Poll Options',
						'name' => 'event_poll_options',
						'type' => 'repeater',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => array(
							array(
								array(
									'field' => 'field_5f47b94f2cf4f',
									'operator' => '==',
									'value' => 'options',
								),
							),
						),
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'collapsed' => '',
						'min' => 0,
						'max' => 0,
						'layout' => 'row',
						'button_label' => 'Add Option',
						'sub_fields' => array(
							array(
								'key' => 'field_5f47bb2e2d7db',
								'label' => 'Option',
								'name' => 'event_option_question',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'show_in_graphql' => 1,
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
							),
						),
					),
					array(
						'key' => 'field_5f6370006298c',
						'label' => 'Event Poll Data',
						'name' => 'event_poll_data',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'show_in_graphql' => 1,
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 4,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'pollsInformation',
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_5f7384c3c7ae2',
		'title' => 'Event Settings',
		'fields' => array(
			array(
				'key' => 'field_5f738515a9a84',
				'label' => 'Enable Main Stage',
				'name' => 'enable_main_stage',
				'type' => 'true_false',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'message' => 'Enabled',
				'default_value' => 1,
				'ui' => 0,
				'ui_on_text' => '',
				'ui_off_text' => '',
			),
			array(
				'key' => 'field_5f73852ba9a85',
				'label' => 'Main Stage Label',
				'name' => 'main_stage_label',
				'type' => 'text',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => 'Main Stage',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
			array(
				'key' => 'field_5f7385a57ba34',
				'label' => 'Enable Rooms',
				'name' => 'enable_rooms',
				'type' => 'true_false',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'message' => 'Enabled',
				'default_value' => 1,
				'ui' => 0,
				'ui_on_text' => '',
				'ui_off_text' => '',
			),
			array(
				'key' => 'field_5f7385da7ba36',
				'label' => 'Rooms Label',
				'name' => 'rooms_label',
				'type' => 'text',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => 'Rooms',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
			array(
				'key' => 'field_5f73861268575',
				'label' => 'Enable Q&A',
				'name' => 'enable_qa',
				'type' => 'true_false',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'message' => 'Enabled',
				'default_value' => 1,
				'ui' => 0,
				'ui_on_text' => '',
				'ui_off_text' => '',
			),
			array(
				'key' => 'field_5f73863068576',
				'label' => 'Q&A Label',
				'name' => 'qa_label',
				'type' => 'text',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '50',
					'class' => '',
					'id' => '',
				),
				'show_in_graphql' => 1,
				'default_value' => 'Q&A',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'event',
				),
			),
		),
		'menu_order' => 100,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => 'Event Settings',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'eventSettings',
	));
	
	endif;