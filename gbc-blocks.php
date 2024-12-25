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

require_once __DIR__ . '/vendor/autoload.php';

// Use the necessary namespace.
use \GBC\Blocks\Traits\GBCUtilityTrait;

final class GBC_Blocks {

	use GBCUtilityTrait;

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
//		add_action( 'init', [ $this, 'load_textdomain' ] );
		add_action( 'init', [ $this, 'register_blocks' ] );
//		add_action( 'wp_enqueue_scripts', [ $this, 'frontend_assets' ] );
//		add_action( 'enqueue_block_editor_assets', [ $this, 'editor_assets' ] );
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
			'countdown',
		];

		foreach ( $blocks as $block ) {
			$this->register_block( $block );
		}
	}

	/**
	 * Enqueue editor assets.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function editor_assets() {
		wp_enqueue_script(
			'gbc-editor-script',
			GBC_ASSETS . '/js/editor.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
			GBC_VERSION
		);

		wp_enqueue_style(
			'gbc-editor-style',
			GBC_ASSETS . '/css/editor.css',
			[ 'wp-edit-blocks' ],
			GBC_VERSION
		);
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function frontend_assets() {
		wp_enqueue_style(
			'gbc-style',
			GBC_ASSETS . '/css/style.css',
			[],
			GBC_VERSION
		);
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
