import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const {
		globalColors,
		titleFontSize,
		titleColors,
		contentFontSize,
		contentColors,
		iconColors,
	} = attributes;

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
		<div
			{ ...useBlockProps.save( { style: styles } ) }
			data-block-attributes={ JSON.stringify( attributes ) }
		></div>
	);
};

export default Save;
