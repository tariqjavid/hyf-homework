import React, { Component } from "react";

class Timer extends Component {
          constructor() {
                    super();

                    this.state = { count: 0 };
          }
          componentDidMount() {
                    this.timer = setInterval(
                              () =>
                                        this.setState({
                                                  count: this.state.count + 1,
                                        }),
                              1000
                    );
          }
          componentWillUnmount() {
                    clearInterval(this.timer);
          }
          render() {
                    return (
                              <li>
                                        {" "}
                                        you are on this website :
                                        {this.state.count}
                              </li>
                    );
          }
}

export default Timer;
