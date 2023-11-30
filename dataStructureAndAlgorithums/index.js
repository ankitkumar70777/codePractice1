// calculate sum of n natural numbers

const sumNaturalNum = (N) => { 
    // natural numbers start from 1
    let sum = 0;
    for (let i = 1; i <= N; i++) { 
        console.log('', {i,sum});
         sum = sum + i;
    }
    console.log('result = ',sum);
    return sum;
}

sumNaturalNum(5);
