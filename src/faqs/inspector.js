/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';
import { InspectorControls, HeightControl } from '@wordpress/block-editor';
import {
	Button,
	ColorPalette,
	Dropdown,
	PanelBody,
	__experimentalHStack as HStack,
	__experimentalText as Text,
	ColorIndicator,
} from '@wordpress/components';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		globalColors,
		titleFontSize,
		titleColors,
		contentFontSize,
		contentColors,
		iconSize,
		iconColors,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Settings' ) } initialOpen={ true }>
				<span
					style={ {
						fontSize: '11px',
						fontWeight: 500,
						lineHeight: 1.4,
						textTransform: 'uppercase',
						display: 'inline-block',
						marginBottom: 'calc(8px)',
						padding: '0px',
					} }
				>
					{ __( 'BACKGROUND COLOR' ) }
				</span>
				<Dropdown
					style={ { width: '100%', border: '1px solid #e0e0e0' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ globalColors?.bgColor }
								/>
								<Text>{ __( 'Default', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ globalColors?.bgColor }
							onChange={ ( color ) =>
								setAttributes( {
									globalColors: {
										...globalColors,
										bgColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ globalColors?.bgHoverColor }
								/>
								<Text>{ __( 'Hover', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ globalColors?.bgHoverColor }
							onChange={ ( color ) =>
								setAttributes( {
									globalColors: {
										...globalColors,
										bgHoverColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ globalColors?.bgActiveColor }
								/>
								<Text>{ __( 'Active', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ globalColors?.bgActiveColor }
							onChange={ ( color ) =>
								setAttributes( {
									globalColors: {
										...globalColors,
										bgActiveColor: color,
									},
								} )
							}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Title' ) } initialOpen={ false }>
				<HeightControl
					label={ __( 'Font Size' ) }
					value={ titleFontSize }
					onChange={ ( value ) =>
						setAttributes( { titleFontSize: value } )
					}
				/>
				<span
					style={ {
						fontSize: '11px',
						fontWeight: 500,
						lineHeight: 1.4,
						textTransform: 'uppercase',
						display: 'inline-block',
						marginTop: '1rem',
						marginBottom: 'calc(8px)',
						padding: '0px',
					} }
				>
					{ __( 'COLOR' ) }
				</span>
				<Dropdown
					style={ { width: '100%', border: '1px solid #e0e0e0' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ titleColors?.defaultColor }
								/>
								<Text>{ __( 'Text', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ titleColors?.defaultColor }
							onChange={ ( color ) =>
								setAttributes( {
									titleColors: {
										...titleColors,
										defaultColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ titleColors?.hoverTextColor }
								/>
								<Text>{ __( 'Hover', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ titleColors?.hoverTextColor }
							onChange={ ( color ) =>
								setAttributes( {
									titleColors: {
										...titleColors,
										hoverTextColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ titleColors?.activeTextColor }
								/>
								<Text>{ __( 'Active', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ titleColors?.activeTextColor }
							onChange={ ( color ) =>
								setAttributes( {
									titleColors: {
										...titleColors,
										activeTextColor: color,
									},
								} )
							}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Content' ) } initialOpen={ false }>
				<HeightControl
					label={ __( 'Font Size' ) }
					value={ contentFontSize }
					onChange={ ( value ) =>
						setAttributes( { contentFontSize: value } )
					}
				/>
				<span
					style={ {
						fontSize: '11px',
						fontWeight: 500,
						lineHeight: 1.4,
						textTransform: 'uppercase',
						display: 'inline-block',
						marginTop: '1rem',
						marginBottom: 'calc(8px)',
						padding: '0px',
					} }
				>
					{ __( 'COLOR' ) }
				</span>
				<Dropdown
					style={ { width: '100%', border: '1px solid #e0e0e0' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ contentColors?.defaultColor }
								/>
								<Text>{ __( 'Text', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ contentColors?.defaultColor }
							onChange={ ( color ) =>
								setAttributes( {
									contentColors: {
										...contentColors,
										defaultColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ contentColors?.hoverTextColor }
								/>
								<Text>{ __( 'Hover', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ contentColors?.hoverTextColor }
							onChange={ ( color ) =>
								setAttributes( {
									contentColors: {
										...contentColors,
										hoverTextColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={
										contentColors?.activeTextColor
									}
								/>
								<Text>{ __( 'Active', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ contentColors?.activeTextColor }
							onChange={ ( color ) =>
								setAttributes( {
									contentColors: {
										...contentColors,
										activeTextColor: color,
									},
								} )
							}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Icon' ) } initialOpen={ false }>
				<HeightControl
					label={ __( 'Font Size' ) }
					value={ iconSize }
					onChange={ ( value ) =>
						setAttributes( { iconSize: value } )
					}
				/>
				<span
					style={ {
						fontSize: '11px',
						fontWeight: 500,
						lineHeight: 1.4,
						textTransform: 'uppercase',
						display: 'inline-block',
						marginTop: '1rem',
						marginBottom: 'calc(8px)',
						padding: '0px',
					} }
				>
					{ __( 'COLOR' ) }
				</span>
				<Dropdown
					style={ { width: '100%', border: '1px solid #e0e0e0' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ iconColors?.defaultColor }
								/>
								<Text>{ __( 'Text', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ iconColors?.defaultColor }
							onChange={ ( color ) =>
								setAttributes( {
									iconColors: {
										...iconColors,
										defaultColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ iconColors?.hoverIconColor }
								/>
								<Text>{ __( 'Hover', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ iconColors?.hoverIconColor }
							onChange={ ( color ) =>
								setAttributes( {
									iconColors: {
										...iconColors,
										hoverIconColor: color,
									},
								} )
							}
						/>
					) }
				/>
				<Dropdown
					style={ {
						width: '100%',
						border: '1px solid #e0e0e0',
						borderTop: 'none',
					} }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							__next40pxDefaultSize
							onClick={ onToggle }
							aria-expanded={ isOpen }
							style={ { width: '100%' } }
						>
							<HStack alignment="left">
								<ColorIndicator
									colorValue={ iconColors?.activeIconColor }
								/>
								<Text>{ __( 'Active', 'do-blocks' ) }</Text>
							</HStack>
						</Button>
					) }
					renderContent={ () => (
						<ColorPalette
							enableAlpha
							value={ iconColors?.activeIconColor }
							onChange={ ( color ) =>
								setAttributes( {
									iconColors: {
										...iconColors,
										activeIconColor: color,
									},
								} )
							}
						/>
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
