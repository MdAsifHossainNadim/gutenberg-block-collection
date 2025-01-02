import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl, ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
        action,
        buttonText,
        isRequired,
        enableButtonText,
        disableMessageIcon,
        placeholderText

	} = attributes;

	return (
        <>  
            <InspectorControls>
                <PanelBody title={ __( 'General', 'gbc-blocks' ) }>
                    <TextControl
                        type="text"
                        label={ __( 'Form Action API URL', 'gbc-blocks' ) }
                        value={ action }
                        onChange={ ( value ) => {
                            setAttributes( {
                                action: value
                            } );
                        } }
                    />
                    <TextControl
                        type="text"
                        label={ __( 'Placeholder Text', 'gbc-blocks' ) }
                        value={ placeholderText }
                        onChange={ ( value ) => {
                            setAttributes( {
                                placeholderText: value
                            } );
                        } }
                    />
                    <ToggleControl
                        className='gbc-component_toggle-control'
                        label={ __( 'Is Required', 'gbc-blocks' ) }
                        checked={ isRequired }
                        onChange={ () => {
                            setAttributes( {
                                isRequired: ! isRequired,
                            } );
                        } }
                    />
                    <ToggleControl
                        className='gbc-component_toggle-control'
                        label={ __( 'Disable Message Iocn', 'gbc-blocks' ) }
                        checked={ disableMessageIcon }
                        onChange={ () => {
                            setAttributes( {
                                disableMessageIcon: ! disableMessageIcon,
                            } );
                        } }
                    />
                    <ToggleControl
                        className='gbc-component_toggle-control'
                        label={ __( 'Enable Button Text', 'gbc-blocks' ) }
                        checked={ enableButtonText }
                        onChange={ () => {
                            setAttributes( {
                                enableButtonText: ! enableButtonText,
                            } );
                        } }
                    />
                    {
                        enableButtonText && (
                            <TextControl
                                type="text"
                                label={ __( 'Button Text', 'gbc-blocks' ) }
                                value={ buttonText }
                                onChange={ ( value ) => {
                                    setAttributes( {
                                        buttonText: value
                                    } );
                                } }
                            />
                        )
                    }
                    
                </PanelBody>
            </InspectorControls>
        </>
	);
};

export default Inspector;
