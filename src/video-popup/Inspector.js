import {
    InspectorControls,
    MediaPlaceholder,
    MediaUpload,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, Toolbar, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( { attributes, setAttributes } ) => {
    const {
        videoUrl,
        isPlayButton,
        colorIcon,
        url,
        alt,
        id,
    } = attributes;

    const onSelectImage = ( media ) => {
        setAttributes({
            id: media.id,
            url: media.url,
            alt: media.alt
        })
    }

    const onSelectURL = ( newURL ) => {
        if ( newURL !== url ) {
            setAttributes( {
                url: newURL,
                id: undefined,
            } );
        }
    }

    return (
        <InspectorControls>
            <PanelBody title={ __( 'Settings', 'gbc-blocks' ) }>
                <ToggleControl
                    label={ __( 'Display Play Button', 'gbc-blocks' ) }
                    checked={ isPlayButton }
                    onChange={ ( value ) =>
                        setAttributes( { isPlayButton: value } )
                    }
                />
                <ToggleControl
                    label={ __( 'Play Color Button', 'gbc-blocks' ) }
                    checked={ colorIcon }
                    onChange={ ( value ) =>
                        setAttributes( { colorIcon: value } )
                    }
                />
                <TextControl
                    label={ __( 'Video Url', 'gbc-blocks' ) }
                    value={ videoUrl }
                    onChange={ ( url ) => setAttributes( { videoUrl: url } ) }
                />

            </PanelBody>
            <PanelBody title={ __( 'Video Thumbanail', 'gbc-blocks' ) }>

                { !! url && (
                    <Toolbar>
                        <MediaUpload
                            onSelect={ onSelectImage }
                            allowedTypes = { [ 'image' ] }
                            value={ id }
                            render={ ( { open } ) => (
                                <ToolbarButton
                                    className='components-toolbar__control'
                                    label={ __( 'Edit Media', 'wperp-gutenbergblock' ) }
                                    icon='edit'
                                    onClick={ open }
                                />
                            )}
                        />
                    </Toolbar>
                )}
                <MediaPlaceholder
                    labels={
                        {
                            title: __( 'Image', 'wperp-gutenbergblock' ),
                            instructions: __( 'Upload an image file, pick one from your media library, or add one with a URL.', 'wperp-gutenbergblock' )
                        }
                    }
                    onSelect={ onSelectImage }
                    onSelectURL={ onSelectURL }
                    accept="image/*"
                    allowedTypes = { [ 'image' ] }
                    value={ { id, url } }
                />
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
