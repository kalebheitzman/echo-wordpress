<?php
/**
 * Echo Database
 *
 * @package Echo
 */

global $echo_db_version;
$echo_db_version = '1.0';

if ( ! function_exists( 'echo_install_tables' ) ) :
	/**
	 * Install Echo Tables
	 */
	function echo_install_tables() {
		global $wpdb;
		global $echo_db_version;

		$table_name = $wpdb->prefix . 'echo_chat';

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
						id bigint(20) NOT NULL AUTO_INCREMENT,
						time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
						user_id bigint(20) NOT NULL,
						msg text NOT NULL,
						PRIMARY KEY (id)			
		) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $sql );

		var_dump($sql);

		add_option( 'echo_db_version', $echo_db_version );
	}

endif;

