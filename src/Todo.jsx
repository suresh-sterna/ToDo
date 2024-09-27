import { useState } from 'react'
import Task from './task'


function Todo(){
    const [allTodos,setTodos]=useState([])
    const [newTitle,setNewTitle]=useState("")
    const [newDesc,setNewDesc]=useState("")

  const handleAddTodo=()=>{
    let newtodoItem={
        title:newTitle,
        desc:newDesc
    }

    let updatedTodoArr=[...allTodos]
    updatedTodoArr.push(newtodoItem);
    setTodos(updatedTodoArr)
  }


  const handleDeleteTodo = (index) => {
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.splice(index, 1);
    setTodos(updatedTodoArr);
  };
    return(

        <>
        <div className=" flex justify-center items-center p-6 ">
            <div className="mt-20 flex flex-col justify-center  items-center p-6 border bg-white shadow-md shadow-gray-100 rounded-md w-full md:w-1/3">
                
                <h1 className="text-2xl font-bold mb-4 text-gray-800">ToDo</h1>
                
                <label className="text-xl mb-2" 
                htmlFor="title" >Title
                </label>
                
                <input type="text" 
                value={newTitle}
                onChange={(e)=>setNewTitle(e.target.value)}
                placeholder="task title" 
                className="w-full mb-4 p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <label  className="text-xl mb-2" 
                htmlFor="description">Description
                </label>
                <input type="text" 
                value={newDesc}
                onChange={(e)=>setNewDesc(e.target.value)}
                placeholder="task description" 
                className="w-full mb-4 p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <button type="button"   
                onClick={handleAddTodo}
                className="p-2 bg-blue-500 text-white rounded-md  hover:bg-blue-700 transition duration-300" >Add
                </button>
            </div>
        </div>
        
      <Task allTodos={allTodos} handleDeleteTodo={handleDeleteTodo} />

        </>
    );

}
export default Todo;