var courseApi = ''

function start() {
    getCourses(renderCourses);
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {  
            return response.json();
        })
        .then(callback)
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')

    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}