//https://reactjs.org/docs/faq-ajax.html
import React from 'react';
import './../StockComponent.css';
import App from './../App';
import Stock from './../Stock';
import StockComponent from './../StockComponent';

class Stocks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false
      };
    }
  
    render() {     
        return (
            <div>
                <App /><Stock /><StockComponent />
            </div>
        )
    }
}
export default Stocks;