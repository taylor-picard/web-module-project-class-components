import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo => {
              // eslint-disable-next-line react/jsx-key
              return (<Todo todo={todo}/>)
            })
          }
        </ul>
      </div>
    )
  }
}
