import { useEffect, useState, Fragment } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './Inspector';

export default function Edit( { attributes, setAttributes } ) {
	const { digitColor, labelColor, endDate } = attributes;
	const [ time, setTime ] = useState( {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	} );

	// Function to calculate the time remaining
	const calculateTimeLeft = () => {
		const end = new Date( endDate ).getTime(); // Convert endDate to timestamp
		const now = new Date().getTime(); // Current time in timestamp
		const difference = end - now; // Calculate time difference

		let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if ( difference > 0 ) {
			timeLeft = {
				days: Math.floor( difference / ( 1000 * 60 * 60 * 24 ) ),
				hours: Math.floor( ( difference / ( 1000 * 60 * 60 ) ) % 24 ),
				minutes: Math.floor( ( difference / ( 1000 * 60 ) ) % 60 ),
				seconds: Math.floor( ( difference / 1000 ) % 60 ),
			};
		}

		return timeLeft;
	};

	// Update the time dynamically
	useEffect( () => {
		const interval = setInterval( () => {
			setTime( calculateTimeLeft() );
		}, 1000 );

		return () => clearInterval( interval ); // Clean up the interval on unmount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ endDate ] );

	return (
		<Fragment>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...useBlockProps() }>
				<div className="day">
					<span id="days" style={ { color: digitColor } }>
						{ time.days }
					</span>
					<span style={ { color: labelColor } }>
						{ __( 'Days', 'gbc-blocks' ) }
					</span>
				</div>
				<div className="hour">
					<span id="hours" style={ { color: digitColor } }>
						{ time.hours }
					</span>
					<span style={ { color: labelColor } }>
						{ __( 'Hour', 'gbc-blocks' ) }
					</span>
				</div>
				<div className="minute">
					<span id="minutes" style={ { color: digitColor } }>
						{ time.minutes }
					</span>
					<span style={ { color: labelColor } }>
						{ __( 'Min', 'gbc-blocks' ) }
					</span>
				</div>
				<div className="second">
					<span id="seconds" style={ { color: digitColor } }>
						{ time.seconds }
					</span>
					<span style={ { color: labelColor } }>
						{ __( 'Sec', 'gbc-blocks' ) }
					</span>
				</div>
			</div>
		</Fragment>
	);
}
