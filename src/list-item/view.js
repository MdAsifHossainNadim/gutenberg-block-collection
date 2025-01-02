import domReady from '@wordpress/dom-ready';
import { createRoot, render } from '@wordpress/element';

const App = ( { attributes } ) => {
	const {
		listItem,
		enableTooltip,
		tooltipContent,
		fontSize,
		textColor
	} = attributes;

	return (
		<ul className='gbc-adv-list-item'>
			<li className={ `has-${fontSize}-font-size` }>
				<span dangerouslySetInnerHTML={ {
					__html: listItem
				} }></span>
				{ enableTooltip && (
					<div className='tooltipIcon'>
						<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.5234 10.5078C17.5234 14.6499 14.1656 18.0078 10.0234 18.0078C5.8813 18.0078 2.52344 14.6499 2.52344 10.5078C2.52344 6.36568 5.8813 3.00781 10.0234 3.00781C14.1656 3.00781 17.5234 6.36568 17.5234 10.5078Z" stroke="#92939B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M10.8566 13.8415H10.0233V10.5081H9.18994M10.0233 7.1748H10.0316" stroke="#92939B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>

						{
							tooltipContent && (
								<div className='tooltipContent'>
									<p>{tooltipContent}</p>
								</div>
							)
						}
					</div>
				) }

			</li>
		</ul>
	);
};

domReady( () => {
	const mountElement = document.querySelectorAll(
		'.wp-block-gbc-blocks-list-item'
	);
	const mountElementArr = Array.from( mountElement );

	mountElementArr.forEach( ( item ) => {
		if ( createRoot ) {
			createRoot( item ).render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-block-attributes' )
					) }
				/>
			);
		} else {
			render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-block-attributes' )
					) }
				/>,
				item
			);
		}
	} );
} );