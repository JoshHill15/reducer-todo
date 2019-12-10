import React, { useState, useReducer } from "react";
import {reducer, initialState} from "../reducers/simpleReducer"
function TodoForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState("")
    function submit(e){
        e.preventDefault()
        addItem(input)
        setInput("")
    }

    function addItem (itemName){
        let item = {
            item: itemName,
            completed: false,
            id: Date.now() + Math.random()    
        }
        dispatch({ type: "ADD_TODO", payload: item})
    }

    console.log(state.item)

    // function completed(id){
    //     state.item.map(cv => {
    //         if (cv.id === id){
    //             return {
    //                 ...cv,
    //                 completed: !cv.completed
    //             }
    //         } else {
    //             return cv
    //         }
    //     })
    // }

    function removeItem(){
        state.item.filter(cv => {
            if (cv.completed === false){
                return cv
            }
        })
    }

  return (
    <div>
        {state.item.map(cv => 
            (<div 
                onClick = {() => dispatch({ type: "COMPLETED", payload: cv.id})} 
                className = {cv.completed === true ? "comp" : "sdf"}
                key = {cv.id}>
                {cv.item}
            </div>))}
      <form onSubmit = {submit}>
        <input type="text" name="item" placeholder="...todo" 
        onChange = {e => setInput(e.target.value)} value = {input}/>
        <button type="submit">Add Todo</button>
        <button onClick = {() => dispatch({ type: "REMOVE" })} type="submit">Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
