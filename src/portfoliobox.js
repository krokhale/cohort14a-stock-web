import React, {useState, useEffect} from 'react';
import axios from 'axios';


const URL = `${process.env.REACT_APP_API_URL}/api/v1/portfolio`

const PortfolioBox = () => {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setPortfolio(response.data)
    }

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

    const renderBody = () => {
        return portfolio && portfolio.map(({ id, symbol, quantity, price }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{symbol}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <button className='button-sm px-4  hover:bg-red-300 text-white rounded py-2 mr-1' onClick={() => removeData(id)}>Sell</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className={'col-span-12 md:col-span-5 border border-white rounded-3xl bg-gray-900 h-100 text-white'}>

                <h1 className={'text-4xl text-center p-8'} id='title'>Stock Portfolio</h1>
                <div className={'grid grid-cols-12 p-10'}>
                    
                        <table className={'col-span-3 border border-white p-2 bg-gray-700 w-80'} id='employee'>
                            <thead className={' text-center font-bold p-2 uppercase text-sm '} >
                                <tr>{renderHeader()}</tr>
                            </thead>
                            <tbody className={' text-center font-bold p-2 uppercase text-sm '}>
                                {renderBody()}
                            </tbody>
                        </table>
                </div>
            </div>

        </>
    )
}


    
export default PortfolioBox;
