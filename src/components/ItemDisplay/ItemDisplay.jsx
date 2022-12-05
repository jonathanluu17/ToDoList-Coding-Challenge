import React from 'react'
import './ItemDisplay.css'

export default function ItemDisplay({editTask, deleteTask, taskValue}) {

    const editButton = () => {
        // change task into edit mode
        editTask(taskValue.id, {
            ...taskValue,
            edit: true
        })
    }

    const deleteButton = () => {
        deleteTask(taskValue.id)
    }

    return(
        <div className="itemWrapper">
            <p className = "displayEntry">{taskValue.text}</p>
            <div className = "buttonWrapper">
                <i className = "material-icons" id = "editButton" onClick = {editButton}>edit</i>
                <i className = "material-icons" id = "deleteButton" onClick = {deleteButton}>delete</i>
            </div>
        </div>
    )
}