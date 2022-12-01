//https://reactjs.org/docs/faq-ajax.html
import React, { Component } from 'react';

class StockComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://mtw-investing-v2-api.azurewebsites.net/api/stocks", {})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table class="table">
            <thead>
              <tr>
                  <th>Ticker</th>
                  <th>Name</th>
                  <th>Sector</th>
                  <th>Price</th>
                  <th>PE</th>
                  <th>Daily Change</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr>
                  <td>{item.ticker}</td>
                  <td>{item.name}</td>
                  <td>{item.industry}</td>
                  <td>{item.price}</td>
                  <td>{item.metrics.pe}</td>
                  <td>{item.dailyPercentChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }
    }
  }

  export default StockComponent;