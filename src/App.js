import logo from './logo.svg';
import './App.css';

function App() {
  return (

          <div className={'grid grid-cols-12 font-mono'}>

              <div className={'col-span-12 border rounded-3xl p-10 border-white bg-gray-800 text-center tracking-widest font-mono '}>

                  <h1 className={'text-4xl text-white '}>STOCK TRADER</h1>

              </div>

              <div className={'col-span-12 md:col-span-7 bg-gray-900 border border-white rounded-3xl h-96 p-10'}>
                  {/*<h1 className={'text-4xl'}>Search Box</h1>*/}


                  <div className={'grid grid-cols-12  text-white'}>
                      <div className={'col-span-12 md:col-span-6 shadow-inner'}>
                          <input type="search" className={'border w-2/3 p-1 rounded-r-2xl rounded-l-2xl text-black'}/>
                          <button className={'px-4 bg-gray-400 hover:bg-gray-700 border-white-500 text-white rounded py-2 mr-5 text-white rounded'}>Search</button>
                      </div>

                      <div className={'hidden md:col-span-6 md:block'}>
                          &nbsp;
                      </div>

                      <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
                          <h1 className={'text-2xl'}>BHP - BHP Group Limited</h1>
                      </div>

                      <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>

                          <button className={'px-6 bg-blue-600 hover:bg-blue-300 text-white rounded py-3 mr-4'}>Buy</button>

                          <button className={'px-6 bg-red-600 hover:bg-red-300 text-white rounded py-3 mr-4'}>Sell</button>


                      </div>
                  </div>




            </div>

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
                        <h1 className={' text-center font-bold uppercase text-sm'}>Sell</h1>
                    </div>
                    </div>
                    </div>
                    

                    

                </div>

            </div>
        </div>
    );
}

export default App;