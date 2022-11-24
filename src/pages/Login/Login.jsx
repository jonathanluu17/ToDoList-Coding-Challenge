import React, { Component, useEffect, useState } from 'react'

export function LoginPage() {
    // initialize form fields in state
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')



    // initialize state for updating login input styling
    const [emailColor, setEmailColor] = useState('black')

    return (
        <div>
            <div className="mainLoginContainer">
                <h1 className="mainLogo">
                    Rapptr Labs
                </h1>
                <div className="inputsMainContainer">
                    <div className="emailContainer">
                        <h5>Email</h5>
                        <div className="emailWrapper" style={{border: '1px dashed red'}}>
                            
                        </div>
                    </div>
                    <div className="passContainer">

                    </div>
                </div>
                Test 
            </div>
        </div>
    )
}