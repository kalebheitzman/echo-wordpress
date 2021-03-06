<?php
/**
 * Project Echo Event Template
 *
 * @package Echo
 * @since 0.1.0
 */

global $post;

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<title>Welcome | <?php echo esc_attr( $post->post_title ); ?></title>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="wp-project-echo"></div>
	<?php wp_footer(); ?>
</body>
</html>
