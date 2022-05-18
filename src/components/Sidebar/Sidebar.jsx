import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
       <div className="sidebar">
           <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                      <Link to = "/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                      </Link>
                      <Link to = "/analytics" className="link">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                      </Link>
                      <Link to = "/sales" className="link">
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                      </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                      <Link to = "/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/>
                            Users
                        </li>
                      </Link>
                      <Link to = "/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Product
                        </li>
                      </Link>
                      <Link to = "/transactions" className="link">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                      </Link>
                      <Link to = "/reports" className="link">
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Report
                        </li>
                       </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"s/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                        
                    </ul>
                </div>
           </div>
       </div>
    )
}

export default Sidebar
