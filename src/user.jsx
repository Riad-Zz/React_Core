import { use } from 'react'
import './App.css'

export default function User({ fetchUser }) {
    const user = use(fetchUser);
    return (
        <div className='userStyle'>
            <p>Name : {user[0].name}</p>
            <p>Email : {user[0].email}</p>
        </div>
    )
}