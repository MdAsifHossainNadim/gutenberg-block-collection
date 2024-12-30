import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

registerBlockType( metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save,
} );
