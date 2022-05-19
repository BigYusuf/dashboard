import React from 'react';
import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,299</span>
                    <span className="featuredMoneyRate">-9.22 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,500</span>
                    <span className="featuredMoneyRate">-34.71 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,922</span>
                    <span className="featuredMoneyRate">+19.30 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Products</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,780</span>
                    <span className="featuredMoneyRate">-9.22 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
