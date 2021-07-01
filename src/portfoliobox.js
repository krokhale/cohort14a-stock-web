import React from 'react';

function PortfolioBox (props){
    return (
        <div className={'col-span-12 md:col-span-5 border border-white rounded-3xl bg-gray-900 h-96 text-white'}>

            <h1 className={'text-4xl text-center p-8'}>Portfolio</h1>

            <div className={'grid grid-cols-12 p-10'}>

                <div className={'col-span-3 border border-white p-2 bg-gray-700'}>
                    <h1 className={' text-center font-bold uppercase text-sm'}>Symbol</h1>
                </div>

                <div className={'col-span-3 border p-2 bg-gray-700'}>
                    <h1 className={' text-center font-bold uppercase text-sm '}>Quantity</h1>
                </div>
                <div className={'col-span-3 border p-2 bg-gray-700'}>
                    <h1 className={' text-center font-bold uppercase text-sm'}>Value</h1>
                </div>
                <div className={'col-span-3 border p-2 bg-gray-700'}>
                    <h1 className={' text-center font-bold uppercase text-sm'}>Sell</h1>
                </div>

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

            </div>

        </div>
    );
}
export default PortfolioBox;