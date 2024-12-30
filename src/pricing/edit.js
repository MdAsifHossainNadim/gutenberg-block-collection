import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './Inspector';

export default ( { attributes, setAttributes } ) => {
  const {
    regularPrice,
    priceHelpText,
    discountPrice,
    discountHelpText,
    billedText,
    enableCampaign,
    campaignPercent
  } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
        <Inspector
            attributes={ attributes }
            setAttributes={ setAttributes }
        />
      
      {
          discountPrice ? (
            <span className='gbc_price line-throw'>${regularPrice}</span>

          ) : (
            enableCampaign ? (
              <>
                <span className='gbc_price line-throw'>${regularPrice}</span>
                <div className='yearly-discount'>
                  <span className='gbc_price'>
                    <span className='yearly-price'>${(regularPrice - ( regularPrice * ( campaignPercent / 100 ) )).toFixed(2)}</span>
                    {
                      priceHelpText && (
                        <span className='yearly-text'>{ priceHelpText }</span>
                      )
                    }
                  </span>
                </div>
              </>
            ) : (
              <span className='gbc_price'>${regularPrice}
                {
                  priceHelpText && (
                    <span className='yearly-text'>{ priceHelpText }</span>
                  )
                }
              </span>
            )
          )
        }
        
        {
            discountPrice && (
                <>
                  <div className='yearly-discount'>
                    <span className='gbc_price'>
                        {
                          enableCampaign ? (
                            <span className='yearly-price'> ${ regularPrice - ( regularPrice * ( campaignPercent / 100 ) ).toFixed(2)}</span>
                            
                          ) : (
                            <span className='yearly-price'> ${ ((regularPrice * 10) / 12 ).toFixed(2)}</span>
                          )
                        }
                        {
                          priceHelpText && (
                            <span className='yearly-text'>{ priceHelpText }</span>
                          )
                        }
                    </span>
                  </div>
                    
                </>
            )
        }
        {
          discountHelpText && (
            <div className='discount-help-text'>{discountHelpText}</div>
          )
        }
        {
          discountPrice && (
            <div className='build-yearly-text'>
              <RichText 
                  value={billedText}
                  placeholder='Billed Annually'
                  tagName='span'
                  onChange={ ( value ) => setAttributes( { billedText: value } ) }
              />
              {
                enableCampaign ? (
                  <span className='price'> ${(( regularPrice - ( regularPrice * ( campaignPercent / 100 ) )) * 12).toFixed(2) }</span>
                ) : (
                  <span className='price'> ${ regularPrice * 10 }</span>
                )
              }
            </div>
          )
        }
    </div>
  );
}