import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class App extends Component {
  state = {
    value: [],
    totalValues: [],
  };
  clickValue = async (e) => {
    const { value } = this.state;
    value.push(e.target.id);
    this.setState({
      totalValues: value,
    });
    console.log(value);
    console.log(value.length);
    console.log(value.join(""));
  };

  render() {
    const { totalValues } = this.state;
    return (
      <div className="container">
        <h1> Give Me Five</h1>
        <div className="prog">
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="grid">
          <button
            id="P"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
            value={this.state.value}
          >
            P
          </button>
          <button
            id="L"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
            value={this.state.value}
          >
            L
          </button>
          <button
            id="P"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            P
          </button>
          <button
            id="T"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            T
          </button>
          <button
            id="S"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            S
          </button>
          <button
            id="A"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            A
          </button>
          <button
            id="C"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            C
          </button>
          <button
            id="E"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            E
          </button>
          <button
            id="H"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            H
          </button>
          <button
            id="D"
            type="button"
            onClick={this.clickValue}
            className="btn btn-outline-danger"
          >
            D
          </button>
        </div>
        <div className="d-flex">
          <div>{totalValues.length <= 5 && totalValues.map((i) => i)}</div>
          <div>{this.state.totalValues.length}</div>
        </div>
      </div>
    );
  }
}
