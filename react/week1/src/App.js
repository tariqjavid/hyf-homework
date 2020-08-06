import React, { Component } from "react";
import "./index.css";
class todList extends Component {
                  render() {
                    return (
                              <div className="wraper">
                              <h1>Todo List</h1>
                              <ul>{this.props.tList.map((val,index)=><li style={{color:`rgb(${index}55,${index},0)`}}>{val.description} </li>)}</ul>
                              </div>
                    );
          }
}
export default todList;
