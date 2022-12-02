import React from 'react'

export default function ItemDisplay({editTask, deleteTask, taskValue}) {

    // get values to display from task value
    // button methods taken from listpage
    return(
        <div className="itemWrapper">
            <p className = "taskEntry">{taskValue.text}</p>
        </div>
    )
}