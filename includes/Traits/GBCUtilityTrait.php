<?php

namespace GBC\Blocks\Traits;

trait GBCUtilityTrait {

	/**
	 * Register blocks.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	protected function register_block( $name, $options = array() ) {
		register_block_type( GBC_PATH . '/build/' . $name, $options );
	}
}