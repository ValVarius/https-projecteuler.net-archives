function rotate(input) {
    
    let arr = []
    
    let len = Object.keys(input).length
    let rotation = input
    for(let i = 0; i < len; i++) {
        
        console.log("prima ",rotation);

        rotation.push(rotation[0])
        rotation.shift();

        console.log("dopo " ,rotation);
        let a = rotation
        arr.push(a)
        // console.log(arr);
        
    }
    console.log(arr[0]);
    // return arr;

}

let a = [9,7,1]
// console.log(rotate(a));
let array = rotate(a)
// console.log(array);
// console.log(Object.keys(a).length);