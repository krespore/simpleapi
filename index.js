var unirest = require('unirest')

function printListOfPosts(){
  console.log("Response for all Posts:")
	unirest.get('https://jsonplaceholder.typicode.com/posts')
	.end(function(response){
  	console.log(response.body)
	})
}

function printSpecificPost(id){
  console.log("Response for Post with ID - " + id + ": ")
  unirest.get('https://jsonplaceholder.typicode.com/posts/' + id)
  .end(function(response){
    console.log(response.body)
  })
}

function getCommentsForPost(id){
  console.log("Response for comments associated with Post with ID - " + id + ": ")
  unirest.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
  .end(function(response){
    console.log(response.body)
  })
}

getCommentsForPost(2)