import React from 'react';

export default function Education() {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-6'>
                    <img src="/media/images/education.svg"/>
                </div>
                <div className='col-6'>
                    <h2 className='mb-4 fs-3'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=" "style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" area-hidden="true"></i></a>
                     
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=" "style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" area-hidden="true"></i></a> 
                </div>
    
            </div>
        </div>
    );
}