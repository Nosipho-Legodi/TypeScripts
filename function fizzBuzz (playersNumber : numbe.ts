function fizzBuzz (playersNumber : number): any{

    if ( playersNumber% 5 ==0 && playersNumber% 3 == 0){

        return "Fizz-Buzz"
    }

    else if (playersNumber%3 == 0){

        return "Fizz"
    
    }

    else if (playersNumber% 5 ==0){

        return "Buzz"
    }


    else{

        return playersNumber
    }
}

console.log(fizzBuzz(15))