import React from 'react'
import './users.css';

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="newUserItem">
                    <label>Staff</label>
                    <select name="staff" id="staff" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Name</label>
                    <input type="text" placeholder="e.g. John Doe" />
                </div>
                <div className="newUserItem">
                    <label>Occupation</label>
                    <input type="text" placeholder="e.g. Software Engineer" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="e.g. JohnDoe12@gmail.com" />
                </div>
                
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 234 567 56"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Lagos | NIG"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <select name="sex" id="sex" className="newUserSelect">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
