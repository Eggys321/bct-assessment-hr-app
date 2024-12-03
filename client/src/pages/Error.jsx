import React from 'react';
import errorImg from "../assets/errorImg.svg"

const Error = () => {
  return (
    <>
    <main className='container text-center'>
        <img src={errorImg} alt="error-image" className='' style={{width:"50%"}}/>
        <h1>Page Not Found</h1>
    </main>
    </>
  )
}

export default Error