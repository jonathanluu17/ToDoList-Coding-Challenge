import React from 'react'

export function EditDisplay({saveTask, taskValue}) {

    // get value from input with an onchange
    // minimum one character max 25 characters
    // just use an alert for this?

    // onclick on save button will take state value from onchange and run savetask

    return(
        <div className="editWrapper">
            <input className = "taskEntry" defaultValue={taskValue.text} />
            <button className = "saveButton">Save</button>
        </div>
    )
}