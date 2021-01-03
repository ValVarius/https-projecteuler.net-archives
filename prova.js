// var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);    
// var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);  


const isPentagonal = (num) => {

    let result = (-1 * (-1) + Math.sqrt(1 - (4 * 3 * (-2*num)))) / (2 * 3)
    // let result2 = (-1 * (-1) - Math.sqrt(Math.pow((-1), 2) - (4 * 3 * (-2*num)))) / (2 * 3);
    console.log(result);
    // console.log(result2);    
    return 
    
}

isPentagonal(70);