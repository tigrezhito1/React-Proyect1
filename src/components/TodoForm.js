import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(){
		super();
		this.state={
			title:"",
			responsible:"",
			description:"",
			priority:"low",
		};
		this.handleInput=this.handleInput.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);

	}
	handleInput(e){ 
	// console.log(e.target.value, e.target.name);
	const {value, name} = e.target;
	this.setState({
		[name]:value

	})

	console.log('estadosss', this.state);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddTodo(this.state);
		console.log(this.state);
		console.log('envindo... los datos');
	}
	render() {
    return (

    	<div className="card ">
    	<form className="card-body" onSubmit={this.handleSubmit}>
    		<div className="form-group">
    		<input
    		type="text"
    		name="title"
    		onChange={this.handleInput}
    		className="form-control"
    		Placeholder="Title"/>
    		</div>

    		<div className="form-group">
    		<input
    		type="text"
    		name="responsible"
    		className="form-control"
    		placeholder="Responsible"
    		onChange={this.handleInput}/>
    		</div>

    		<div className="form-group">
    		<input
    		type="text"
    		name="description"
    		className="form-control"
    		Placeholder='Description'
    		onChange={this.handleInput}/>
    		</div>

    		<div className="form-group">
    		<select 
    			name="priority"
    			className="form-control"
    			onChange={this.handleInput}>
    			<option>Low</option>
    			<option>Mediun</option>
    			<option>Hight</option>
    		</select>
    		</div>
    		<button type="submit" className="btn btn-primary">Guardar</button>


		</form>
    	<nav className="navbar navbar-dark bg-dark">
    	<a href="" className="text-white">
    	TIGREZHITO XD
    	</a>
    	</nav>
    	

     	</div>
    );
  }


	}

	export default TodoForm;