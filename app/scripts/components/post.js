
var Post = React.createClass({
	render: function() {
		return (
			React.createElement('div', { className: 'post' },
				React.createElement('div', null,
					React.createElement('a', {href: this.props.post.url},
						React.createElement('h1', null, this.props.post.title)
					),
					React.createElement('p', null, 'Posted by ' + this.props.post.author)
				)
			)
		);
	}
});

var HelloWorld = React.createClass({
	render: function() {
		return React.createElemet(
			'p',
			null,
			'Hello' + this.props..name + '!'
		);
	}
});
