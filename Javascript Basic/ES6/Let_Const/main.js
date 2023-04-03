// Var/Let, Const: Scope, Hosting
// Const/Var, Let: Assigment

// Code block: if else, loop, {}, ....
// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến: Const
// Khi cần gán lại cho biến dùng: Let

// 2. Template liter String
// 4. Arrow function

// 5. Classes
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const phpCourses = new Course('PHP', 1000);
// const jsCourses = new Course('Javascript', 1200);

// console.log(phpCourses);
// console.log(jsCourses);

// 6. Enhanced object literals 
// 6.1. Định nghĩa key: value cho object
// 6.2. Định nghĩa method cho object
// 6.3. Định nghĩa key cho object dưới dạng biến
// var name = 'Javascript'
// var price = 1000;

// var courses = {
//     name,
//     price,
        // getName() { 
        //     return a;
        // }
// }

// console.log(courses);
// 7. Default parameters values
// Với những giá trị bắt buộc ko cần đặt mặc định còn những trường hợp bắt buộc cần thiết đặt

// 8. Destructuring
// Sử dụng Rest là toán tử còn lại sử dụng với Destructuring
// Sử dụng định nghĩa một tham số của function l
// var array = ['JavaScript', 'PHP', 'Ruby'];
// var [a, ...rest] = array;
// console.log(a)
// console.log(rest)
// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     children: {
//         name: 'ReactJS'
//     }
// }
// var {name: parentName, children:{ name: childName}} = course;
// console.log(parentName)
// console.log(childName)
// function logger(...params) {
//     console.log(params)
// }
// logger(1, 2, 3, 4, 5, 6, 7)

// 9. Spread
// Khi gọi đến hàm chuyền đối số
// var defaultConfig = {
//     api: 'http://viet.com',
//     name: 'Viet',
//     age: 30
// }
// var exercise = {
//     ...defaultConfig,
//     api: 'http://viet.com/post'
// }
// console.log(exercise)

// 10. Tagged templated literals
// function highlight([first, ...strings], ...values) {
//         return values.reduce(
//                 (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//                 [first]
//         )
//         .join('')
// }
// var brand = 'F8';
// var course = 'JavaScript';
// const html = highlight`Hoc lap trinh ${brand} tai ${course}`;
// console.log(html)

// 11. Modules: Import/Export
// Nếu sử dụng Destructuring thì ko cần giá trị Export Default
// import logger from './logger.js'

// console.log(logger)

// 12. Optional Channing (?.)
const obj = {
        name: 'Viet',
        cat: {
                name: 'Meo',
                cat2: {
                        name: 'Meo',
                        cat3: {
                                name: 'Meo3' 
                        } 
                } 
        }

}
if(obj?.cat?.cat2?.cat3) {
        console.log(obj.cat.cat2.cat3.name)
}