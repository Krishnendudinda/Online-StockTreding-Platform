import React from 'react';

export default function Pricing() {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-4'>
                    <h2 className='mb-4 fs-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=" "style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" area-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-4 mb-5'>
                    <div className='row p-2 text-center'>
                        <div className='col p-3 border'>
                           <h1 className='mb-3'>0</h1>
                           <p>Free equity delivay and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 >20</h1>
                            <p className='mb-3'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}