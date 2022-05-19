import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
    
    const Button = ({type}) =>{
        return <button className={"widgetLgButton" + type}>{type}</button>;
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan James</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2022</td>
                    <td className="widgetLgAmount">$12,022</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">17 Jan 2022</td>
                    <td className="widgetLgAmount">$1,170</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan James</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2022</td>
                    <td className="widgetLgAmount">$12,022</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">17 Jan 2022</td>
                    <td className="widgetLgAmount">$1,170</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                
            </table>
        </div>
    )
}

export default WidgetLg
