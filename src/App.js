import React, { Component } from 'react';
import Todo from "./Todo"
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      data : {task : "", completed : false},
      list:[],
      completedList:[],
      index:"",
      mode : false
    }
  }
 data= (e)=>{
   let newObj = {...this.state.data, task : e.target.value}

this.setState({data : newObj})
  }
submit =(e)=>{
  e.preventDefault()
  const {index , mode} = this.state
 
  if(mode === true){
let editList =  [...this.state.list]
editList[index] = this.state.data
this.setState({list : editList , data : {task : "", completed : false}, index : "", mode : false})
  }else{
    let newList = [...this.state.list]
    newList.push(this.state.data)
    this.setState({list : newList , data : {task : "", completed : false}})
  }
  
  
}
checkHandler=(e,index)=>{
  console.log(e.target.checked , "checkhandler")
let newList = [...this.state.list]
let doneList = [...this.state.completedList]
newList[index].completed = e.target.checked
if(newList[index].completed){
  doneList.push(newList[index])
  newList.splice(index ,1)
}
this.setState({list : newList, completedList : doneList})
}

checkDoneHandler = (e,index)=>{
  console.log(e.target.checked, "donecheck")
  let newList = [...this.state.list]
let doneList = [...this.state.completedList]
doneList[index].completed = e.target.checked
if(doneList[index].completed === false){
  newList.push(doneList[index])
  doneList.splice(index ,1)
}
this.setState({list : newList, completedList : doneList})
}
deleteAll = ()=>{
  this.setState({completedList : []})
}

edit = (e,val,index)=>{
 let newObj = {...this.state.data}
 newObj.task = val
 this.setState({data : newObj, index : index , mode : true})
}
  render(){
   
    return(
      <React.Fragment>  
      <form style={{position:"relative", left:"30%"}}>
      <input type="text" value={this.state.data.task} onChange={this.data} placeholder="Add todo" style={{width:"40%"}}></input>
      <button type="submit" onClick={this.submit}>Submit</button>
      </form>
     
      <Todo 
      list={this.state.list} 
      completedTaskList={this.state.completedList} 
      checkHandler = {this.checkHandler} 
      completedList={this.checkDoneHandler} 
      clear={this.deleteAll}
      edit= {this.edit}/>
     
      

      </React.Fragment>
     
    )
  }
}

export default App;
