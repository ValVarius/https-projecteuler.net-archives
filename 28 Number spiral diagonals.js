{/* <p>Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:</p>
<p class="monospace center"><span class="red"><b>21</b></span> 22 23 24 <span class="red"><b>25</b></span><br />
20  <span class="red"><b>7</b></span>  8  <span class="red"><b>9</b></span> 10<br />
19  6  <span class="red"><b>1</b></span>  2 11<br />
18  <span class="red"><b>5</b></span>  4  <span class="red"><b>3</b></span> 12<br /><span class="red"><b>17</b></span> 16 15 14 <span class="red"><b>13</b></span></p>
<p>It can be verified that the sum of the numbers on the diagonals is 101.</p>
<p>What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?</p> */}

let x = 1;
let addition = 2
let sum = x;


for (let i = 1; i < (1001*1001); i=x) {
    
    for (let y = 1; y <= 4; y++) {
        
        console.log("addition: ", addition);
        console.log("x: " , x);
        x = (x + addition)
        console.log("nuova x: " , x);
        sum+= x;
        
        
    }

    addition = addition + 2;
    
}


console.log(sum);