import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { endDate, digitColor, labelColor } = attributes;
	const defaultCountdown = __( '0', 'gbc-blocks' );

	return (
		<div { ...useBlockProps.save() } data-campaign-end-date={ endDate }>
			<div className="day">
				<span id="days" style={ { color: digitColor } }>
					{ defaultCountdown }
				</span>
				<span style={ { color: labelColor } }>
					{ __( 'Days', 'gbc-blocks' ) }
				</span>
			</div>
			<div className="hour">
				<span id="hours" style={ { color: digitColor } }>
					{ defaultCountdown }
				</span>
				<span style={ { color: labelColor } }>
					{ __( 'Hour', 'gbc-blocks' ) }
				</span>
			</div>
			<div className="minute">
				<span id="minutes" style={ { color: digitColor } }>
					{ defaultCountdown }
				</span>
				<span style={ { color: labelColor } }>
					{ __( 'Min', 'gbc-blocks' ) }
				</span>
			</div>
			<div className="second">
				<span id="seconds" style={ { color: digitColor } }>
					{ defaultCountdown }
				</span>
				<span style={ { color: labelColor } }>
					{ __( 'Sec', 'gbc-blocks' ) }
				</span>
			</div>
		</div>
	);
}
