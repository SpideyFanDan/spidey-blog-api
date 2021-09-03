const PATH = './data.JSON';
const fs = require('fs');

class Post {
	get() {
		return this.readData();
	}
	getIndividualBlog() {
		//get individual blog post
	}
	add() {
		//add new posts
	}
	readData() {
		let rawdata = fs.readFileSync(PATH);
		let posts = JSON.parse(rawdata);
		return posts;
	}
}
module.exports = Post;
