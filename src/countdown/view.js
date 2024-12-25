import domReady from '@wordpress/dom-ready';

domReady( () => {
	const countDownBlocks = document.querySelectorAll(
		'.wp-block-gbc-blocks-countdown-timer'
	);

	function countdown( endDate, element ) {
		let days, hours, minutes, seconds;
		endDate = new Date( endDate ).getTime();

		if ( isNaN( endDate ) ) {
			return;
		}

		setInterval( calculate, 1000 );
		function calculate() {
			const startDate = new Date().getTime();
			let timeRemaining = parseInt( ( endDate - startDate ) / 1000 );
			if ( timeRemaining >= 0 ) {
				days = parseInt( timeRemaining / 86400 );
				timeRemaining = timeRemaining % 86400;
				hours = parseInt( timeRemaining / 3600 );
				timeRemaining = timeRemaining % 3600;
				minutes = parseInt( timeRemaining / 60 );
				timeRemaining = timeRemaining % 60;
				seconds = parseInt( timeRemaining );
				element.querySelector( '#days' ).innerHTML = parseInt(
					days,
					10
				);
				element.querySelector( '#hours' ).innerHTML = hours;
				element.querySelector( '#minutes' ).innerHTML = minutes;
				element.querySelector( '#seconds' ).innerHTML = seconds;
			} else {
			}
		}
	}

	Array.from( countDownBlocks ).forEach( ( countDownBlock ) => {
		const getEndDate = countDownBlock.getAttribute(
			'data-campaign-end-date'
		);
		const date = new Date( getEndDate ).toLocaleString( 'en-US', {
			timeZone: 'Asia/Dhaka',
		} );
		countdown( date, countDownBlock );
	} );
} );
