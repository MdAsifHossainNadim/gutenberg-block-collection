import domReady from '@wordpress/dom-ready';
import { createRoot, render } from '@wordpress/element';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


const App = ( { attributes } ) => {
	const {
        clientSayItems,
		navigationShow,
		autoplay
    } = attributes;

	return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            autoHeight={true}
            slidesPerView={1}
            navigation={navigationShow}
            pagination={{ 
                clickable: false,
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return `
                        <span class="fraction-number">${current}</span>
						 	<div class="swiper-pagination-progressbar">
                    	        <span class="swiper-pagination-progressbar-fill-active" style='width: ${ 100 / total * current + '%'}'></span>
                    	    </div> 
                        <span class="fraction-number">${total}</span>
                    `;
                },
                
            }}
            autoplay={autoplay}
        >
            { clientSayItems &&
				clientSayItems?.map( ( testimonial, index ) => (
                    <SwiperSlide>
                        <div className='single-items' key={index}>
                            <div className='author-info'>
                                {
                                    testimonial.authorImg.url ? (
                                        <img className='author-image' src={testimonial.authorImg.url} atl={testimonial.authorImg.alt} title={testimonial.authorImg.title} width="72"/>
                                    ) : (
                                        <div className='default-image'></div>
                                    )
                                }
                                {
                                    testimonial.authorText && (
                                        <h4>{testimonial.authorText}</h4>
                                    )
                                }
                                {
                                    testimonial.designation && (
                                        <h5>{testimonial.designation}</h5>
                                    )
                                }
                                {
                                    testimonial.companyLogo.url ? (
                                        <img className='company-logo' src={testimonial.companyLogo.url} atl={testimonial.companyLogo.alt} title={testimonial.companyLogo.title} width="170"/>
                                    ) : (
                                        <div className='default-image'></div>
                                    )
                                }
                            </div>
                            <div className='content-info'>
                                <span className='quote'>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.61479 7.52783C1.87688 7.19118 0.563477 5.65998 0.563477 3.82461C0.563477 1.74266 2.2534 0.0527344 4.33536 0.0527344C6.41731 0.0527344 8.10723 1.74266 8.10723 3.82461C8.10723 6.59907 7.17257 8.32222 6.07548 9.39937C4.39589 11.0487 2.29253 11.1919 2.29253 11.1919C2.07843 11.2074 1.8754 11.0974 1.77057 10.9106C1.66499 10.7246 1.67754 10.4935 1.80157 10.3193C1.80157 10.3193 2.80121 8.91211 3.42432 7.87113C3.48929 7.76187 3.55499 7.64153 3.61479 7.52783Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9429 7.52783C11.205 7.19118 9.8916 5.65998 9.8916 3.82461C9.8916 1.74266 11.5815 0.0527344 13.6635 0.0527344C15.7454 0.0527344 17.4354 1.74266 17.4354 3.82461C17.4354 6.59907 16.5007 8.32222 15.4036 9.39937C13.724 11.0487 11.6207 11.1919 11.6207 11.1919C11.4066 11.2074 11.2035 11.0974 11.0987 10.9106C10.9939 10.7246 11.0057 10.4935 11.1297 10.3193C11.1297 10.3193 12.1293 8.91211 12.7524 7.87113C12.8174 7.76187 12.8831 7.64153 12.9429 7.52783Z" fill="white"/>
                                    </svg>
                                </span>
                                <p>{testimonial.descText}</p>
                            </div>
                        </div>
                    </SwiperSlide>
					
				) ) }
            
        </Swiper>
	);
};

domReady( () => {
	const elements = document.querySelectorAll(
		'.wp-block-gbc-blocks-customer-feedback'
	);
	const elementsArr = Array.from( elements );

	elementsArr.forEach( ( item ) => {
		if ( createRoot ) {
			createRoot( item ).render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-attributes' )
					) }
				/>
			);
		} else {
			render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-attributes' )
					) }
				/>,
				item
			);
		}
	} );
} );
