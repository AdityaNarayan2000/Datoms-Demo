import React from 'react';

import './Systems.css';
// import { BulbOutlined } from "@ant-design/icons";

import Pie from './Pie';
import PieSmall from './PieSmall';
import HeatBar from './HeatBar';
import PowerChart from './PowerChart';
import ResponseTime from './ResponseTime';

import Image from './map.jpg';

const Systems = () => {
        return (
                <div className="container Systems">
                        <div className="left">
                                <div className="total">
                                        <div className="power"></div>
                                        <div className="bulbs"></div>
                                </div>
                                <div className="area">

                                </div>
                        </div>
                        <div className="main">
                                <div className="top">


                                        <div className="Stats1">
                                                <PowerChart />
                                        </div>
                                        <div className="Stats4">

                                                <div className="leftStat">
                                                        <div className="topStat tiny">
                                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                                        Total Power
                                                                </p>
                                                                <div className="ResponseTime">
                                                        <ResponseTime />
                                                </div>
                                                        </div>
                                                        <div className="bottomStat tiny">
                                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>Bulbs Working
                                                                </p>
                                                                <div className="circleS">
                                                                        
                                                                <PieSmall className="circle" percentage={84} colour="#33ccee" />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="rightStat">
                                                        <div className="topStat tiny">
                                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                                        Bulbs Count
                                                                </p>
                                                                <p className="text" style={{ color: "white", fontSize: "30px", fontWeight: "500", textAlign:"center" }}>
                                                                        1947 +
                                                                </p>
                                                                
                                                                <div className="circleS">
                                                                        
                                                                {/* <PieSmall className="circle" percentage={84} colour="#33ccee" /> */}
                                                                </div>
                                                        </div>
                                                        <div className="bottomStat tiny">
                                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                                        Response Time
                                                                </p>
                                                                <p className="text" style={{ color: "white", fontSize: "30px", fontWeight: "500", textAlign:"center" }}>
                                                                        1.243 s.
                                                                </p>
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className="bottom">
                                        <div className="Stats1">
                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                        Heat Levels
                                                </p>
                                                <div className="HeatBar">
                                                        <HeatBar />
                                                </div>

                                        </div>
                                        <div className="Stats2">
                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                        Bulbs Avg Tilt
                                                </p>
                                                <div className="Pie">
                                                        <Pie className="circle" percentage={84} colour="#660000" />
                                                </div>
                                        </div>
                                        <div className="Stats3">
                                                <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                        Locational View
                                                </p>
                                                <div className="ResponseTime">
                                                        <img src={Image} alt="Map" />
                                                        {/* <ResponseTime /> */}
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="right">
                                <div className="working">
                                        <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                Bulbs Working
                                        </p>
                                        <div className="Pie">
                                                <Pie className="circle" percentage={74} colour="green" />
                                        </div>
                                </div>

                                <div className="notification">
                                        <p className="text" style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                                                Notification
                                        </p>
                                </div>
                        </div>
                </div>
        )
}

export default Systems;