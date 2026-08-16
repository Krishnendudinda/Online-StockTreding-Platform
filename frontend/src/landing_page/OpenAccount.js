import React from 'react';

export default function OpenAccount() {
    return (
         <div className="Container p-5 mb-5">
           <div className="row text-center">
                <h1 className="mt-5 fs-4">Open a Zerodha account</h1>
                <p style={{fontSize: '1.25rem'}} className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a  className="btn btn-primary p-2 mb-4" style={{width: '15%', margin: "auto", fontSize: '1.25rem'}} href="/signup">Sign Up for Free</a>
           </div>
       </div>
    );
}