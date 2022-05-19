import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItems">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetUsername">Jon Doe</span>
                        <span className="widgetUserTitle">Softwre Eng.</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItems">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetUsername">James Doe</span>
                        <span className="widgetUserTitle">GIS Dev.</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItems">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetUsername">Jon Doe</span>
                        <span className="widgetUserTitle">Softwre Eng.</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
