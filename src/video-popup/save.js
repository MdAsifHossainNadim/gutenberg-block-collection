import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
    return (
        <div
            { ...useBlockProps.save() }
            data-block-attributes={ JSON.stringify( attributes ) }
        ></div>
    );
};

export default Save;