import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
        regularPrice,
        priceHelpText,
        discountPrice,
        discountHelpText,
        enableCampaign,
        campaignPercent
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'gbc-blocks' ) }>
                <ToggleControl
                    className='wpf-component_toggle-control'
                    label={ __( 'Enable Campaign', 'gbc-blocks' ) }
                    checked={ enableCampaign }
                    onChange={ () => {
                        setAttributes( {
                            enableCampaign: ! enableCampaign,
                        } );
                    } }
                />
                {
                    enableCampaign && (
                        <TextControl
                            type="text"
                            label={ __( 'Discount Percent', 'gbc-blocks' ) }
                            help={ __( 'Enter campaign percent amount here', 'gbc-blocks' ) }
                            value={ campaignPercent }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    campaignPercent: value
                                } );
                            } }
                        />
                    )
                }
                <TextControl
                    type="number"
                    label={ __( 'Pricing', 'gbc-blocks' ) }
                    help={ __( 'Enter monthly price here', 'gbc-blocks' ) }
                    value={ regularPrice }
                    onChange={ ( value ) => {
                        setAttributes( {
                            regularPrice: value
                        } );
                    } }
                />
                <ToggleControl
                    className='wpf-component_toggle-control'
                    label={ __( 'Discount Price', 'gbc-blocks' ) }
                    checked={ discountPrice }
                    onChange={ () => {
                        setAttributes( {
                            discountPrice: ! discountPrice,
                        } );
                    } }
                />

                <TextControl
                    label={ __( 'Price help text', 'gbc-blocks' ) }
                    help={ __( 'x12', 'gbc-blocks' ) }
                    value={ priceHelpText }
                    onChange={ ( value ) => {
                        setAttributes( {
                            priceHelpText: value
                        } );
                    } }
                />
                
                <TextControl
                    label={ __( 'Help text', 'gbc-blocks' ) }
                    help={ __( 'Display saving discount text ( Save ~ 20% )', 'gbc-blocks' ) }
                    value={ discountHelpText }
                    onChange={ ( value ) => {
                        setAttributes( {
                            discountHelpText: value
                        } );
                    } }
                />
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
