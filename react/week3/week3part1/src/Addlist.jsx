import React, { Component } from "react";
import "./index.css";
import Timer from "./timer";
class Addlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      todoList:'',
      checked: false,
      linethrough:0,
      count: 0,
      edit:true
    }; // end of state
    console.log(this.state.newProps)
  }

  componentDidMount()
        {
          const url='https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
          fetch(url)
          .then(res=>res.json())
          .then(todo=>this.setState({
          todoList:todo
          }))
        }

  addList = () => {
    let arrayList = this.state.list;
    let items = this.state.todoList;
    let item = items[Math.floor(Math.random() * items.length)];
    arrayList.push(item);
    this.setState({ list: arrayList });
  };
    delete = (del) => {
    const getItem = this.state.list.filter(
      (val, index) => index != del
    );

    this.setState({ list: getItem });
  };

   //
  checkedUncked = (ind) => {
         

    this.setState((state) => ({
      checked: !state.checked,
      linethrough:ind
    }));
  };
  //
  emptyArray = () => {
    if (this.state.list.length == 0) {
      return <li>Not items selected</li>;
    }
  };
  render() {
    return (

      
      <div className="wraper">
      
        <h1>TodoList</h1>
        <Timer />
        <button  className="addBtn" onClick={() => this.addList()}>Add activity</button>
        <ul>{this.emptyArray()}{this.state.list.map((val, index) => (<div className="listDiv">
        <li style={this.state.checked && index==this.state.linethrough ? {textDecoration:"line-through"}: {textDecoration:"none"}}>
                  {
                    val.description
                  }
                </li>
                

                <input
                  type="checkbox"checked={ index==this.state.linethrough && this .state.checked }
                  onClick={(e) =>this.checkedUncked(index)}>
                      
                  </input>
                <button onClick={() => this.delete(index)}>Delete</button>
                </div>
            )
          )}
        </ul>
      </div>
    );
  }
}
export default Addlist;
