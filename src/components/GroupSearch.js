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
      marginBottom: "10px",
      borderRadius: "20px",
      fontSize: 16,
      height: 30,
      width: 500
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