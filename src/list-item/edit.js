import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import {
    Panel,
    PanelBody,
    TextareaControl, ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit(  { attributes, setAttributes } ) {
    const {
        listItem,
        enableTooltip,
        tooltipContent,
        textColor
    } = attributes;

    const blockProps = useBlockProps();
    return (
        <div className='comparison-table-wrapper' { ...blockProps }>
            <div className='comparison-list'>
                <InspectorControls>
                    <Panel>
                        <PanelBody title={ __( 'Tooltip', 'gbc-blocks' ) }>
                            <ToggleControl
                                label={ __( 'Show Tooltip', 'gbc-blocks' ) }
                                checked={ enableTooltip }
                                onChange={ () => {
                                    setAttributes( {
                                        enableTooltip: ! enableTooltip,
                                    } );
                                } }
                            />
                            { enableTooltip && (
                                <TextareaControl
                                    label="Tooltop Content"
                                    help="Enter some tooltip content here"
                                    value={ tooltipContent }
                                    onChange={ ( value ) => {
                                        setAttributes( {
                                            tooltipContent: value,
                                        } );
                                    } }
                                />
                            ) }

                        </PanelBody>

                    </Panel>
                </InspectorControls>
                <div>
                    <RichText
                        value={listItem}
                        placeholder='List'
                        onChange={ ( value ) => setAttributes( { listItem: value } ) }
                    />
                </div>
            </div>
        </div>
    )
}
