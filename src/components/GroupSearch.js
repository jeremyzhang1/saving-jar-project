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
    const buttonStyle = {
      backgroundColor: "#ffffff",
      borderRadius: "20px"
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input style={buttonStyle} placeholder="Search for Goals..." type="text" value={this.state.value} onInput={this.handleChange}/>
        </label>
      </form>
    );
  }
}

export default GroupSearch;