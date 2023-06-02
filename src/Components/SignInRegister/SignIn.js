import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn(){

const gotohome = useNavigate()

function handleSignin(){
gotohome('/')
}

    return(
        <div className='vh-100 mt-5'>
        <div className='container m-auto mt-3 bg-light w-50 rounded p-4'>
            <form onSubmit={handleSignin}>
                <h3 className='mb-3'>Sign In !</h3>
                <label className='form-label' htmlFor='email'>Email</label>
                <input className='form-control w-75' name='email'></input>
                <label className='form-label' htmlFor='password'>Password</label>
                <input className='form-control w-75' name='password'></input>
                <button type='submit' className='btn btn-primary m-4'>Sign In</button>
            </form>
        </div>
        </div>
    )
}