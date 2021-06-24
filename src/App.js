import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>

          <div className={'grid grid-cols-12'}>

              <div className={'col-span-12 border p-10 bg-gray-400 text-center'}>

                  <h1 className={'text-4xl'}>Paper Trader</h1>

              </div>

              <div className={'col-span-12 md:col-span-7 border h-96 p-10'}>
                  {/*<h1 className={'text-4xl'}>Search Box</h1>*/}


                  <div className={'grid grid-cols-12'}>
                      <div className={'col-span-12 md:col-span-6'}>
                          <input type="search" className={'border w-2/3 mr-4 p-1 rounded-r-2xl rounded-l-2xl'}/>

                          <button className={'px-6 bg-blue-600 text-white rounded py-2 mr-3'}>Search</button>
                      </div>

                      <div className={'hidden md:col-span-6 md:block'}>
                          &nbsp;
                      </div>

                      <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
                          <h1 className={'text-2xl'}>BHP - BHP Group Limited</h1>
                      </div>

                      <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>

                          <button className={'px-6 bg-blue-600 text-white rounded py-3 mr-4'}>Buy</button>

                          <button className={'px-6 bg-red-600 text-white rounded py-3 mr-4'}>Sell</button>


                      </div>
                  </div>




              </div>

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
                                  <h1 className={' text-center font-bold uppercase text-sm'}></h1>
                              </div>
                          </div>


                      </div>

                  </div>





              </div>


          </div>



      </>

  );
}

export default App;




// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
