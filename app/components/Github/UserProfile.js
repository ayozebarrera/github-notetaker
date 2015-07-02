var React = require('react');

var UserProfiles = React.createClass({
	render: function(){
		return (
			<div>
				Perfil de Usuario <br />
				Username: {this.props.username} <br />
				Bio: {this.props.bio}
			</div>
		)
	}
});

module.exports = UserProfiles;
