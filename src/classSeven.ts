function add(num1:number,num2:number): number{
    return num1 + num2
}

const adding = (num1:number, num2:number): number => {
    return num1 + num2
}

// object => function => method
const poorUser = {
    name: 'r',
    balance: 0,
    addBalance(value:number): number{
        return this.balance + value
    }
}
// poorUser.addBalance(44)
console.log(poorUser.addBalance(55))

const arr: number[] = [3,4,5]
const sqrArr = arr.map((e:number): number => e*e)
console.log(sqrArr)