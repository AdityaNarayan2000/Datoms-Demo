import React from 'react';

import './Home.css';
import { SlackOutlined } from "@ant-design/icons";
import { BulbOutlined } from "@ant-design/icons";

import Pie from './Pie';
import BulbData from '../antd/BulbData';
import ResponseTime from './ResponseTime';

const Home = () => {
    return(
        <div className="Home">
        <div className="container">
          <div className="left">
            <div className="total">
              <div className="power">
                <div className="box-l1">
                  <SlackOutlined className="icon" style={{ fontSize: "30px" , color: "white" ,padding:"10px"}} />
                  <p className="data-text" style={{ color: "white" , fontSize: "28px" , fontWeight: "500"  }}>
                    2000 Kw
                  </p>
                  <p className="label-text" style={{ color: "white" , fontSize: "15px" , fontWeight: "400" , lineHeight: "1"}}>
                    Total Power
                  </p>
                </div>
              </div>
              <div className="bulbs">
                <div className="box-l2">
                  <BulbOutlined className="icon" style={{ fontSize: "30px" , color: "white" , padding:"10px" }} />
                  <p className="data-text" style={{ color: "white" , fontSize: "28px" , fontWeight: "500" }}>
                    350 +
                  </p>
                  <p className="label-text" style={{ margin:"0px", color: "white" , fontSize: "15px" , fontWeight: "400" ,
                    lineHeight: "1"  }}>
                    Total Bulb
                  </p>
                </div>
              </div>
            </div>
            <div className="area">
              <p className="text" style={{ color: "white" , fontSize: "20px" , fontWeight: "500"  }}>
                Patia Area Bhubhneshwar
              </p>
            </div>
          </div>
          <div className="main">
            <div className="heading">
              <p className="text" style={{ color: "white" , fontSize: "20px" , fontWeight: "500"  }}>
                Lights Online
              </p>
            </div>
            <div className="major">
              {/* <ul>
                <li id="list1"><a href="#">Bulb Number</a></li>
                <li id="list2"><a href="#">Bulb Number</a></li>
                <li id="list3"><a href="#">Bulb Number</a></li>
                <li id="list4"><a href="#">Bulb Number</a></li>
                <li id="list5"><a href="#">Bulb Number</a></li>
                <li id="list1"><a href="#">Bulb Number</a></li>
              </ul> */}
              <BulbData />
            </div>
          </div>
          <div className="right">
            <div className="working">
    
              <div className="box-r1">
                <p className="text" style={{ color: "white" , fontSize: "20px" , fontWeight: "500"  }}>
                  Bulbs Working
                </p>
                <div className="circle">
                  <Pie percentage={74} colour="#123456"/>
                </div>
              </div>
            </div>
            <div className="notification">
              <p className="text" style={{ color: "white" , fontSize: "20px" , fontWeight: "500"  }}>
                Notification
              </p>
            </div>
            <div className="saving">
              <p className="text" style={{ color: "white" , fontSize: "20px" , fontWeight: "500"  }}>
                Power Saving
              </p>
              <div className="Response">
              <ResponseTime />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;