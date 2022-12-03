import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export function LoginPage() {

    const navigate = useNavigate()

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

    const [passStyle, setPassStyle] = useState({
        borderColor: '1px solid black',
        textvisible: 'hidden'
    })

    const [loginStyle, setLoginStyle] = useState({
        disable: true,
        textvisible: 'hidden'
    })


    useEffect(() => {
        if (localStorage.loginToken){
            navigate('/list')
        }
    }, [])

    useEffect(() => {
        if ((inputs.email.length && inputs.password.length) && (emailStyle.textvisible === 'hidden' && passStyle.textvisible === 'hidden')){
            setLoginStyle({
                ...loginStyle,
                disable: false
            })
        }
        else {
            setLoginStyle({
                ...loginStyle,
                disable: true
            })
        }
    }, [inputs, passStyle, emailStyle])

    // validate email onchange
    const emailOnchange = (e) => {
        // validate email format
        if (e.target.value && (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) || e.target.length > 50)){
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
        // validate password length
        if (e.target.value && (e.target.value.length < 4 || e.target.value.length > 16)) {
            setPassStyle({
                borderColor: '1px solid red',
                textvisible: 'visible'
            })
        } else {
            setPassStyle({
                borderColor: '1px solid black',
                textvisible: 'hidden'
            })
            setInput({...inputs, password:e.target.value})
        }
    }


    // submit form
    const onSubmit = (e) => {
        setLoginStyle({
            ...loginStyle,
            disable: true
        })
        e.preventDefault()
        // set up form data
        let formData = new FormData();
        formData.append('email', inputs.email);
        formData.append('password', inputs.password);
        fetch('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', {
            method: 'POST',
            body: formData,
        })
        .then((res) => {
            if (res.ok) return res.json();
            else throw new Error();
        })
        .then((res) => {
            // navigate to list page
            localStorage.setItem('loginToken', JSON.stringify(res.user_token))
            navigate('/list')

        })
        .catch((err) => {
            setLoginStyle({
                disable: false,
                textvisible: 'visible'
            })
        })
    }



    return (
        <div>
            <div className="mainLoginContainer">
                <h1 className="mainLogo">
                    Rapptr Labs
                </h1>
                <div className="inputsMainContainer">
                    <form onSubmit={onSubmit}>
                        <div className="emailContainer">
                            <h5>Email</h5>
                            <div className="emailWrapper" style={{border: emailStyle.borderColor}}>
                                <input className="emailInput" type='text' placeholder='user@rapptrlabs.com' onChange={emailOnchange} />
                            </div>
                            <div className='textWarning' style={{color: 'red', visibility: emailStyle.textvisible}}>Not a valid email</div>
                        </div>
                        <div className="passContainer">
                            <h5>Password</h5>
                            <div className="passWrapper" style={{border: passStyle.borderColor}}>
                                <input className="passInput" type='password' placeholder='Must be at least 4 characters' onChange={passOnchange} />
                            </div>
                            <div className='textWarning' style={{color: 'red', visibility: passStyle.textvisible}}>Password should be between 4 and 16 characters</div>
                        </div>
                        <div className = "loginContainer">
                            <button className="loginButton" type="submit" disabled = {loginStyle.disable}>Login</button>
                            <div className = 'textWarning' style={{color: 'red', visibility: loginStyle.textvisible}}>Invalid Email or Password</div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}