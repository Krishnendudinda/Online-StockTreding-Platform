import React from 'react';
export default function Hero() {
    return (
       <div className="Container p-5 mb-5">
           <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Home Hero" className="pb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p style={{fontSize: '1.25rem'}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a className="btn btn-primary p-2 mb-4" style={{width: '15%', margin: "auto", fontSize: '1.25rem'}} href='/signup'>Sign Up for Free</a>
           </div>
       </div> 
    );
}