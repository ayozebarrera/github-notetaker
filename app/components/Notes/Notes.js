var React = require('react');

var Notes = React.createClass({
	render: function(){
		return (
			<div>
				Notas <br />
				Username: {this.props.username} <br />
				Notes: {this.props.notes}
			</div>
		)
	}
});

module.exports = Notes;
