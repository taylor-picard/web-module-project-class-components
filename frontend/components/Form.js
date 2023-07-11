import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  
  render() {
    console.log(this.state.input)

    return (
      <form>
        <input 
            type='text' 
            placeholder='Add task here'
            onChange={this.handleChange}
        />
        <button type='submit' onClick={this.handleSubmit}>Add Todo</button>
        <button onClick={this.props.handleClear}>Clear Completed</button>
      </form>
    )
  }
}
