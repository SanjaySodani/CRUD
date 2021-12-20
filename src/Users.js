import {useState, useEffect} from 'react';
import axios from 'axios';
import User from './User';

function Users() {
    let [users, setUsers] = useState();
    let baseURL = "https://61a32591014e1900176dead9.mockapi.io/users";
    useEffect(() => {
        getUsers();
    }, [])

    let getUsers = async () => {
        let res = await axios.get(baseURL);
        setUsers(res.data);
    }

    let handleDelete = (id) => {
        axios.delete(baseURL+`/${id}`).then(()=>{
            getUsers();
        });
    }

    if (!users) return null;

    return (
        <div className='container mt-3'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3'>
                {users.map((item) => {
                    return (
                        <User key={item.id} item={item} removeUser={handleDelete} />
                    )
                })}
            </div>
        </div>
    )
}

export default Users
