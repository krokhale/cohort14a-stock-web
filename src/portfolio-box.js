import React, {useState, useEffect} from 'react';

function PortfolioBox(props) {
    return (
        <>
            <div className={'col-span-12 md:col-span-5 border h-96'}>


                {/*Alternatively, you can also create a table*/}
                {/*<table>*/}
                {/*    */}
                {/*</table>*/}


                <div className={'grid grid-cols-12 p-10'}>

                    <div className={'col-span-3 border bg-gray-500 p-2'}>
                        <h1 className={'text-white text-center font-bold uppercase text-sm'}>Stock Symbol</h1>
                    </div>

                    <div className={'col-span-3 border bg-gray-500 p-2'}>
                        <h1 className={'text-white text-center font-bold uppercase text-sm'}>Quantity</h1>
                    </div>

                    <div className={'col-span-3 border bg-gray-500 p-2'}>
                        <h1 className={'text-white text-center font-bold uppercase text-sm'}>Value</h1>
                    </div>

                    <div className={'col-span-3 border bg-gray-500 p-2'}>

                    </div>


                    <div className={'col-span-12'}>

                        <div className={'grid grid-cols-12'}>

                            <div className={'col-span-3 border p-2'}>
                                <h1 className={' text-center font-bold uppercase text-sm'}>AAPL</h1>
                            </div>

                            <div className={'col-span-3 border p-2'}>
                                <h1 className={' text-center font-bold uppercase text-sm'}>100</h1>
                            </div>

                            <div className={'col-span-3 border p-2'}>
                                <h1 className={' text-center font-bold uppercase text-sm'}>2000</h1>
                            </div>

                            <div className={'col-span-3 border p-2'}>
                                {/*<h1 className={' text-center font-bold uppercase text-sm'}></h1>*/}
                                <button className={'px-6 bg-red-600 text-white rounded py-3 mr-4'}>Sell</button>
                            </div>
                        </div>


                    </div>

                </div>





            </div>

        </>
    );
}

export default PortfolioBox;
