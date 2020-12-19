// In the United Kingdom the currency is made up of pound (£) and pence (p). 
// There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?



const findCombinations = (arr,index,num,reducedNum) =>
{ 
    
	if (reducedNum < 0) {
        return arr;
    }
		 

	if (reducedNum === 0) 
	{ 
		for ( let i = 0; i < index; i++) {
                console.log(arr[i]);
        }
        console.log(index + "ARRAY: " +  arr);
        return arr; 
	} 

	let prev = (index === 0) ? 1 : arr[index - 1]; 
	for ( let k = prev; k <= num ; k++) 
	{ 
		arr[index] = k; 

		
		findCombinations(arr, index + 1, num, 
								reducedNum - k, ); 
	} 
} 



	


	let n = 5; 
    let array = [] 
    
    findCombinations(array, 0, n, n);
    
    // let results = findCombinations(array, 0, n, n);

    // console.log(results);


