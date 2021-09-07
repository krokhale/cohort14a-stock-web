import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URL}/api/v1/portfolio`
//const URL = `http://localhost:3000/api/v1/portfolio`

const PortfolioBox = () => {
    const [portfolio, setPortfolio] = useState([])

    const fetchPortfolio = async () => {
        console.log('runs once then fetches portfolio')
        let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/portfolio`)
        let data = await res.json()
        setPortfolio(data)
    };

    useEffect(() => {
       // getData()
       fetchPortfolio()
    }, [])

    // const getData = async () => {s
    //     const response = await axios .get(URL)
    //     setPortfolio(response.data)
    // }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = portfolio.filter(portfolio => id !== portfolio.id)
            setPortfolio(del)
        })
    }
    const renderHeader = () => {
        let headerElement = ['id', 'Symbol', 'Quantity', 'Price', 'Sell']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    // const renderBody = () => {
    //     return portfolio && portfolio.map()(({id, symbol, quantity, price }) => {
    //         console.log(portfolio);
    //         return (
    //             <tr key={id}>
    //                 <td>{id}</td>
    //                 <td>{symbol}</td>
    //                 <td>{quantity}</td>
    //                 <td>{price}</td>
    //                 <td className='operation'>
    //                     <button className='button-sm px-4 hover:bg-red-300 text-white rounded py-2 mr-1' onClick={() => removeData(id)}>Sell</button>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // }

    return (
        <>
            <div className={'col-span-12 md:col-span-5 border border-white rounded-2xl bg-gray-900 h-screen text-white'}>

                <h1 className={'text-4xl text-center p-8'} id='title'>Stock Portfolio</h1>
                <div className={'grid grid-cols-12 p-10'}>

                    <table className={'md:col-span-5 col-span-3 border border-white p-2 bg-gray-700 w-80'} id='employee'>
                        <thead className={' text-center font-bold p-2 uppercase text-sm '} >
                            <tr>{renderHeader()}</tr>
                        </thead>
                        <tbody className={' text-center font-bold p-2 uppercase text-sm '}>
                                {portfolio && portfolio.map((portfolio) => {
                                    return <tr>
                                        <th scope="row">{portfolio.id}</th>
                                        <td>{portfolio.symbol}</td>
                                        <td>{portfolio.quantity}</td>
                                        <td>{portfolio.price}</td>
                                        <td><button className={'button-sm px-4  hover:bg-red-300 text-white rounded py-2 mr-1'} onClick={() => removeData(portfolio.id)}>Sell</button>
                                        </td>
                                    </tr>
                                })}
                                {/* {renderBody()} */}
                            </tbody>
                    </table>
                </div>
                </div>

        </>
            )
}



export default PortfolioBox;
