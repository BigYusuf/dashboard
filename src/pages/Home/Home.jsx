import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import { userData } from '../../dummyData';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data= {userData} type="monotone" grid dataKey = "Active User" title="User Analytics"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
export default Home
