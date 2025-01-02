<?php
/**
 * Plugin Name:       Gutenberg Block Collection
 * Description:       A collection of custom Gutenberg blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            MdAsifHossainNadim
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gbc-blocks
 */

// don't call the file directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class GBC_Blocks {

	/**
	 * Plugin version.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $version = '1.0.0';

	/**
	 * Instance of self.
	 *
	 * @since 1.0.0
	 *
	 * @var GBC_Blocks
	 */
	private static $instance = null;

	/**
	 * Constructor for the GBC_Blocks class.
	 *
	 * Sets up all the appropriate hooks and actions
	 * within our plugin.
	 */
	private function __construct() {
		$this->define_constants();
		$this->init_hooks();
	}

	/**
	 * Initialize singleton instance.
	 *
	 * @since 1.0.0
	 *
	 * @return GBC_Blocks
	 */
	public static function init() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Define plugin constants.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	private function define_constants() {
		define( 'GBC_VERSION', $this->version );
		define( 'GBC_FILE', __FILE__ );
		define( 'GBC_PATH', dirname( GBC_FILE ) );
		define( 'GBC_URL', plugins_url( '', GBC_FILE ) );
		define( 'GBC_ASSETS', GBC_URL . '/assets' );
	}

	/**
	 * Initialize hooks.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	private function init_hooks() {
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_filter( 'block_categories_all', [ $this, 'register_block_category' ] );
	}

	/**
	 * Load plugin textdomain.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'gbc-blocks', false, dirname( plugin_basename( GBC_FILE ) ) . '/languages' );
	}

	/**
	 * Register blocks.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_blocks() {
		$blocks = [
			'faqs',
			'pricing',
			'countdown',
			'list-item',
			'video-popup',
			'subscribe-field',
			'counter-animation',
			'customer-feedback',
		];

		foreach ( $blocks as $block ) {
			register_block_type( GBC_PATH . '/build/' . $block );
			wp_set_script_translations( 'gbc-blocks-' . $block, 'gbc-blocks', GBC_PATH . '/languages' );
		}

		load_plugin_textdomain( 'gbc-blocks', false, dirname( plugin_basename( GBC_FILE ) ) . '/languages' );
	}

	/**
	 * Register block category.
	 *
	 * @since 1.0.0
	 *
	 * @param array $categories
	 *
	 * @return array
	 */
	public function register_block_category( $categories ) {
		return array_merge(
			[
				[
					'slug' => 'gbc-blocks',
					'title' => esc_html__( 'Block Collection', 'gbc-blocks' ),
				]
			],
			$categories
		);
	}
}

/**
 * Initialize the plugin
 *
 * @since 1.0.0
 *
 * @return GBC_Blocks
 */
function gbc_blocks() {
	return GBC_Blocks::init();
}

// Let's begin
gbc_blocks();
