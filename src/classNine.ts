const user = {
    id: 1122,
    nam: {
        firstName: 'nazmul',
        middelName: 'alom',
        lastName: 'matubbor'
    },
    gender: 'male',
    color: 'red'
}

// console.log(user.nam.firstName)
const {color: myFavouriteColor,nam: {middelName}, nam: {lastName: myLastName}} = user
console.log(myFavouriteColor,middelName, myLastName)
const friend = ['rohim','korim', 'sajjad']
console.log(friend[1])
const [a,b,c] = friend
console.log(a,b,c)