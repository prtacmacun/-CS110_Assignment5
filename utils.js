/* 1. In utils.js write a function matrixProduct(mat1, mat2) that returns 
a new matrix that is the product of mat1 and mat2 matrices. */

function matrixProduct(mat1, mat2){
     let product = [];
    for(let row = 0; row < mat1.length; row++){
       product[row] = [];
        
        for(let col = 0; col < mat1[0].length; col++){
            let element = 0;

            for(let i = 0; i < mat1[0].length; i++){
                element = mat1[row][i] * mat2[i][col];
                
            } 
            product[row][col] = element;

        }
        

    
}

return product;
}



/* 2. In utils.js write a function sumOfMatrices(mat1, mat2) that accepts two 
matrices and returns the sum of those matrices in a new matrix. */

function sumOfMatrices(mat1, mat2){
    
    let sum = [];
    for(let row = 0; row < mat1.length; row++){
        sum[row] = []

        for(let col = 0; col< mat1[0].length; col++){
            sum[row][col] = mat1[row][col] + mat2[row][col];
        }

    }
    return sum;
}

/* 3. In utils.js write a function sumOfEachRow(mat) that accepts a matrix and returns an array 
that contains sum of every row of the matrix for its elements. */

function  sumOfArray(arr){
    let sum = 0;
    for(i=0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;

}


function sumOfEachRow(mat){
    matSum = [];
    for(row=0; row < mat.length; row++){
        matSum[row] = sumOfArray(mat[row]);
    }

    return matSum;
}

/* 4. Write a function named countWords in your utils.js that takes a string and returns the 
number of words in that string. */

function countWords(string){
    let num = 0
    for(i=0; i<string.length; i++){

        if(string[i] === " " && string[i+1] !== ' '){
            num++;
        }

    }

    if(string[0] !== " "){
        num++
    }

    return num;

}

/* 5. Write a function named trim in your utils.js that takes a string and returns a trimmed copy of 
a given string. */

function trim(string){
    let newString = "";

     for(i = 0; i < string.length; i++){

        if(string[i] !== " "){
            newString += string[i];
        }
        else if(string[i] === " " && string[i-1] !== " " && string[i+1] !== " "){
            newString += string[i];
        }
      
     }
     return newString;

}





module.exports =  {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    countWords,
    trim
}