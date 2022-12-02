//https://reactjs.org/docs/faq-ajax.html
import React from 'react';

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
        return <div align="center"><h2>Loading...</h2></div>;
      } else {
        return (
          <div align="center">
            <table class="table">
              <thead>
                <tr>
                    <th width="150px">Ticker</th>
                    <th width="250px">Name</th>
                    <th width="200px">Sector</th>
                    <th width="100px">Price</th>
                    <th width="100px">PE</th>
                    <th width="100px">Daily Change</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr>
                    <td align="center">{item.ticker}</td>
                    <td align="center">{item.name}</td>
                    <td align="center">{item.industry}</td>
                    <td align="center">${item.price}</td>
                    <td align="center">{item.metrics.pe}</td>
                    <td align="center">{item.dailyPercentChange}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  }

  export default StockComponent;