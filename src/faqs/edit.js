import { nanoid } from 'nanoid';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import Minus from './icons/Minus';
import Plus from './icons/Plus';

const Edit = ( { attributes, setAttributes } ) => {
	const { faqs } = attributes;
	const blockProps = useBlockProps();
	const [ active, setActive ] = useState( 1 );
	const {
		globalColors,
		titleFontSize,
		titleColors,
		contentFontSize,
		contentColors,
		iconColors,
	} = attributes;

	const handleChange = ( value, key, id ) => {
		if ( value === '' ) {
			return;
		}

		const updatedFaq = faqs.map( ( ele ) => {
			return ele.id === id
				? {
					...ele,
					[ key ]: value,
				}
				: ele;
		} );

		setAttributes( {
			faqs: [ ...updatedFaq ],
		} );
	};

	const styles = {
		'--faq-bg-color': globalColors?.bgColor ? globalColors?.bgColor : null,
		'--faq-bg-hover-color': globalColors?.bgHoverColor
			? globalColors?.bgHoverColor
			: null,
		'--faq-bg-active-color': globalColors?.bgActiveColor
			? globalColors?.bgActiveColor
			: null,
		'--faq-title-color': titleColors?.defaultColor
			? titleColors?.defaultColor
			: null,
		'--faq-title-font-size': titleFontSize ? titleFontSize : null,
		'--faq-title-hover-color': titleColors?.hoverTextColor
			? titleColors?.hoverTextColor
			: null,
		'--faq-title-active-color': titleColors?.activeTextColor
			? titleColors?.activeTextColor
			: null,
		'--faq-desc-color': contentColors?.defaultColor
			? contentColors?.defaultColor
			: null,
		'--faq-content-font-size': contentFontSize ? contentFontSize : null,
		'--faq-desc-active-color': contentColors?.activeTextColor
			? contentColors?.activeTextColor
			: null,
		'--faq-icon-color': iconColors?.defaultColor
			? iconColors?.defaultColor
			: null,
		'--faq-icon-hover-color': iconColors?.hoverIconColor
			? iconColors?.hoverIconColor
			: null,
		'--faq-icon-active-color': iconColors?.activeIconColor
			? iconColors?.activeIconColor
			: null,
	};

	return (
		<div { ...blockProps } style={ styles }>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			{ faqs.map( ( faq ) => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div
					key={ faq.id }
					className={ `gbc-faq ${
						faq.id === active ? 'gbc-faq-active' : ''
					}` }
					onClick={ () => setActive( faq.id ) }
				>
					<Button
						showTooltip={ true }
						tooltipPosition="top"
						label={ __( 'Delete this FAQ', 'do-blocks' ) }
						variant="primary"
						style={ {
							background: '#ed5e68',
							position: 'absolute',
							top: '0',
							right: '0',
							height: '100%',
						} }
						icon={ <Dashicon icon="trash" /> }
						onClick={ () => {
							const deleteFaqs = faqs.filter(
								( ele ) => ele.id !== faq.id
							);

							setAttributes( {
								faqs: [ ...deleteFaqs ],
							} );
						} }
					/>
					<div className="gbc-faq-title">
						<RichText
							value={ faq.question }
							onChange={ ( value ) =>
								handleChange( value, 'question', faq.id )
							}
						/>
					</div>
					<div className="gbc-faq-description">
						<RichText
							value={ faq.answer }
							onChange={ ( value ) =>
								handleChange( value, 'answer', faq.id )
							}
						/>
					</div>

					{ faq.id === active ? <Minus /> : <Plus /> }
				</div>
			) ) }
			<Button
				variant="primary"
				text={ __( 'Add New FAQ', 'do-blocks' ) }
				onClick={ () => {
					setAttributes( {
						faqs: [
							...faqs,
							{
								id: nanoid(),
								question: __( 'What is FAQ?', 'do-blocks' ),
								answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet?',
							},
						],
					} );
				} }
			/>
		</div>
	);
};

export default Edit;
