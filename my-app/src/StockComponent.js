//https://reactjs.org/docs/faq-ajax.html
import React from 'react';
import './StockComponent.css';

class StockComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        sortTickerAsc: true,
        sortDailyChangeAsc: true,
        sortBetaAsc: true
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
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div align="center"><h2>Loading...</h2></div>
      } else {
        return (
          <div align="center">
            <table className="table">
              <thead>
                <tr>
                    <th width="150px"><label onClick={() => this.orderTicker()}>Ticker</label></th>
                    <th width="250px">Name</th>
                    <th width="200px">Sector</th>
                    <th width="100px">Price</th>
                    <th width="100px">PE</th>
                    <th width="100px">52Low</th>
                    <th width="100px">52High</th>
                    <th width="100px"><label onClick={() => this.orderBeta()}>Beta</label></th>
                    <th width="100px"><label onClick={() => this.orderDailyChange()}>Daily Change</label></th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.ticker}>
                    <td align="center">{item.ticker}</td>
                    <td align="center">{item.name}</td>
                    <td align="center">{item.industry}</td>
                    <td align="center">${item.price}</td>
                    <td align="center">{item.metrics.pe}</td>
                    <td align="center">${item.metrics.weekLow52}</td>
                    <td align="center">${item.metrics.weekHigh52}</td>
                    <td align="center">{item.metrics.beta}</td>
                    <td align="center">{item.dailyPercentChange}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    }

    orderDailyChange() {
      this.setState({
        items: this.state.items.sort((a, b) => {

          var asc = -1;
          if (this.state.sortDailyChangeAsc)
          {
            asc = 1;
          }

          if (a.dailyPercentChange < b.dailyPercentChange) {
            return -1 * asc;
          }
          if (a.dailyPercentChange > b.dailyPercentChange) {
            return 1 * asc;
          }
          return 0;
        })
      });
      this.setState({ sortDailyChangeAsc: !this.state.sortDailyChangeAsc });
    }

    orderTicker() {
      this.setState({
        items: this.state.items.sort((a, b) => {

          var asc = -1;
          if (this.state.sortTickerAsc)
          {
            asc = 1;
          }

          if (a.ticker < b.ticker) {
            return -1 * asc;
          }
          if (a.ticker > b.ticker) {
            return 1 * asc;
          }
          return 0;
        })
      });
      this.setState({ sortTickerAsc: !this.state.sortTickerAsc });
    }

    orderBeta() {
      this.setState({
        items: this.state.items.sort((a, b) => {

          var asc = -1;
          if (this.state.sortBetaAsc)
          {
            asc = 1;
          }

          if (a.metrics.beta < b.metrics.beta) {
            return -1 * asc;
          }
          if (a.metrics.beta > b.metrics.beta) {
            return 1 * asc;
          }
          return 0;
        })
      });
      this.setState({ sortBetaAsc: !this.state.sortBetaAsc });
    }

  }

  export default StockComponent;