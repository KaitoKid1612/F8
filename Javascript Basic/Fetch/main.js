var postApi = "https://jsonplaceholder.typicode.com/posts"

fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        var html = htmls.join('')
        var postBlock = document.getElementById('post-block')
        postBlock.innerHTML = html;
    })
    .catch(function(err) {
        console.log('Có lỗi!')
    })