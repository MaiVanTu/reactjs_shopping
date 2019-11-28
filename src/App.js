import React from 'react';
import '././App.css';
import Header from './components/Header';
import ProductsContainer from './container/ProductsContainer';
import CartsContainer from './container/CartsContainer';
import Footer from './components/Footer';
import MessageContainer from './container/MessageContainer';

class App extends React.Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <div>
          <Header/>
          <main id="mainContainer">
              <div className="container">
                <ProductsContainer/>
                <MessageContainer/>
                <CartsContainer/>
              </div>
          </main>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
