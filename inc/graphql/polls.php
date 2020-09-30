<?php
/**
 * GraphQL Polls
 *
 * @package Echo
 * @since 0.1.0
 */

if ( ! function_exists( 'echo_register_choose_mutation' ) ) :
	/**
	 * Choose Mutation
	 */
	function echo_register_choose_mutation() {

		register_graphql_mutation(
			'updateChoosePoll',
			array(
				// input fields.
				'inputFields' => array(
					'eventId' => array(
						'type'        => 'String',
						'description' => __( 'ID of Event', 'echo' ),
					),
					'value' => array(
						'type' => 'Boolean',
						'description' => __( 'Value of Choose Poll', 'echo' ),
					),
				),
				// output fields.
				'outputFields' => array(
					'eventId' => array(
						'type'        => 'String',
						'description' => 'EventID'
					),
					'value' => array(
						'type'        => 'Boolean',
						'description' => 'Choose Poll Value'
					),
				),
				// mutateAndGetPayload.
				'mutateAndGetPayload' => function( $input, $context, $info ) {

					return array(
						'eventId' => $input['eventId'],
						'value'   => $input['value'],
					);
				},
			)
		);
	}

	add_action( 'graphql_register_types', 'echo_register_choose_mutation' );
endif;
