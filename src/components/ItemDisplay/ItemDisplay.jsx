import React from 'react'

export default function ItemDisplay({editTask, deleteTask, taskValue}) {

    // get values to display from task value
    // button methods taken from listpage

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
            <p className = "taskEntry">{taskValue.text}</p>
            <button className = "editButton" onClick = {editButton}>Edit</button>
            <button className = "deleteButton" onClick = {deleteButton}>Delete</button>
        </div>
    )
}