import React, { Component, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

import EditDisplay from '../../components/EditDisplay/EditDisplay'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'

export function ListPage() {
    const navigate = useNavigate()
    const {setUserInfo, userInfo} = useContext(UserContext);
    const [taskList, setTaskList] = useState({})

    useEffect(() => {
        if (!localStorage.allTasks){
            localStorage.setItem('allTasks',JSON.stringify({})) // create our storage if no preexisting session
        }
        taskListUpdate();
    },[])

    const taskListUpdate = () => {
        const newList = {};
        // pull from localstorage for values after looking for values
        const taskObject = JSON.parse(localStorage.getItem('allTasks')); // object pulled from local storage
        if (Object.keys(taskObject).length){ // check if a task collection exists
            for (let i =0; i < Object.keys(taskObject).length; i++){
                newList[Object.keys(taskObject)[i]] = taskObject[Object.keys(taskObject)[i]]
            }
        }
        console.log('taskupdate   ', taskObject)
        setTaskList(newList);
    }

    const newTask = () => {
        // add new task to our localstorage with no value
        // render it as edit state
        let key = 0;
        const taskObject = JSON.parse(localStorage.getItem('allTasks'));
        if (Object.keys(taskObject).length) {
            key = Number(Object.keys(taskObject)[Object.keys(taskObject).length - 1]) + 1
        }
        // update task object and re set
        taskObject[key] = {
            id: key,
            text: '',
            edit: true
        }
        localStorage.setItem('allTasks', JSON.stringify(taskObject)); // update with new task object

        taskListUpdate(); // rerender our state list
    }

    const editTask = (id, newValue) => {
        // update a task in localstorage
        // change edit mode to false / true depending on use
        const taskObject = JSON.parse(localStorage.getItem('allTasks'));
        taskObject[id] = newValue; // update that id's fields
        localStorage.setItem('allTasks', JSON.stringify(taskObject));
        taskListUpdate();
    }


    const deleteTask = (id) => {
        // remove task from storage
        const taskObject = JSON.parse(localStorage.getItem('allTasks'));
        delete taskObject[id];
        localStorage.setItem('allTasks', JSON.stringify(taskObject));
        taskListUpdate();
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
                        <button className="newTaskButton" onClick = {newTask}>New</button>
                    </div>
                    {Object.keys(taskList).map(key => {
                        if (Object.keys(taskList).length){
                            if (taskList[key].edit) {
                                return <EditDisplay editTask = {editTask} taskValue = {taskList[key]} />
                            }
                            else if (!taskList[key].edit) {
                                return <ItemDisplay editTask = {editTask} taskValue = {taskList[key]} deleteTask = {deleteTask} />
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    )
}