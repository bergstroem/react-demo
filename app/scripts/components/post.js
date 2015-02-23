
var Post = React.createClass({
	propTypes: {
       title: React.PropTypes.string.isRequired,
       url: React.PropTypes.string.isRequired,
       author: React.PropTypes.string.isRequired
  },
	render: function() {
		return (
			React.createElement('div', { className: 'post' },
				React.createElement('div', null,
					React.createElement('a', {href: this.props.url},
						React.createElement('h1', null, this.props.title)
					),
					React.createElement('p', null, 'Posted by ' + this.props.author)
				)
			)
		);
	}
});
