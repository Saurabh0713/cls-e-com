import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

const navigate = useNavigate()

function handleSubmit(){
    navigate('/signin')
}

  return (
    <div className='vh-100 mt-5'>
    <div className='container m-auto mt-3 row bg-light w-75 rounded'>
        <h3 className='my-3'>Please Register</h3>
        <form className='d-flex flex-wrap' onSubmit={handleSubmit}>
        <div className='col-6'>
            <label for='fname' className='w-25 form-label'>First name</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='fname'></input>
        </div>
        <div className='col-6'>
            <label for='lname' className='w-25 form-label'>Last name</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='lname'></input>
        </div>
        <div className='col-6'>
            <label for='email' className='w-25 form-label'>Email</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='email'></input>
        </div>
        <div className='col-6'>
            <label for='password' className='w-25 form-label'>Password</label>
            <input className='my-1 mb-3 w-50 form-control' type='password' name='password'></input>
        </div>
        <div className='col-6'>
            <label for='username' className='w-25 form-label'>Username</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='username'></input>
        </div>
        <div className='col-6'>
            <label for='mobile' className='w-25 form-label'>Mobile</label>
            <input className='my-1 mb-3 w-50 form-control' type='number' name='mobile'></input>
        </div>
        <div className='col-6'>
            <label for='address' className='w-25 form-label'>Address 1</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='address' placeholder='Flat no'></input>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='address' placeholder='Street'></input>
        </div>
        <div className='col-6'>
            <label for='address' className='w-25 form-label'>Address 2</label>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='address' placeholder='City'></input>
            <input className='my-1 mb-3 w-50 form-control' type='text' name='address' placeholder='Zip Code'></input>
        </div>
        <button type='submit' className='btn btn-primary m-4'>Signup</button>
        
        </form>
    </div>
    </div>
  )
}
