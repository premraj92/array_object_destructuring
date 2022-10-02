const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6]

// If you wanna move the values of the above array to local variables as shown below you have to DO the BELOW ASSIGNMENT Expression `N - no of times if the LENGTH of the ARRAY is N` here for example 6 times with alphabets in real world the requirement may be much larger
// so this operation is tedious, verbose & error prone
// const a = alphabets[0]
// const b = alphabets[1]






// To SOLVE this PROBLEM - ES6 introduced ARRAY & OBJECT DESTRUCTURING
// ARRAY DESTRUCTURING

// you have to provide the array or object you wanna destructure on the right side of the expression/equal sign
// on the left side you give a series of variable names seperated by commas inside []
// now when you destructure Arrays, the mapping between the elements inside the array & the variables on the left happens simply based on position/index
// i.e. first element in the array is mapped to the first variable name on the left & second element to second variable so on & so forth as shown below
const [a, b] = alphabets

console.log(a)
console.log(b)


// now what if you wanna omit a few values from destrcuturing - you just ADD EMPTY Comma Seperators like below
const [aa, , cc] = alphabets
console.log(aa)
console.log(cc)

// for each empty comma you add it will omit one value in that position
const [, , , ,eee, fff] = alphabets
console.log(eee)
console.log(fff)




// but what if you wanna destructure the first two array elements to the first two variables BUT THEN DESTRUCTURE ALL the REMAINING elements of the array to the next variable

const [aaaa, bbbb, ...rest] = alphabets

console.log(aaaa)
console.log(bbbb)
console.log(rest)







// what if you wanna combine the two arrays above alphabets & arrays

// without destrcuturing

// Way One
const comboOne = []

for (let i=0; i < (alphabets.length); i++) {
    comboOne.push(alphabets[i])
}
for(let i=0; i < numbers.length; i++) {
    comboOne.push(numbers[i])
}

console.log(comboOne)

// Way Two
const comboTwo = []

alphabets.forEach(item => comboTwo.push(item))
numbers.forEach(item => comboTwo.push(item))

console.log(comboTwo)


// Way Three
const comboThree = alphabets.concat(numbers)
console.log(comboThree)



// NOW USING DESTRCUTURING
const comboFour = [...alphabets, ...numbers]
console.log(comboFour)

// only the third way using concat comes close to the Destructuring syntax, but destructring is even more flexible than shown above
const symbols = ['!', '@', '#', '$', '%', '^']

// see the below case you have combined three arrays & inserted a couple of random values in between these
const comboFive = [...alphabets, 'Insert 1', 'Insert 2', 3, true , ...numbers, ...symbols]
console.log(comboFive)





// Using ARRAY DESTRUCTURING with functions
// a real world example of Array Destructuring is when we return multiple values from a function
function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

// executing above func without Destructuring
const sumAndMultipliedOne = sumAndMultiply(2, 3)
console.log(sumAndMultipliedOne)

// with destrucuring
// another benefit when using this destrcuturing syntax is assigning default Values to these variables so that for some reason you don't receive a return value from function for that value like divisionVal you will still have a value
// This may not look that useful with this simple task but imagine the scenario where a HTTP CALL is supposed to return multiple values in an Array & its very much possible some of those values may not be returned from server for any number of reasons
// so this will act like default parameters of functions but instead of handling inputs here we are handling return values from some function
const [sumVal , multiplyVal, divisionVal = 'No Division Performed'] = sumAndMultiply(2, 3)
console.log(sumVal)
console.log(multiplyVal)
console.log(divisionVal)


// VARIABLE SWAPPINg with ARRAY DESTRUCTURING

let one = 'foo!'
let two = 'bars'

console.log(one);
console.log(two);



// // If you wanna swap the value between these 2 variables - its like this
// let temp = one
// one = two;
// two = temp

// BUT using ARRAY DESTRUCTURING its very simple

[one , two] = [two, one] // this is array destructuring - but this swap pattern not very useful in practice 

console.log(one);
console.log(two)








// // OBJECT DESTRUCTURING - Destructuring as a concept is definitely useful with Arrays but its Even More Powerful when working with Objects

const personOne = {
    name: 'Franklin',
    age: 100,
    address: {
        city: 'Masachuchets',
        state: 'New York'
    }
}

const personTwo = {
    name: 'Theodore',
    age: 150,
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    favoriteFruitTwo: 'Jackfruit'
}

// basic object destructuring is similar to array destructuring except for couple of syntactic differences
    // instead of [] - we use {} to group together variable names to destructure into &&
    // instead of using position to identfy the array elements here we use property names i.e. the variable name on the left side should be same as the actual property name of the object
    // of course its possible to use aliasing if we wanna use different variable name as shown below with firstName in place of name

    const {name: firstName, age, favoriteFruit = 'Watermelon'} = personOne
    console.log(firstName)
    console.log(age)
    console.log(favoriteFruit)


    // Example two - containing a nested Object destructuring
    const {name: name2, age: age2 , favoriteFruitTwo = 'Watermelon', address:{ city: cityAlias } } = personTwo

    console.log(name2)
    console.log(age2)
    console.log(favoriteFruitTwo)
    console.log(cityAlias)



    // Example three - Object Destructuring with Rest Params
    const {name: name3, ...rest2} = personTwo
    console.log(name3)
    console.log(rest2)




    // Example four - combining multiple objects
    const personThree = {
        name: 'Raj',
        age: 30,
        favoriteFruit: 'Mango'
    }

    // here if the second object has any property names that are same as first Obj it overrides the first Object property value & all other unique prop names are merged
    const personFour = {...personOne, ...personThree}

    console.log(personFour)




    // Example FIVE - another Very important use case of Object Destructuring that is widely used is Destructuring objects inside function parameters
    // If we just wanna access a couple of values from a big object without destructuring it looks like these
    function logUser(person) {
        console.log(`Person Name is ${person.name} && their age is ${person.age} && their favorite fruit of choice is ${favoriteFruit}`)
    }

    logUser(personOne)


    // logUser function logic with Destructuring
    function logUserTwo({name, age, favoriteFruitTwo = 'Banana'}) {
        console.log(`Person Name is ${name} && their age is ${age} && their favorite fruit of choice is ${favoriteFruitTwo}`)
    }

    logUserTwo(personTwo)


    // Example 6 - we can even use this object destrcturing with loops
    const users = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
    ]

    // here we use obj destructuring to read only Id from a list of objects
    const idsList = []
    for (const {id} of users) {
        console.log(id)
        idsList.push(id)
    }

    console.log(idsList)



    // ONE LAST THING about OBJECT DESTRUCTURING - how YOU CAN DESTRUCTURE DYANMIC PROPERIES inside an OBJECT

    getRandomPropName = () => Math.floor(Math.random * 10 + 1)

    const rando = getRandomPropName()

    const obj2 = {
        [rando]: '23',
        name: 'Random Employee'
    }

    // now in the above object the property rando is a dynamic value & we have to use the below syntax to read that prop from the object
    // this is just like when you access an Object Literal with [] notation instead of .notation, because you should use a variable as prop name - same here 
    const { [rando]: ourRandomProp } = obj2

    console.log(ourRandomProp)