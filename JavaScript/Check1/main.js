let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓

function isEven() {
    for(let i =0; i < numbers.length; i++){
            if(numbers[i]%2==0){
                let num = numbers[i];
                console.log(num + 'は偶数です');/*numに、偶数のiが蓄積されていってほしい*/  
            }else {
                ;
            }
            
        } 
        // console.log(num + 'は偶数です');
}

isEven();