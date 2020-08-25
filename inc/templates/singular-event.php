<?php
/**
 * Project Echo Event Template
 *
 * @package Echo
 * @since 0.0.1
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<a class="skip-link screen-reader-text" href="#wp-project-echo">
		<?php esc_attr_e( 'Skip to content', 'echo' ); ?>
	</a>

	<div id="wp-project-echo"></div>

	<?php wp_footer(); ?>
</body>
</html>
