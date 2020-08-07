import React, { Component } from "react";
import "./index.css";
import Timer from "./timer";
class Todo extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              list: [],
                              todoList: this.props.todoList,
                              checked: false,
                              count: 0,
                    }; // end of state
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
                                        <button
                                                  className="addBtn"
                                                  onClick={() => this.addList()}
                                        >
                                                  Add activity
                                        </button>
                                        <ul>
                                                  {this.emptyArray()}{" "}
                                                  {this.state.list.map(
                                                            (val, index) => (
                                                                      <div className="listDiv">
                                                                                <li
                                                                                          style={
                                                                                                    this
                                                                                                              .state
                                                                                                              .checked
                                                                                                              ? {
                                                                                                                          textDecoration:
                                                                                                                                    "line-through",
                                                                                                                }
                                                                                                              : {
                                                                                                                          textDecoration:
                                                                                                                                    "none",
                                                                                                                }
                                                                                          }
                                                                                >
                                                                                          {
                                                                                                    val.description
                                                                                          }{" "}
                                                                                </li>
                                                                                <input
                                                                                          type="checkbox"
                                                                                          checked={
                                                                                                    this
                                                                                                              .state
                                                                                                              .checked
                                                                                          }
                                                                                          onClick={(
                                                                                                    e
                                                                                          ) =>
                                                                                                    this.checkedUncked(
                                                                                                              index
                                                                                                    )
                                                                                          }
                                                                                ></input>
                                                                                <button
                                                                                          onClick={() =>
                                                                                                    this.delete(
                                                                                                              index
                                                                                                    )
                                                                                          }
                                                                                >
                                                                                          Delete
                                                                                </button>
                                                                      </div>
                                                            )
                                                  )}
                                        </ul>
                              </div>
                    );
          }
}
export default Todo;
