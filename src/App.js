import './App.css';

import PortfolioBox from './portfoliobox';
import Navbar from './navbar';
import SearchBox from './searchbox';

import Navbar from "./navbar";
import SearchBox from "./search-box";
import PortfolioBox from "./portfolio-box";


function App() {
  return (

      <div className={'grid grid-cols-12 font-mono h-100 p-5'}>


          <Navbar></Navbar>

          <SearchBox />

          <PortfolioBox />
      </div>
    );
=======
              <Navbar />

              <SearchBox />

              <PortfolioBox />

          </div>



      </>

  );

}

export default App;