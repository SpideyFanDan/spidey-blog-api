const PATH = './data.JSON';
const fs = require('fs');

class Post {
	get() {
		return this.readData();
	}
	getIndividualBlog(postId) {
		//get individual blog post
		const posts = this.readData();
		const foundPost = posts.find((post) => post.id == postId);
		return foundPost;
	}
	add(newPost) {
		//add new posts
		const currentPosts = this.readData();
		currentPosts.unshift(newPost);
		this.storeData(currentPosts);
	}
	readData() {
		let rawdata = fs.readFileSync(PATH);
		let posts = JSON.parse(rawdata);
		return posts;
	}
	storeData(rawData) {
		let data = JSON.stringify(rawData);
		fs.writeFileSync(PATH, data);
	}
}
module.exports = Post;
