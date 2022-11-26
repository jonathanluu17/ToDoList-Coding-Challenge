import React, { Component, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'


export function ListPage() {
    const navigate = useNavigate()
    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        if (!userInfo.user_id) {
            navigate('/')
        }
    })

    return (
        <div>
            ListPage
        </div>
    )
}