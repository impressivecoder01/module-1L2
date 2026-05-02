// ? : ternary operator : decision making
// ? : nullish coalescing operator
// ?. optional chaining
// const userAge:number = 21

const biyerBoyse = (age: number) => {
// if(age>= 21){
//     console.log('biye kor')
// }
// else{
//     console.log('pore')
// }
const result = age>= 21? 'done' : 'not yet!!'
console.log(result)

}
biyerBoyse(33)
// const userTheme = undefined;
// const userTheme = null;
const userTheme ='Green Theme';
const selectTheme  = userTheme ?? 'Light theme'
console.log(selectTheme)

const isAuthenticated = null
const resultwithTernary = isAuthenticated ? isAuthenticated : 'Guest'

const resultWithNulish = isAuthenticated ?? 'guest'

console.log({resultWithNulish}, {resultwithTernary})