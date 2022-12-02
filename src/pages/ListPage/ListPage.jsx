import React, { Component, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

import EditDisplay from '../../components/EditDisplay/EditDisplay'

export function ListPage() {
    const navigate = useNavigate()
    const {setUserInfo, userInfo} = useContext(UserContext);
    const [taskList, setTaskList] = useState({})

    useEffect(() => {
        const newList = {};
        // pull from localstorage for values after looking for values
        if (Object.keys(localStorage).length){ // check object keys length
            // iterate through localstorage object, pulling the values and adding it to state
            for (let i =0; i < Object.keys(localStorage).length; i++){
                newList[Object.keys(localStorage)[i]] = JSON.parse(localStorage.getItem(Object.keys(localStorage([i]))));
            }
            setTaskList(newList);
        }
    },[])


    const newTask = () => {
        // add new task to our localstorage with no value
        // render it as edit state
        let key = 0;
        if (Object.keys(localStorage.length)) {
            key = Object.keys(localStorage)[Object.keys(localStorage).length]
        }
        localStorage.setItem(key, JSON.stringify({
            id: key,
            text: '',
            editting: true
        }))
    }

    const saveTask = (newValue) => {
        // update a task in state (after editing) and in localstorage
        // change edit mode to false

    }

    const editTask = (id) => {
        // update task to edit mode
    }

    return (
        <div className = "globalListContainer">
            <div className="logoutContainer">
                <button className= "logoutButton">Logout</button>
            </div>
            <div className = "listViewContainer">
                <h1>My To-Do List</h1>
                <div className = "tasksContainer" style={{border: '1px solid black'}}>
                    <div className="searchAreaContainer">
                        <input className="searchBar" type="text" placeholder="Search" />
                        <button className="newTaskButton">New</button>
                    </div>
                    {Object.keys(taskList).map(key => {
                        
                    })}
                </div>
            </div>
        </div>
    )
}