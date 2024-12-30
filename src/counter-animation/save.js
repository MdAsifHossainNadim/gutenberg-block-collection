import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { start, end, duration } = attributes;
	return (
		<div
			{ ...useBlockProps.save() }
			data-counter-animation-start={ start }
			data-counter-animation-end={ end }
			data-counter-animation-duration={ duration }
		>
			<span>{ __( '0', 'gbc-blocks' ) }</span>
		</div>
	);
}
