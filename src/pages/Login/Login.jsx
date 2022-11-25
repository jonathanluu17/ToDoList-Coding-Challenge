import React, { Component, useEffect, useState } from 'react'
import './Login.css'

export function LoginPage() {
    // initialize form fields in state
    const [inputs, setInput] = useState({
        email: '',
        password: ''
    })

    // initialize state for updating login input styling
    const [emailStyle, setEmailStyle] = useState({
        borderColor: '1px solid black',
        textvisible: 'hidden'
    })

    // useEffect(() => {
    //     console.log(inputs)
    // })


    // validate email onchange
    const emailOnchange = (e) => {
        // validate email format
        if (e.target.value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
            setEmailStyle({
                borderColor: '1px solid red',
                textvisible: 'visible'
            })
        } else {
            setEmailStyle({
                borderColor: '1px solid black',
                textvisible: 'hidden'
            })
            setInput({...inputs, email:e.target.value})
        }
    }

    // password onchange
    const passOnchange = (e) => {
        setInput({...inputs, password:e.target.value})
    }

    return (
        <div>
            <div className="mainLoginContainer">
                <h1 className="mainLogo">
                    Rapptr Labs
                </h1>
                <div className="inputsMainContainer">
                    <div className="emailContainer">
                        <h5>Email</h5>
                        <div className="emailWrapper" style={{border: emailStyle.borderColor}}>
                            <input className="emailInput" type='text' placeholder='user@rapptrlabs.com' onChange={emailOnchange} />
                        </div>
                        <div className='textWarning' style={{color: 'red', visibility: emailStyle.textvisible}}>Not a valid email</div>
                    </div>
                    <div className="passContainer">
                        <h5>Password</h5>
                        <div className="passWrapper" style={{border:'1px solid black'}}>
                            <input className="passInput" type='password' onChange={passOnchange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}