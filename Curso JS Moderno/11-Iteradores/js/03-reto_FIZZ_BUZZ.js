

// El ejercicio de FIZZ BUZZZ

// Si un numero es multiplo de 3....3 6 9 12 ... imprime FIZZ

// Si un numero es multiplo de 5...5 10... imprime BUZZ

// Si un numero es multiplo de 3 y 5 (15 30 45) imprime FIZZ BUZZ

// for(let i=1; i<100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} ---->FizzBuzz`);
//         continue;
//     } else if(i % 3 === 0){
//         console.log(`${i} ---->Fizz`);
//     } else if(i % 5 === 0) {
//         console.log(`${i} ---->Buzz`);
//     }
// }

for (let i = 1; i < 100; i++) {
    
    if (i % 5 == 0 && i % 3 == 0 ){
       
        console.log(`${i} -----> FIZZ BUZZ`);
        continue;
   
    } else if (i % 3 == 0) {
        console.log(`${i} -----> FIZZ`);
    } else if (i % 5 == 0 ){
        
        console.log(`${i} -----> BUZZ`);
    
    }
    
}