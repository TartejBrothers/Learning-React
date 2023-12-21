import React, { Component } from "react";
class TrialForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }
  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };
  changeComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
    console.log(this.state.comment);
  };
  changeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
    console.log(this.state.topic);
  };
  submitForm = (event) => {
    alert(
      `${this.state.username} said ${this.state.comment} on the topic ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.changeUsername}
            />
          </div>
          <div>
            <label>Comments</label>
            <br />
            <textarea
              value={this.state.comment}
              onChange={this.changeComment}
            />
          </div>
          <div>
            <label>Topic</label>
            <br />
            <select value={this.state.topic} onChange={this.changeTopic}>
              <option value="HTML">HTML</option>
              <option value="ReactJs">ReactJS</option>
            </select>
          </div>
          <button onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}
export default TrialForm;
