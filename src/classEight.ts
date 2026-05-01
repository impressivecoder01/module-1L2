const A = ['a', 'b', 'c', 'd']
const B = ['e', 'f', 'g', 'h']
A.push(...B)
console.log(A)

const user = {nam: 'r',
    phone: '43424',
}
const info = {hobby: 'outing', color: 'red'}
const userInfo = {...user, ...info}
console.log(userInfo)
// rest operator
const sendInvite = (...friends: string[]) => {
    // console.log(`send invitation to ${friend}, ${friend2} and ${friend3}`)
    friends.forEach((friend: string) => console.log(`send invitation to ${friend}`) )
}
sendInvite('police', 'chor', 'dakat', 'onk')