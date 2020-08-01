import React, { Component } from "react";
import "./index.css";
class todList extends Component {
          state = {
                    key1: { color: "green" },
                    key2: { color: "red" },
                    key3: { color: "blue" },
          };
          render() {
                    return (
                              <div className="wraper">
                                        <h1>Todo List</h1>
                                        <p style={this.state.key1}>
                                                  {this.props.tList.key1}
                                        </p>
                                        <p style={this.state.key2}>
                                                  {" "}
                                                  {this.props.tList.key2}
                                        </p>
                                        <p style={this.state.key3}>
                                                  {this.props.tList.key3}
                                        </p>
                              </div>
                    );
          }
}
export default todList;
