type User = {
   id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female'
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}

const user1: User ={
    id: 1,
    name: {
        firstName: 'Mr',
        lastName: 'ls'
    },
    gender: 'male',
    contactNo: '34343434',
    address: {
        division:'dhaka',
        city: "madaripur"
    }
}
const user2: User ={
    id: 2,
    name: {
        firstName: 'Mr2',
        lastName: 'ls2'
    },
    gender: 'male',
    contactNo: '343434342',
    address: {
        division:'dhaka2',
        city: "madaripur2"
    }
}

const isAdmin: boolean = true

type Name = string
const myName: Name = 'myName'

//function 
type Addfunction = (num1:number, num2:number)=> number
const add: Addfunction = (num1, num2) => num1 + num2