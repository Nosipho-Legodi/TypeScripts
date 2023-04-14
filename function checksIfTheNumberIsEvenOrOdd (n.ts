function checksIfTheNumberIsEvenOrOdd (numberEntered : number): string{

    if (numberEntered% 2 == 0) {
        return "even"

    }

    else{
        return "odd"
    }


}

checksIfTheNumberIsEvenOrOdd(2)
console.log(`${checksIfTheNumberIsEvenOrOdd}`)

console.log(checksIfTheNumberIsEvenOrOdd(2))
