import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Laundry',
          id: Date.now()+3,
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


  handleSubmit = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos : [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }

  handleToggle = (clickedId) => {

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  render() {
    const {todos} = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>
        
        <TodoList todos={todos} handleToggle={this.handleToggle}/>
        <Form  handleSubmit={this.handleSubmit} handleClear={this.handleClear}/>
        
      </div>
    )
  }
}
