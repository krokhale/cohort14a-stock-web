import React, { useState} from 'react';


function SearchBox(props) {

    const [stockSymbol, setStockSymbol] = useState('');
    const [result, setResult] = useState({ symbol: '', price: ''});
    const [quantity, setQuantity] = useState();
   

    const onStockSymbolChange = async (event) => {
        setStockSymbol(event.currentTarget.value)
    };
    const searchStock = async () => {
        console.log('search stock called')
        let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/search/${stockSymbol}`)
        let data = await res.json();
        console.log('data:', data)
        setResult({ symbol: stockSymbol, price: data.price});
    };

    const buyStock = async () => {
        let info = { symbol: result.symbol, quantity: quantity, price: result.price }
        let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/portfolio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        let data = await res.json()
        console.log('the data is', data)
        setQuantity('')
        setResult({ symbol: '', price: '' })
        setStockSymbol('')
    };
   
    return (
        <div className={'col-span-12 md:col-span-7 bg-gray-900 border border-white rounded-3xl h-100 p-10'}>
            <div className={'grid grid-cols-12  text-white'}>
                <div className={'col-span-12 md:col-span-6 shadow-inner'}>
                    <input value={stockSymbol} onChange={onStockSymbolChange} type="search" className={'border w-2/3 p-1 rounded-r-2xl rounded-l-2xl text-black'} />
                    <button onClick={searchStock} className={'px-4 pb-2 bg-gray-400 hover:bg-gray-700 border-white-500 text-white rounded py-2 mr-5 text-white rounded'}>Search</button>
                </div>

                <div className={'hidden md:col-span-6 md:block'}>
                    

                </div>

                <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
                    <h1 className={'text-2xl font-bold tracking-wider'}>{result.symbol}</h1>
                    {result && <h4 className={'text-2md'}>{result.price}</h4>}
                </div>

                <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>

                    {result.symbol && <input onChange={(event) => setQuantity(event.currentTarget.value)} type="number" className={'border text-black mr-1'} />}

                    <button className={'px-6 bg-blue-600 hover:bg-blue-300 text-white rounded py-3 mr-4'} onClick={buyStock}>Buy</button>
                   
                </div>
            
            </div>
        </div>
    )
}

export default SearchBox;