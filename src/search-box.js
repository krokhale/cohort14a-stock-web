import React, {useState, useEffect} from 'react';

function SearchBox(props) {

    const [stockSymbol, setStockSymbol] = useState('');
    const [result, setResult] = useState({symbol: '', price: ''});

    const [quantity, setQuantity] = useState();


    // Have a state variable sync and keep a track of the stock symbol that the user types
    // Have a function associated with the search that gets triggered when the user clicks n search
    // Make a fetch call to the backend API
    // Once you get the data back, Update the UI to show the results

    const onStockSymbolChange = async (event) => {
        setStockSymbol(event.currentTarget.value)
    };

    const searchStock = async () => {
        // template literals - javascript
        let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/search/${stockSymbol}`) // GET request by default
        let data = await res.json()
        console.log('data is', data)
        setResult({symbol: stockSymbol, price: data.price})
    };

    const buyStock = async () => {
        let info = {symbol: result.symbol, quantity: quantity, price: result.price}
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
        setResult({symbol: '', price: ''})
        setStockSymbol('')

    };

    return (
        <>
            <div className={'col-span-12 md:col-span-7 border h-96 p-10'}>
                {/*<h1 className={'text-4xl'}>Search Box</h1>*/}

                <p>{process.env.REACT_APP_API_URL}</p>


                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12 md:col-span-6'}>
                        <input value={stockSymbol} onChange={onStockSymbolChange} type="search" className={'border w-2/3 mr-4 p-1 rounded-r-2xl rounded-l-2xl'}/>

                        <button onClick={searchStock} className={'px-6 bg-blue-600 text-white rounded py-2 mr-3'}>Search</button>
                    </div>

                    <div className={'hidden md:col-span-6 md:block'}>
                        &nbsp;
                    </div>

                    <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
                        <h1 className={'text-2xl font-bold tracking-wider'}>{result.symbol}</h1>
                        {result && <h4 className={'text-lg font-medium text-gray-600'}>${result.price}</h4>}
                    </div>

                    <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>


                        {result.symbol && <input onChange={(event) =>  setQuantity(event.currentTarget.value)} type="number" className={'border mr-4'}/>}

                        <button className={'px-6 bg-blue-600 text-white rounded py-3 mr-4'} onClick={buyStock}>Buy</button>




                    </div>
                </div>




            </div>
        </>
    );
}

export default SearchBox;
