/* eslint-disable no-console */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	ColorPalette,
	DateTimePicker,
	PanelBody,
	Button,
	Dropdown,
	ColorIndicator,
	__experimentalHStack as HStack,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
} from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

const Inspector = ( { attributes, setAttributes } ) => {
	const { endDate, digitColor, labelColor } = attributes;
	const [ selectedDate, setSelectedDate ] = useState(
		endDate ? endDate : new Date()
	);

	const formatDate = ( dateString ) => {
		const date = new Date( dateString );

		const months = [
			__( 'January', 'gbc-blocks' ),
			__( 'February', 'gbc-blocks' ),
			__( 'March', 'gbc-block' ),
			__( 'April', 'gbc-block' ),
			__( 'May', 'gbc-block' ),
			__( 'June', 'gbc-block' ),
			__( 'July', 'gbc-block' ),
			__( 'August', 'gbc-block' ),
			__( 'September', 'gbc-block' ),
			__( 'October', 'gbc-block' ),
			__( 'November', 'gbc-block' ),
			__( 'December', 'gbc-block' ),
		];

		const month = months[ date.getMonth() ];
		const day = date.getDate();
		const year = date.getFullYear();

		let hours = date.getHours();
		const minutes = date.getMinutes().toString().padStart( 2, '0' );
		const ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // if hours is 0, make it 12 (for 12 am/pm)

		return `${ month } ${ day }, ${ year } ${ hours }:${ minutes } ${ ampm }`;
	};

	const handleDate = ( newDate ) => {
		setSelectedDate( newDate );
		setAttributes( { endDate: newDate } );
	};

	// Fetch theme colors and gradients
	const colors = useSelect(
		( select ) => select( 'core/block-editor' ).getSettings().colors
	);

	const resetAll = () => {
		setAttributes( {
			digitColor: '#f1634c',
			labelColor: '#ffffff',
		} );
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gbc-blocks' ) }>
					<Dropdown
						style={ { width: '100%' } }
						popoverProps={ {
							placement: 'left-start',
							offset: 36,
							shift: true,
						} }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								__next40pxDefaultSize
								onClick={ onToggle }
								aria-expanded={ isOpen }
								style={ {
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
								} }
								variant="secondary"
							>
								{ formatDate( selectedDate ) }
							</Button>
						) }
						renderContent={ () => (
							<DropdownContentWrapper
								style={ { width: '280px' } }
								paddingSize="medium"
							>
								<DateTimePicker
									currentDate={ selectedDate }
									onChange={ ( value ) =>
										handleDate( value )
									}
									is12Hour
								/>
							</DropdownContentWrapper>
						) }
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={ __( 'Color', 'gbc-blocks' ) }
					resetAll={ resetAll }
					hasInnerWrapper
					__experimentalFirstVisibleItemClass="first"
					__experimentalLastVisibleItemClass="last"
				>
					<div className="db-popup-color-block-support-panel__inner-wrapper">
						<ToolsPanelItem
							hasValue={ () => !! digitColor }
							label={ __( 'Digit', 'gbc-blocks' ) }
							onDeselect={ () =>
								setAttributes( { digitColor: '#f1634c' } )
							}
							resetAllFilter={ () => ( {
								digitColor: '#f1634c',
							} ) }
						>
							<Dropdown
								style={ { width: '100%' } }
								popoverProps={ {
									placement: 'left-start',
									offset: 36,
									shift: true,
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
												colorValue={ digitColor }
											/>
											<Text>
												{ __( 'Digit', 'gbc-blocks' ) }
											</Text>
										</HStack>
									</Button>
								) }
								renderContent={ () => (
									<DropdownContentWrapper
										style={ { width: '260px' } }
										paddingSize="medium"
									>
										<ColorPalette
											enableAlpha
											value={ digitColor }
											colors={ [
												{ colors, name: __( 'Theme' ) },
											] }
											onChange={ ( color ) =>
												setAttributes( {
													digitColor: color,
												} )
											}
										/>
									</DropdownContentWrapper>
								) }
							/>
						</ToolsPanelItem>
						<ToolsPanelItem
							hasValue={ () => !! labelColor }
							label={ __( 'Label', 'gbc-blocks' ) }
							onDeselect={ () =>
								setAttributes( { labelColor: '#ffffff' } )
							}
							resetAllFilter={ () => ( {
								labelColor: '#ffffff',
							} ) }
						>
							<Dropdown
								style={ { width: '100%' } }
								popoverProps={ {
									placement: 'left-start',
									offset: 36,
									shift: true,
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
												colorValue={ labelColor }
											/>
											<Text>
												{ __( 'Label', 'gbc-blocks' ) }
											</Text>
										</HStack>
									</Button>
								) }
								renderContent={ () => (
									<DropdownContentWrapper
										style={ { width: '260px' } }
										paddingSize="medium"
									>
										<ColorPalette
											enableAlpha
											value={ labelColor }
											colors={ [
												{ colors, name: __( 'Theme' ) },
											] }
											onChange={ ( color ) =>
												setAttributes( {
													labelColor: color,
												} )
											}
										/>
									</DropdownContentWrapper>
								) }
							/>
						</ToolsPanelItem>
					</div>
				</ToolsPanel>
			</InspectorControls>
		</Fragment>
	);
};

export default Inspector;
