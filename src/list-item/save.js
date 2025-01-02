import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	return (
		<div
			{ ...useBlockProps.save() }
			data-block-attributes={ JSON.stringify( attributes ) }
		></div>
	);
}
