import domReady from '@wordpress/dom-ready';
import { createRoot, useState } from '@wordpress/element';
import Minus from './icons/Minus';
import Plus from './icons/Plus';

const Accordion = ( { attributes } ) => {
	const { faqs } = attributes;
	const [ active, setActive ] = useState( 1 );

	return (
		<>
			{ faqs.map( ( faq ) => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div
					className={ `gbc-faq${
						faq.id === active ? ' gbc-faq-active' : ''
					}` }
					key={ faq.id }
					onClick={ () => setActive( faq.id ) }
				>
					<div className="gbc-faq-title">{ faq.question }</div>
					<div className="gbc-faq-description">
						<p
							dangerouslySetInnerHTML={ {
								__html: faq.answer,
							} }
						></p>
					</div>
					{ faq.id === active ? <Minus /> : <Plus /> }
				</div>
			) ) }
		</>
	);
};

domReady( () => {
	const mountElement = document.querySelectorAll(
		'.wp-block-gbc-blocks-faqs'
	);
	const mountElementArr = Array.from( mountElement );

	mountElementArr.forEach( ( item ) => {
		createRoot( item ).render(
			<Accordion
				attributes={ JSON.parse(
					item.getAttribute( 'data-block-attributes' )
				) }
			/>
		);
	} );
} );
