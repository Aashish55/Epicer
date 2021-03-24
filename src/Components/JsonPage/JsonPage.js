import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './JsonPage.css'

const JsonPage = () => {
    const [jsonDATA, setJsonDATA] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setJsonDATA(res.data)
                console.log(jsonDATA)
            })
    }, []);

    return (
        <div className='jsonPage'>
            {jsonDATA.map(data => (
                <div className='individual_box' key={data.id}>
                    <h3 className='userTitle'><span>Name:</span> {data.name}</h3>
                    <p className='subtitle'><span>E-mail:</span> {data.email}</p>
                    <p className='subtitle'><span>Address:</span> {data.address.street}</p>
                    <p className='subtitle'><span>Phone:</span> {data.phone}</p>
                    <p className='subtitle'><span>website:</span> {data.website}</p>
                </div>
            ))}
        </div>
    );
}

export default JsonPage;