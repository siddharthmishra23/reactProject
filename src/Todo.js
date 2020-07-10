import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
render(){
    let data = ""
    let completedTask = ""
    

    if(this.props.list.length > 0){
     data = this.props.list.map((r,index)=>{
           return <div style={{background : "#a8adac", margin:".2em" }} key={index}>
           <input type="checkbox" id="item" name="item"
                  checked={r.completed} onChange={(e)=>this.props.checkHandler(e,index)}></input>
           <p htmlFor="item" style={{margin:"10px", display: "inline"}} onClick={(e)=>this.props.edit(e,r.task,index)}>{r.task}</p>
         </div>
        })
    }
if(this.props.completedTaskList.length > 0 ){
    completedTask = this.props.completedTaskList.map((r,index)=>{
        return <div style={{background : "#a8adac", margin:".2em"}} key={index}>
        <input type="checkbox" id="item" name="item"
               checked={r.completed} onChange={(e)=>this.props.completedList(e,index)}></input>
        <p htmlFor="item" style={{margin:"10px", display: "inline"}}>{r.task}</p>
      </div>
     })
}
    return(
        <div>

            {data}
            {completedTask.length > 0 ? <p style={{position:"relative" , left:"48%" ,width:"30%"}}>Completed List</p> : null}
            {completedTask}
            {completedTask.length > 0 ?  <button style={{position:"relative" , left:"37%" ,width:"30%"}} type="button" onClick={this.props.clear}>Clear Completed!</button>  : null}
        </div>
    )
}
}


export default Todo;