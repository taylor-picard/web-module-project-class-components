import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Laundry',
          id: Date.now(),
          completed: false
        },
        {
          name: 'Groceries',
          id: Date.now()+1,
          completed: false
        },
        {
          name: 'Dinner',
          id: Date.now()+2,
          completed: false
        }
      ]
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
    this.setState({todo : e.target.value});
  }


  render() {
    const {todos} = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map(todo => {
              return (<li key={todo.id}>{todo.name} {todo.completed?<span>✅</span> : <span></span>}</li>)
            })
          }
        </ul>
        <TodoList />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Todo />
      </div>
    )
  }
}
