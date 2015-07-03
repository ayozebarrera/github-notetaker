import React from 'react';

class AddNote extends React.Component{
	handleSubmit(){
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	}
	render(){
		return (
			<div className="input-group" style={{marginBottom: 10}}>
				<input type="text" className="form-control" ref="note" placeholder="Añadir nueva nota" />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Enviar</button>
				</span>
			</div>
		)
	}
}

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default AddNote;
