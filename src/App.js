import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import data from "./data";

export default class App extends Component {
  state = {
    data: [],
    value: "",
    totalValues: [],
    tasks: [],
    renderArray: [],
  };
  clickValue = async (e) => {
    const { value } = this.state;
    let str = value + e.target.id;
    this.setState({
      value: str,
    });
    if (value.length === 4) {
      let { totalValues } = this.state;
      totalValues.push({ str });
      this.state.renderArray.filter((item) => {
        if (item.name === str) {
          return (item.isActive = true);
        }
      });
      this.setState({
        totalValues: totalValues,
        value: "",
      });
    }
  };

  componentDidMount = async () => {
    let redData = data[0].tasks;
    redData.map((red) => {
      return { ...red, isActive: false };
    });
    await this.setState({
      data: data[0].alphabets,
      tasks: data[0].tasks,
      renderArray: redData,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <h1> Give Me Five</h1>
        <div className="prog">
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <input className="input" type="text" value={value}></input>
        </div>
        <div className="grid">
          {this.state.data.map((item, i) => {
            return (
              <button
                key={i}
                id={item.id}
                type="button"
                onClick={this.clickValue}
                className="btn btn-outline-danger"
              >
                {item.id}
              </button>
            );
          })}
        </div>
        <div className="d-flex">
          <div>
            <ul>
              {" "}
              {this.state.renderArray.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="lists col-sm-12">
                      <div className="item-name col-sm-8">{item.name}</div>
                      <div
                        className="item-length col-sm-4"
                        style={{
                          backgroundColor:
                            item.isActive === true ? "green" : "red",
                        }}
                      >
                        {item.name.length}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
