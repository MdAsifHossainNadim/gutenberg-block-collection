/* eslint-disable no-undef */
import domReady from '@wordpress/dom-ready';

domReady( () => {
	// Select all elements with the specific class for the counter animation block
	const counterElements = document.querySelectorAll(
		'.wp-block-gbc-blocks-counter-animation'
	);

	// Exit if no counter elements are found
	if ( counterElements.length === 0 ) return;

	// Function to animate the counter from start to end within a given duration
	function animateCounter( element, start, end, duration ) {
		let startTime = null;

		// Function to update the counter based on the elapsed time
		function updateCounter( currentTime ) {
			if ( ! startTime ) startTime = currentTime;
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(
				end,
				Math.floor(
					( elapsedTime / duration ) * ( end - start ) + start
				)
			);
			element.innerText = progress;

			// Continue the animation until the end value is reached
			if ( progress < end ) {
				requestAnimationFrame( updateCounter );
			}
		}

		// Start the counter animation
		requestAnimationFrame( updateCounter );
	}

	// Create an IntersectionObserver to trigger the counter animation when the element is visible
	const observer = new IntersectionObserver( ( entries ) => {
		entries.forEach( ( entry ) => {
			// Retrieve animation parameters from data attributes
			const startValue = parseInt(
				entry.target.dataset.counterAnimationStart
			);
			const endValue = parseInt(
				entry.target.dataset.counterAnimationEnd
			);
			const duration = parseInt(
				entry.target.dataset.counterAnimationDuration
			);

			if ( entry.isIntersecting ) {
				// Animate the counter when the element enters the viewport
				animateCounter(
					entry.target.querySelector( 'span' ), // Target the span inside the element
					startValue, // Start value
					endValue, // End value
					duration // Duration (3 seconds)
				);
				observer.unobserve( entry.target ); // Stop observing once the animation starts
			}
		} );
	} );

	// Observe each counter element
	counterElements.forEach( ( element ) => {
		observer.observe( element );
	} );
} );
