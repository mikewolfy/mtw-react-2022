//https://reactjs.org/docs/faq-ajax.html
import React from 'react';
import './../StockComponent.css';

class Allocation extends React.Component {
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
            <h2>Asset Allocation</h2>

            Several major keys to a good investing strategy are diversification, minimizing fees/taxes, and automating.  I personally have a few
            different buckets of investments.

            <ol>
                <li>RoboAdvisor: this bucket makes up  small but growing portion of my investments.  It achieves all three keys, but I don't have much control over the asset allocation that they choose for me.</li>
                <li>Financial Advisor: this bucket makes up about a 3rd of my investments.  There's a management fee that goes along with it, but the financial planner offers personal / family planning in addition to asset management, so I think the fee is worth it.  They manage the asset allocation and the fees are reasonable.</li>
                <li>My Allocation: I have an account at a brokerage that I manage on my own.  I diverify across the following allocations and rebalance regularly, usually by using the incoming cash flows.</li>
                <li>Retirement Account:  The last bucket is my retirement account with my company.  I take full advantage of the match, which is generous.  I then diversify as much as possible across the low cost options that the 401k provider offers.</li>
            </ol>

            <h3>My Asset Allocation</h3>
            <ul>
                <li>Large Cap - 6%</li>
                <li>Large Value - 6%</li>
                <li>Small Value - 6%</li>
                <li>Small Cap - 6%</li>
                <li>Intl Blend - 5%</li>
                <li>Intl Value - 5%</li>
                <li>Intl Small - 5%</li>
                <li>Intl Small Value - 5%</li>
                <li>EM - 10%</li>
                <li>REIT - 4%</li>
                <li>Intl REIT - 4 %</li>
                <li>Commodities - 8%</li>
                <li>Foreign Corp Bond - 5%</li>
                <li>TIPS - 5%</li>
                <li>Short Bonds - 5%</li>
                <li>Govt Bonds - 5%</li>
                <li>Foreign Govt Bonds - 5%</li>
                <li>High Yield Bonds - 5%</li>
            </ul>
            </div>
        )
    }
}
export default Allocation;