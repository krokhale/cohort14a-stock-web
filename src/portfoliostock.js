import React from 'react';

function PortfolioStock() {
 
    return (
        <div className={'col-span-12'}>

            <div className={'grid grid-cols-12 '}>

                <div className={'col-span-3 border border-white p-2 bg-gray-400'}>
                    <h1 className={' text-center font-bold uppercase text-sm'}>APPL</h1>
                </div>
                <div className={'col-span-3 border p-2 bg-gray-400'}>
                    <h1 className={' text-center font-bold uppercase text-sm '}>1</h1>
                </div>
                <div className={'col-span-3 border p-2 bg-gray-400'}>
                    <h1 className={' text-center font-bold uppercase text-sm'}>232</h1>
                </div>
                <div className={'col-span-3 border p-2 bg-gray-400'}>
                    {/*<h1 className={' text-center font-bold uppercase text-sm'}>Sell</h1>*/}
                    <button className={'px-6 bg-red-600 hover:bg-red-300 text-white rounded py-3 mr-2'}>Sell</button>
                </div>
            </div>
        </div>
    )
}
export default PortfolioStock;