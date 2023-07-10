import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label>Add Todo: 
          <input 
            type='text' 
            placeholder='Add task here'
            onChange={this.props.handleChange}
          />
        </label>
        <button type='submit' onClick={this.props.handleSubmit}>Add Todo</button>
        <button onClick={this.props.handleClear}>Clear Completed</button>
      </form>
    )
  }
}
