

var Search = React.createClass({
	handleChange: function(e) {
		this.props.onChange(e.target.value);
	},
	render: function() {
		return React.DOM.input({
			type: 'text',
			placeholder: 'Search',
			onChange: this.handleChange
		});
	}
});
