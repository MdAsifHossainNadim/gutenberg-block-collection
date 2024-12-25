import { registerBlockType } from '@wordpress/blocks';
import metaData from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( metaData.name, {
	...metaData,
	edit: Edit,
	save: Save,
} );
