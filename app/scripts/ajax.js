
var ajax = {
	get: function(path, success, error) {
		var r = new XMLHttpRequest();
		r.open("GET", path, true);
		r.onreadystatechange = function () {
			if (r.readyState === 4) {
				if (r.status === 200) {
					var response = JSON.parse(r.responseText);
					if (success) {
						success(response);
					}
				} else {
					if (error) {
						error();
					}
				}
			}
		};
		r.send();
	}
};

var page;
var baseUrl = 'http://www.reddit.com/r/reactjs.json?limit=4';

var getPosts = function(success) {
	url = baseUrl;
	if (page) {
		url += '&after=' + page;
	}
	ajax.get(url, function(response) {
		var fetchedPosts = [];
		var postsData = response.data.children;
		page = response.data.after;
		for (var postIndex in postsData) {
			var postData = postsData[postIndex].data;
			var post = new PostModel(postData.title, postData.url, postData.author);
			fetchedPosts.push(post);
		}
		success(fetchedPosts);
	}, function() {
		alert('Something went wrong!');
	});
};
