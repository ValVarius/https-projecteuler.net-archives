let n = 3; 
    let array = [] 
    
    

const findCombinations = (arr,index,num,reducedNum) =>
{ 
    let res = []
    
	if (reducedNum < 0) {
        return res;
    }
		 

	if (reducedNum === 0) 
	{ 
		for ( let i = 0; i < index; i++) {
                console.log(arr[i]);
                res.push(arr[i])
        }
        // console.log(index + "ARRAY: " +  arr);
        return res; 
	} 

	let prev = (index === 0) ? 1 : arr[index - 1]; 
	for ( let k = prev; k <= num ; k++) 
	{ 
		arr[index] = k; 

		// here we should store the results somehow...
		res.push([findCombinations(arr, index + 1, num, reducedNum - k, )])
    } 
    
    return res;
} 



	
let results = findCombinations(array, 0, n, n);

console.log(results[0][0][0][0][0]);

	
    
    // let results = findCombinations(array, 0, n, n);

    // console.log(results);


