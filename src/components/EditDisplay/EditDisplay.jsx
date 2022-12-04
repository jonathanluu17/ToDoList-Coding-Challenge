import React, { useState } from 'react'


export default function EditDisplay({editTask, taskValue}) {

    const [taskField, setTaskField] = useState(taskValue.text)

    const taskFieldOnchange = (e) => {
        setTaskField(e.target.value)
    }


    const saveTask = () => {
        // save task after editting
        if ((taskField.length < 1 || taskField.length > 25)){
            alert('Task should be betwwen 1 and 25 characters!')
        }
        else {
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