import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
import Inicio from './components/Inicio';
import BasicExample from './components/BasicExample';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }





  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-12" key={i}>
          
           
    <table class="table">
      <tr class="table-info">
      <th scope="col">1</th>
      <th scope="col">{todo.title}</th>
      <th scope="col">{todo.priority}</th>
      <th scope="col">{todo.description}</th>
      <th scope="col">{todo.responsible}</th>
      <th scope="col"><button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>X</button></th>
      </tr> 
</table>                     

        

        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>

              <button
                className="btn btn-danger" href="/Inicio/"    >
                Click
              </button>

        </nav>


        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
            <table class="table table-sm table-dark">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Prioridad</th>
      <th scope="col">Description</th>
      <th scope="col">Responsable</th>
      <th scope="col"></th>
    </tr>
  </thead>
            </table>
              <div className="row">
                {todos}
              </div>

            </div>
          </div>
        </div>
        <BasicExample/>
      </div>
    );
  }
}

export default App;
