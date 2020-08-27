import React, { Component } from "react";
import "./index.css";
import Timer from "./timer";

class Addlist extends Component {
  constructor(props) {
    super(props);
      this.state = {
      checked: false,
      linethrough:0,
        count: 0,
        edit:true,
        description:'',
        created_date:'',
         list: [],
        todoList:[],
    }; // end of state

      }// end of constractor

// Add list
       addItem=(e)=>{
        const value=e.target.value
        if(e.target.name==='description')
        {

          this.setState({description:value}) 
           }
        if(e.target.name==='date')
        {
          this.setState({created_date:value}) 
            }
      
       }
         // Add list button handle
        HandleInput=(e)=>{
         
          const description = this.state.description;
          const created_date = this.state.created_date;
          const arrayList=this.state.todoList;
          const obj={description , created_date }
         
            if(obj.description!==''&&obj.created_date!=='')
            {
              arrayList.push(obj)
              this.setState({ list:arrayList,
                     });
                     
            }
            if(obj.description===''&& obj.created_date==='')
            {
              alert('plase fill descriptiona date')
            }
        
      }
  // delete
    delete = (del) => {
       const getItem = this.state.list.filter(
      (val, index) => index !== del
    );

    this.setState({ list: getItem });
   };

   // check and light though
         checkedUncked = (ind) => {
        this.setState((state) => ({
        checked: !state.checked,
        linethrough:ind
         }));
        };
        //if array is empty then no item
        emptyArray = () => {
         if (this.state.list.length === 0) {
         return <li>Not items selected</li>;
        }
      };

          // edit

              edit=(ed)=>{
              this.setState(
                
                {
                  edit:false,linethrough:ed

                 }
                 ) 
              }// end of edit 

          //update text box
         updatehandle=(e)=>{
       this.setState({updateValue:e.target.value}) 
        }
        //update button
      updateButton=(index)=>{
        const value=this.state.updateValue;
        const changeList=this.state.todoList.filter((val,i)=>
    {
       if(i===index )
       {
        val.description=value;
       }
       return val
      })

  this.setState({todoList:changeList,edit:true})
}
  render() {
    return (
     
      <div className="wraper">     
        <h1>TodoList</h1>
        <Timer />
        <div className="addItem">
        <input type="text"  name="description"  onChange={(e)=>this.addItem(e)}></input>
        <input type="Date" name="date" onChange={(e)=>this.addItem(e)}></input>
        <button className="addBtn" onClick={()=>this.HandleInput()} >Add Item</button>
        </div>

{/* end of  add list items*/ }

        
        <ul>{this.emptyArray()}{this.state.list.map((val, index) => (<div key ={index} className="listDiv">
                
                 {/* display text box regarding id when clcik on edit button*/ }
                 { this.state.edit===false && index===this.state.linethrough &&<input  claaName="edit" name="update" onChange={(e)=>this.updatehandle(e)} type="text"></input>}
                
                {/* render description follow up check box through line on text*/ }
                 <li key={index} style={this.state.checked && index===this.state.linethrough ? {textDecoration:"line-through"}: {textDecoration:"none"}}>
                  {
                    val.description 
                  }
                   || {val.created_date}
                </li>

                <input
                  type="checkbox"checked={ index===this.state.linethrough && this.state.checked }
                  onClick={(e) =>this.checkedUncked(index)}>
                      
                  </input>
                <button onClick={() => this.delete(index)}>Delete</button>
                {/* show up edit button or not*/ } 
              {  this.state.edit===true &&<button onClick={()=>this.edit(index)}>Edit</button>}
              {/* show up edit update  with regarding to id*/ }
               { this.state.edit===false && index===this.state.linethrough && <button onClick={()=>this.updateButton(index)}>Update</button>}

                </div>
            )
          )}
        </ul>
      </div>
      
    );

  }
}
export default Addlist;
