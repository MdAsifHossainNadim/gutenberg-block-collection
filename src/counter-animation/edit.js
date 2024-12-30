import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { start, end, duration } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody>
					<TextControl
						type="number"
						label={ __( 'Start', 'gbc-blocks' ) }
						placeholder={ __( 'e.g., 0', 'gbc-blocks' ) }
						help={ __(
							'Set the starting number for the counter animation. This is the value from which the counter will begin counting up.',
							'gbc-blocks'
						) }
						value={ start }
						min={ 0 }
						onChange={ ( value ) =>
							setAttributes( { start: parseInt( value ) } )
						}
					/>
					<TextControl
						type="number"
						label={ __( 'End', 'gbc-blocks' ) }
						placeholder={ __( 'e.g., 5000', 'gbc-blocks' ) }
						help={ __(
							'Specify the ending number for the counter animation. This is the value at which the counter will stop.',
							'gbc-blocks'
						) }
						value={ end }
						min={ 0 }
						onChange={ ( value ) =>
							setAttributes( { end: parseInt( value ) } )
						}
					/>
					<TextControl
						type="number"
						label={ __( 'Duration', 'gbc-blocks' ) }
						placeholder={ __( 'e.g., 3000', 'gbc-blocks' ) }
						help={ __(
							'Define the total duration of the counter animation in milliseconds. For example, a value of 3000 means the animation will last 3 seconds.',
							'gbc-blocks'
						) }
						value={ duration }
						min={ 500 }
						step={ 100 }
						onChange={ ( value ) =>
							setAttributes( { duration: parseInt( value ) } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<span>{ end }</span>
		</div>
	);
}
