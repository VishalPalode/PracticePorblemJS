//forEach method allow us to run a function for every  element of the array. forEach doesnt retrun anything.

const arr = [0, 1, 2, 3, 4]
arr.forEach((item, index, array)=>{
console.log(item, index, array );
})
/*Array.prototype.forEach = function(callback){
    for ( let index = 0; index<this.length; i++){
        callback(item, index, arr);
    }
}*/