
var posts = [];

var renderPage = function() {
	React.render(
		<PostsListing posts={posts}/>,
		document.getElementById('app')
	);
};

renderPage();

getPosts(function(newPosts) {
	posts = posts.concat(newPosts);
	renderPage();
});

var addButton = document.getElementById('add-button');
addButton.addEventListener('click', function() {
	getPosts(function(newPosts) {
		posts = posts.concat(newPosts);
		renderPage();
	});
});
