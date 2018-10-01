import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*import Navigation from './components/Navigation';*/
import TodoForm from './components/TodoForm';
import {todos} from './todos.json';
console.log(todos);

class App extends Component {
  constructor (){
    super();
    this.state={
      todos
     
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);

  }

handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

removeTodo(index){
  console.log(index);
  if (window.confirm('ESTAS SEGURO DE  QUERERLO ELIMINARLO')){

    this.setState({
    todos: this.state.todos.filter((e, i) =>{
      return i !== index
    })
  })
  }
}
  
render() {
    
const todos=this.state.todos.map((todo, i) => {
      return(
        
      
        <div className='col-md-4' Key={i} >

        <div className='card mt-4'>
        <div className='card-header'>
        <h3>{todo.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
          {todo.priority}
        </span>

        </div>
        <div className='card-body'>
          <p>{todo.description}</p>
          <p>{todo.responsible}</p>
        </div>
          <div className="card-footer">
          <button type="button" class="btn btn-primary" onClick={this.removeTodo.bind(this, i)}> Delete</button>

          </div>
        </div>


        </div>


      
        )

        })
 

    return (
      <div className="App">
       
          
      <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white">
       Task
       <span className="badge badge-pill badge-light ml-2">
       {this.state.todos.lenght}
       

       </span>  
     
      </a>
      </nav>
            
            <div className="container">
            <div className="row mt-4">
            {todos}
            </div>

            </div>
          <div className="col md-5">
          <img src={logo} className="App-logo" alt="logo" />
         <TodoForm onAddTodo={this.handleAddTodo}/>
         <p className="App-intro">
           tigrezhito.
           </p>
        </div>
        
        
      </div>
    );
  }
}

export default App;
