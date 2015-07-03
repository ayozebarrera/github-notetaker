var React = require('react');

var AddNote = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired
	},
	handleSubmit: function(){
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	},
	render: function(){
		return (
			<div className="input-group" style={{marginBottom: 10}}>
				<input type="text" className="form-control" ref="note" placeholder="Añadir nueva nota" />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Enviar</button>
				</span>
			</div>
		)
	}
});

module.exports = AddNote;
