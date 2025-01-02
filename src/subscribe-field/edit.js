import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes }) {
    const {
        action,
        buttonText,
        isRequired,
        enableButtonText,
        disableMessageIcon,
        placeholderText
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>

            <Inspector
                attributes={ attributes }
                setAttributes={ setAttributes }
            />

            <div className='gbc__subscribe-field'>
                <form
                    action={action}
                    id="gbc-embedded-subscriber-form"
                    className="dco-newsletter-form"
                    method="post"
                >
                    <div className={`email-field ${ enableButtonText ? 'layout-2' : '' }`}>
                        {
                            disableMessageIcon && (
                                <div className='message-icon'>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.75 3.75V14.25C20.75 15.4926 19.7426 16.5 18.5 16.5H3.5C2.25736 16.5 1.25 15.4926 1.25 14.25V3.75M20.75 3.75C20.75 2.50736 19.7426 1.5 18.5 1.5H3.5C2.25736 1.5 1.25 2.50736 1.25 3.75M20.75 3.75V3.99271C20.75 4.77405 20.3447 5.49945 19.6792 5.90894L12.1792 10.5243C11.4561 10.9694 10.5439 10.9694 9.82078 10.5243L2.32078 5.90894C1.65535 5.49945 1.25 4.77405 1.25 3.99271V3.75" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            )
                        }
                        <input
                            type="email"
                            name="email"
                            required={isRequired}
                            id="gbc-email"
                            placeholder={ __( placeholderText , 'gbc-blocks' ) }
                        />
                        {
                            enableButtonText ? (
                                <button className="btn subscribe-btn">
                                    { buttonText}
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9134 0.167991C16.8378 0.104244 16.7301 0.089454 16.6388 0.130114L0.147043 7.48945C0.0582573 7.52909 0.00108244 7.61416 1.51775e-05 7.70817C-0.00105209 7.80218 0.0542423 7.88843 0.142164 7.92987L4.80931 10.1297C4.89489 10.1701 4.99694 10.1609 5.07338 10.1061L9.61113 6.84871L6.04881 10.368C5.99798 10.4182 5.97207 10.487 5.97766 10.5568L6.33234 14.9932C6.34022 15.0915 6.40883 15.1755 6.50636 15.2063C6.53243 15.2145 6.55921 15.2185 6.58569 15.2185C6.65832 15.2185 6.72896 15.1886 6.7781 15.1339L9.25527 12.377L12.3176 13.7823C12.384 13.8128 12.461 13.814 12.5285 13.7858C12.5961 13.7576 12.6475 13.7026 12.6695 13.6352L16.9883 0.424591C17.0185 0.332338 16.9891 0.231738 16.9134 0.167991Z" fill="white"/>
                                    </svg>

                                </button>
                            ):(
                                <button className="btn-icon">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.99972 10L1.2688 1.12451C7.88393 3.04617 14.0276 6.07601 19.4855 9.99974C14.0276 13.9235 7.884 16.9535 1.26889 18.8752L3.99972 10ZM3.99972 10L11.5 10" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}
