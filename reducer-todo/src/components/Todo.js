import React from "react"
import "../App.css"

function Todo (props) {

    return (
        <div>
            <li>{props.cv.item}</li>
        </div>
    )
}

export default Todo