import axios from 'axios';
import { useState } from 'react';

function CreateUser() {

    let baseURL = "https://61a32591014e1900176dead9.mockapi.io/users"
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");

    let createUser = () => {
        let date = new Date();
        axios.post(baseURL, {
            name: name,
            address: address,
            createdAt: date.toISOString()
        })
        setName("");
        setAddress("");
    }

    let handleName = (event) => {
        setName(event.target.value);
    }

    let handleAddress = (event) => {
        setAddress(event.target.value);
    }

    return (
        <div className='container'>
            <h4 className='mt-3 mb-2 font-weight-normal'>Create user</h4>
            <div className='row row-cols-1'>
                <div className='col'>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={handleName} />
                        <small className='text-muted'>Atleast 3 characters</small>
                    </div>
                    <div className='form-group'>
                        <label>Address:</label>
                        <input type="text" placeholder='Address' className='form-control' value={address} onChange={handleAddress} />
                    </div>
                    <div className='form-group'>
                        <button type='button' onClick={createUser} disabled={name.length > 2 ? false : true} className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;