import React from 'react'
import './Error.css'

const Error = () => (
    <div className='error'>
        <h3 className='error-title'><span>Oops !!!</span> Currently there are no recipes in the store.</h3>
        <p className='error-subtitle'> Click on Add button to add recipes.</p>
    </div>
)

export default Error;