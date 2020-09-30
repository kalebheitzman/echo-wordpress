<?php
/**
 * Twitter Callback
 *
 * @package Echo
 * @since 0.1.0
 */

session_start();
require '../../vendor/autoload.php';

use Abraham\TwitterOAuth\TwitterOAuth;
use PhpPrivateAccess\MyClass;

$client = \Softonic\GraphQL\ClientBuilder::build( 'http://echo.local/graphql' );

$query = <<<'QUERY'
query GetCredentials {
	projectEcho {
		echoSocialLogin {
			echoTwitterConsumerKey
			echoTwitterConsumerSecret
		}
	}
}
QUERY;


$response = (array) $client->query( $query );

$key    = null;
$secret = null;
foreach ( $response as $item ) {
	if ( array_key_exists( 'projectEcho', $item ) ) {
		$key    = $item['projectEcho']['echoSocialLogin']['echoTwitterConsumerKey'];
		$secret = $item['projectEcho']['echoSocialLogin']['echoTwitterConsumerSecret'];
	}
}

$request_token = [];
$request_token['oauth_token'] = $_REQUEST['oauth_token'];
$connection = new TwitterOAuth($key, $secret, $request_token['oauth_token']);
$access_token = $connection->oauth("oauth/access_token", array("oauth_verifier" => $_REQUEST['oauth_verifier']));
$_SESSION['access_token'] = $access_token;


var_dump($_SESSION);