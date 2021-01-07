import React from "react";

class GroupSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const formStyle = {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      //submissionfield { width: 90px; height: 390px; border: 1px solid #999999; padding: 5px; }
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input style={formStyle} placeholder="Search for Goals..." type="text" value={this.state.value} onInput={this.handleChange}/>
        </label>
      </form>
    );
  }
}

export default GroupSearch;