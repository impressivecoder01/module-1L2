// reference type 
const user: {
    firstName: string
    middleName: string
    lastName: string
} = {
    firstName: 'Rohan',
    middleName: 'Rahman',
    lastName: 'mizan'
}
const user22: {
    organization: 'PHH'  //value => type: Literal types
    firstName: string
    middleName?: string // optional type
    lastName: string
    isMarried: boolean
} = {
    firstName: 'Rohan',
    // middleName: 'Rahman',
    lastName: 'mizan',
    isMarried: false,
    organization: 'PHH'
}
user22.organization = 'PHH'
console.log(user22)

const user2: {
    readonly organization: string  //value => type: Literal types
    firstName: string
    middleName?: string // optional type
    lastName: string
    isMarried: boolean
} = {
    firstName: 'Rohan',
    // middleName: 'Rahman',
    lastName: 'mizan',
    isMarried: false,
    organization: 'PHH'
}
// user2.organization = 'sgsfgsf'
console.log(user2)