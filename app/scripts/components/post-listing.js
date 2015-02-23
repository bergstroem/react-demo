
var PostsListing = React.createClass({
	getInitialState: function() {
		return {
			showAsGrid: false,
			searchString: ''
		};
	},
	render: function() {
		var listingClassName = this.state.showAsGrid ? 'grid' : 'list';
		var listingStyleButtonText = this.state.showAsGrid ? 'Show as list' : 'Show as grid';
		var searchString = this.state.searchString;

		var filteredPosts = this.props.posts.filter(function(post) {
			if (post.title.indexOf(searchString) != -1 ||
					post.url.indexOf(searchString) != -1) {
				return true;
			} else {
				return false;
			}
		});

		var postNodes = filteredPosts.map(function(post) {
			return <Post key={post.url} title={post.title} url={post.url} author={post.author} />;
		});

		return (
			<div className="posts">
				<header>
					<span>Inside of react. This IS a component</span>
					<Search onChange={this.handleSearchChange}/>
					<button onClick={this.toggleListingStyle}>
						{listingStyleButtonText}
					</button>
				</header>
				<div className={listingClassName}>
					{postNodes}
				</div>
			</div>
		);
	},
	toggleListingStyle: function() {
		this.setState({showAsGrid: !this.state.showAsGrid});
	},
	handleSearchChange: function(searchString) {
		this.setState({searchString: searchString});
	},
});
