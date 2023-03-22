var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Viet Viet',
    },
    {
        id: 3,
        name: 'Trong Nghia',
    },
    //..
];

var comments = [
    {
        id: 1,
        content: 'Bạn có khỏe không ?',
        user_id: 1,
    },
    {
        id: 2,
        content: 'Mình khỏe bạn ơi.',
        user_id: 2,
    },
    {
        id: 3,
        content: 'Oki bạn nhé',
        user_id: 1,
    },
];

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUserByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var result = users.filter(function(user) {
                return userIds.includes(user.id)
            })
            resolve(result);
        }, 1000);
      });
}

getComments() 
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUserByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            })
    })
    .then(function (data) {  
        var commentBlock = document.getElementById('comment-block')

        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });  
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;
    });
