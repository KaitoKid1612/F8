function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

var Student = new Student('Viet', 'Le')

console.log(Student.firstName);
console.log(Student.lastName);
console.log(Student.getFullName());


function getNextYear(date) {
    var date = new Date();
    date = date.getFullYear() + 1
    return date;
}

console.log(getNextYear());

function getRandomItem(arr) {
    return arr[Math.floor(Math.random()* arr.length)];
}

function run(a) {
    // 
    if(a%15==0){
        return 3;
    }
    if(a%3==0) {
        return 1;
    } else if(a%5==0) {
        return 2;
    } 

}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

var date = 3;

switch(date) {
    case 2:
        console.log('Hôm nay là thứ hai');
    break;
    case 3:
        console.log('Hôm nay là thứ ba');
    break;
    case 4:
        console.log('Hôm nay là thứ tư');
    break;
    case 5:
        console.log('Hôm nay là thứ năm');
    break;
    default:

}

// Làm bài
function getCanVoteMessage(age) {
    return age = age>=18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

// for(var i=1;i<=10;i++) {
//     console.log(`${i}`)
// }

/* 2. Vòng lặp Loop: For

function getRandNumbers (min,max,length){
    var arr =[];
        for(var i = 1 ; i<= length ; i++){
            arr[i] = Math.random() * (max - min) + min + 1 ;
        }
        return arr;
    }
       
console.log(getRandNumbers(1,10,4));

function getTotal(arr) {
    var Sum = 0;
    for(var i=0; i<arr.length; i++){
        Sum += arr[i];
    }
    return Sum;
}

console.log(getTotal([1,2,3]))


var oders = [
    {
        name: 'Khoa học Java Script',
        price: 200000
    },
    {
        name: 'Khoa học Java',
        price: 250000
    },
    {
        name: 'Khoa học Front end',
        price: 300000
    }
]


var odersLength = oders.length;

function getTotal(){
    var sum = 0;
    for(var i=0; i<odersLength; i++){
        sum += oders[i].price;
    }
    return sum;
}

console.log(getTotal());

*/

// function run(object) {
//     var result = [];
//     for(var key in object){
//         result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }

//     return result;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// Làm việc với mảng : Array Method
// CÁC HÀM GIÚP LÀM VIỆC VỚI MẢNG NGẮN NGỌN HƠN
// NOTE: Các hàm dưới đây đều có thể thực hiện bằng vòng lặp. và tham số truyền vào phải là một function, nếu không truyền vào 1 function sẽ gây ra lỗi.
// - every: dùng để kiểm tra tất cả các phần tử trong mảng cần cùng thõa mãn một điều kiện nào đó, kiểu dữ liệu trả về là boolean

// - some: ngược lại với every, chỉ cần tìm thấy điều kiện thõa thì sẽ trả về true. Kiểu dữ liệu trả về vẫn là boolean
// **Hiểu đơn giản là evey là toán tử &&, còn some là toán tử ||

// - find : dùng để tìm kiếm giá trị của key cần tìm, nhưng sẽ chỉ tìm thấy được và trả về một phần tử tìm thấy.
// - filter: giống với find cũng là tìm kiếm nhưng sẽ tìm kiếm nhiều hơn là 1 phần tử, sẽ trả về hết tất cả các phần tử tìm kiếm được, kiểu trả về của nó là một mảng
// - map: dùng để thêm hoặc sửa lại các phần tử trong object của một mảng theo cách mong muốn
// reduce: dùng để lưu trữ biến tích trữ, thay vì dùng loop để tính giá trị cộng dồn từ các phần tử trong mảng thì reduce sẽ giúp chúng ta việc đó.
// courses = [
//     {
//       id :0,
//       name: "html",
//       coin:200
//     },
//     {
//         id :1,
//         name: "php",
//         coin:0
//     },
//     {
//         id :2,
//         name: "java",
//         coin:300
//     },
//     {
//         id :1,
//         name: "html",
//         coin:200
//     },
//     {
//         id :1,
//         name: "css",
//         coin:300
//     },
// ]

// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// Flat làm phẳng mảng 

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(watchList){
    var findDirector = watchList.filter(function(director){
        return director.Director === 'Christopher Nolan';
    })
    var avrIMDB = findDirector.reduce(function(IMDB, movieNolan){
        return IMDB + Number(movieNolan.imdbRating); 
    }, 0)
    return avrIMDB/findDirector.length;
  }

  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
  // Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

// Object.prototype.arrToObj = function(callback, result) {
//     for(let i = 0; i < this.length; i++){
//         result = callback(result, this[i], i, this);
//     }
//     console.log(result)
// }

function arrToObj(arr){
    return arr.reduce(function(newObject, value){
        newObject[value[0]] = value[1];
        return newObject;
    }, {})
}


console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


Array.prototype.myMap = function(cb) {
    var arrayOutput = [];
    var arrayLength = this.length;
    for(var i=0; i<arrayLength; i++) {
        var result = cb(this[i], i);
        arrayOutput.push(result);
    }
    return arrayOutput;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]

