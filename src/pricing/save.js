import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

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

  const blockProps = useBlockProps.save();

  return (
    <Fragment { ...blockProps }>

      <div className='pricing-block'>
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
              
              <RichText.Content
                value={ billedText }
                tagName='span'
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
      
    </Fragment>
  );
}