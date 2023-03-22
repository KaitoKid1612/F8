// Map //
var numbers = [0, 1, 2, 3, 4];

Array.prototype.myMap = function(callback){
    var arrayNew = [];
    var arrayLength = this.length;
    for(var i=0; i<arrayLength; i++){
        var result = callback(this[i], i)
        arrayNew.push(result);
    }
    return arrayNew;
}

console.log(numbers.myMap(function(number, index){
    return number * 2;
}))


// Find //
Array.prototype.myFind = function(cb){
    var arrayLength = this.length;
    for(var i=0; i<arrayLength; i++){
        if(cb(this[i],i)) {
            return this[i];
        }
    }
    return undefined;
}

console.log(numbers.myFind(function(number){
    return number > 0;
}))


// Filter //
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

console.log(words.myFilter(function(word){
    return word == "limit";
}))

// Reduce //
Array.prototype.myReduce = function(callback, result){
    var arrayLength = this.length;
    if(arguments.length<2){
        var i = 1;
        result = this[0];
    }
    for(var i=0; i<arrayLength; i++){
        result = callback(result, this[i], i, this);
    }
    return result;
}

console.log(numbers.myReduce(function(number, index){
    return number + index;
}))

// Every //
Array.prototype.myEvery = function(callback){
    var count = 0;
    var arrayLength = this.length;
    for(var i=0; i<arrayLength; i++){
        if(callback(this[i],[i])){
            count += 1;
        }
        return false;
    }
    return count === this.length;
}

console.log(words.myEvery(function(word){
    return word == 'limit';
}))

// Foreach //
Array.prototype.myForeach = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        };
    }
}

words.myForeach(function(word, index, array){
    console.log(word, index, array)
})

Array.prototype.mySome = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(result) {
                return true;
            }
        }
    }
    return false;
}

var a = numbers.mySome(function(number){
    return number > 4;
})

console.log(a)
