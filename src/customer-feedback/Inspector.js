import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { nanoid } from 'nanoid';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
        clientSayItems,
        testimonial_number,
		navigationShow,
		autoplay

	} = attributes;

	return (
        <>  
            <InspectorControls>
                <PanelBody title={ __( 'General', 'testimonial-carousel-block' ) }>
                    <RangeControl
                        label={ __( 'Number of Testimonials', 'testimonial-carousel-block' ) }
                        value={ testimonial_number }

                        onChange={ ( newNumber ) => {
                            const cloneBlocks = [ ...clientSayItems ];
                            
                            if ( cloneBlocks.length < newNumber ) {
                                const numbers = Math.abs( newNumber - cloneBlocks.length );
                                for ( let i = 0; i < numbers; i++ ) {
                                    cloneBlocks.push( {
                                        id: nanoid(),
                                        descText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec nunc.',
                                        authorText: 'Mohammad Hossain',
                                        designation: 'Director & Prayer Connect',
                                        authorImg: '',
                                        companyLogo: '',
                                    } );
                                }
                                setAttributes( {
                                    clientSayItems: cloneBlocks,
                                } );
                            } else {
                                const numbers = Math.abs( newNumber - cloneBlocks.length );
                                const data_new = cloneBlocks;
                                for ( let i = 0; i < numbers; i++ ) {
                                    data_new.pop();
                                }
                                setAttributes( {
                                    clientSayItems: data_new,
                                } );
                            }
                            setAttributes( {
                                testimonial_number: newNumber,
                            } );
                        } }
                        min={ 1 }
                        max={ 50 }
                    />
                    
                </PanelBody>
                <PanelBody title={ __( 'Carousel Settings', 'testimonial-carousel-block' ) } initialOpen={false}>
                    <ToggleControl
                        className='wpf-component_toggle-control'
                        label={ __( 'Show Arrows', 'testimonial-carousel-block' ) }
                        checked={ navigationShow }
                        onChange={ () => {
                            setAttributes( {
                                navigationShow: ! navigationShow,
                            } );
                        } }
                    />

                    <ToggleControl
                        className='wpf-component_toggle-control'
                        label={ __( 'Autoplay', 'testimonial-carousel-block' ) }
                        checked={ autoplay }
                        onChange={ () => {
                            setAttributes( {
                                autoplay: ! autoplay,
                            } );
                        } }
                    />
                </PanelBody>
            </InspectorControls>
        </>
	);
};

export default Inspector;
