import React, { useState } from 'react'

const App = () => {

    const [ data , setdata] = useState({
      title:"",
      des:"",
      select:"",
      date:"",
    }) 

    const [todos,setTodos] = useState([{

    }])


    const changeHandler = e =>{
      // setTask(e.target.value)
      setdata({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler= e=>{
      e.preventDefault();
      // console.log(data);
      const newTodos =[...todos,data];
      setTodos(newTodos);
      setdata("");

     
     
    }

  return (
    <div>
      <center>
      <h2>From</h2>
      <form onSubmit={submitHandler} >
            <input type="text" required name="title" value={data.title} placeholder="Title"  onChange={changeHandler}/>
            <input type="text" required  name="des" value={data.des} placeholder="Description" onChange={changeHandler} />
            <label for="status"  required>Status:</label>
            <select name="status" required name="select" value={data.select} id="status" onChange={changeHandler}>
                  <option   value="ENUM">ENUM</option>
                  <option  required  value="Open">Open</option>
                  <option  required value="In-Progress">In-Progress</option>
                  <option  required value="Completed">Completed</option>
            </select>
            <input type="datetime-local" name="date" required value={data.date} id="datastamp" onChange={changeHandler}></input>
            <input type="submit" value="AddList" required name="Add" />
            
      </form>




      {
              
              todos.map((element,index)=>(
                <>
                  
                  <h1> {element.title} </h1>
                  <h1> {element.des} </h1>
                  <h1> {element.select} </h1>
                  <h1> {element. date} </h1>
                  <hr></hr>
                </>
              ))  
            }
            
















      </center>
    </div>
  )
}

export default App
