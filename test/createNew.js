const mongoose = require('../db/mongoose');
const db = mongoose.dbconnect;
const model = mongoose.model;

function newUser(id, name) {
	const user = new model.user({
		_id: id,
		name: name,
	});
	user
		.save()
		.then(result => console.log(result))
		.catch(err => console.error(err));
}

function newPost(id, author, title, content) {
	const post = new model.post({
		_id: id,
		author: author,
		title: title,
		content: content,
	});

	post
		.save()
		.then(result => {
			model.post.find({ _id: id }).populate('author');
			console.log(result);
		})
		.catch(err => console.error(err));
}

function newComment(id, post, author, content) {
	const comment = new model.comment({
		_id: id,
		post: post,
		author: author,
		content: content,
	});

	comment
		.save()
		.then(result => {
			model.comment
				.find({})
				.populate('author')
				.exec();
			console.log(result);
		})
		.catch(err => console.error(err));
}

// //newUser(7, '소영');
// for (let i = 0; i < 50; i++) {
//   newUser(i + 12, '유진영');
//   newPost(i + 1, i + 1, 'title test', 'content test');
//   newComment(i + 1, i + 1, i + 1, 'comment test');
// }

newUser(64, '소영');

//newComment(5, 1, 1, 'comment test');
