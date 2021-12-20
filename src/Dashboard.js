import React from 'react'

function Dashboard() {
    return (
        <div className='container'>
            <h4 className='mt-3 font-weight-normal'>Dashboard</h4>
            <div className='row row-cols-1'>
                <div className='col'>
                    <p>CRUD App to list all users, create users, edit users and delete users.</p>
                </div>
                <div className='col'>
                    <ul>
                        <li>Click on <strong>List Users</strong> to see all users</li>
                        <li>Click on <strong>Create User</strong> to create user</li>
                        <li>Later you can Edit/Delete any user from List User page</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
