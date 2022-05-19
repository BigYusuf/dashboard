import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './users.css'

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to ="/NewUser">
                    <button className="userAddButton">Create New User</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Annabella Yusuf</span>
                            <span className="userShowUserTitle">GIS Developer</span>
                        </div>
                    </div>
                    <div className="userShowBotton">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+1 123 456 24</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Lagos | NIG</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input className="userUpdateInput" type="text" placeholder="User Name"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input className="userUpdateInput" type="text" placeholder="johndoe@gmail.com"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input className="userUpdateInput" type="text" placeholder="+234 81 02 201 131"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input className="userUpdateInput" type="text" placeholder="Lagos, Nigeria"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input className="userUpdateInput" type="text" placeholder="e.g. John Doe"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg"src="" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input className="userUpdateInput" type="file" id="file"style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default User
