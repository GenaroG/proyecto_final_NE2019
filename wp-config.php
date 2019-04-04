<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'proyecto_ne2019' );

/** MySQL database username */
define( 'DB_USER', 'genaro' );

/** MySQL database password */
define( 'DB_PASSWORD', '1226198ss' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w_{]pHxyg[JxB}kl;IcG939&mUlZ={7`iH)22tAJQ-@{w;y3slBg`Pl3dOr;Wph6' );
define( 'SECURE_AUTH_KEY',  'vJqip!O+,vk2y3k?--F]pJ Nh5DR3;7/$Vg`$gv?d4gQB,~i<BZ?62-QrpCfJ?1v' );
define( 'LOGGED_IN_KEY',    'mQ:oMMNy#g@OQ9a2>$IJ8soQbDah@<Z2_)$SR`FV>@D=VnbrE>)MZ}>jYIb91(Yr' );
define( 'NONCE_KEY',        't/0yn0{6Z,+C-4t38bBmY$lU.pOX_5(4DMKeG#m}302Ho>I}u K5nh3QtHJ Tu(>' );
define( 'AUTH_SALT',        'tw_V{b_BVDAQ_TeuXfaWel[j.X3Ai+syy$,TcxLEIj`]?6K}+G~N6uko+Zz:B)$t' );
define( 'SECURE_AUTH_SALT', 'e+mpf4VXKgHk1&t,H]FNL1Zjc/bSN$e;7rG#sH|KZC]52Pon !GrFI).& >vjAv@' );
define( 'LOGGED_IN_SALT',   ',a{|?(h^Ub=Q4Y.I=9Kh3E2>[7@y2*p-;V`{],(B%;nQOVgfbJ#f2(Om dnehsLt' );
define( 'NONCE_SALT',       '%In#jc!vHSy&19KV4f}tkt)iw/o4<D6No$bGBruWJx/[8Ku0?b&zSMaa%5.S!Gs-' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

