import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function EditUser() {
    let params = useParams();
    let baseURL = "https://61a32591014e1900176dead9.mockapi.io/users"
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");

    let updateUser = () => {
        axios.put(baseURL+`/${params.id}`, {
            name: name,
            address: address,
        })
    }

    useEffect(() => {
        axios.get(baseURL+`/${params.id}`).then((response)=>{
            let temp = response.data;
            setAddress(temp.address);
            setName(temp.name);
        });
    }, [])

    let handleName = (event) => {
        setName(event.target.value);
    }

    let handleAddress = (event) => {
        setAddress(event.target.value);
    }

    if (!name) return null;

    return (
        <div className='container'>
            <h4 className='mt-3 mb-2 font-weight-normal'>Edit user</h4>
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
                        <button type='button' onClick={updateUser} disabled={name.length > 2 ? false : true} className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser;