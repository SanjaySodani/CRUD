import {Link} from 'react-router-dom';

function User(props) {

    let handleDelete = () => {
        props.removeUser(props.item.id);
    }

    return (
        <div className='col my-2'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{props.item.name}</h5>
                    <p className='card-text'>{props.item.address}</p>
                    <p className='card-text'>{props.item.createdAt}</p>
                    <Link  to={`/edit-user/${props.item.id}`} className="btn btn-outline-primary btn-sm">Edit</Link>
                    <button type="button" className='btn btn-sm btn-danger ml-2' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default User
