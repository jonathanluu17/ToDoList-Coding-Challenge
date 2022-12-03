import React, { useRef, useEffect, useState } from 'react'


export default function EditDisplay({editTask, taskValue}) {

    // get value from input with an onchange
    // minimum one character max 25 characters
    // just use an alert for this?

    // onclick on save button will take state value from onchange and run savetask

    const [taskField, setTaskField] = useState(taskValue.text)


    const taskFieldOnchange = (e) => {
        setTaskField(e.target.value)
    }


    const saveTask = () => {
        // validate length of task field
        if ((taskField.length < 1 || taskField.length > 25)){
            alert('Task should be betwwen 1 and 25 characters!')
        }
        else {
        // run edit method, using our id and the edited object
        editTask(taskValue.id, {
            ...taskValue,
            text: taskField,
            edit: false
        })
        }
    }

    return(
        <div className="editWrapper">
            <input className = "taskEntry" defaultValue={taskValue.text} onChange = {taskFieldOnchange}/>
            <button className = "saveButton" onClick = {saveTask}>Save</button>
        </div>
    )
}