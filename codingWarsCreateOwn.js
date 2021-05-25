const cereal1 = {id:1, name:'Trix', price:3, about:'Yummy'}

const cereal2 = {id:2, name:'Dyno Bites', price:20, about:'Tasty'}

const cereal3 = {id:3, name:'Cinnamon Toast Crunch', price:4, about:'So good'}



const cereals = [cereal1, cereal2, cereal3]



// write a function that takes an Cereal and a id
// and returns a new object with name changed to "changed"

const cerealChanger = (id, change) => {
  return cereals.map (cereal => {
    if (cereal.id !== id){
      return cereal
    } else {
      return {...cereal, name: change}
    }
  })
}
console.log(cerealChanger(1, 'CHANGED'))


// write a function that takes an cerealOBJ and return some
// formatted html (will be a string technically)

const forHtml = cereals.map (cereal => {
  return `<p>${cereal.name} is ${cereal.about}<p>`
})
console.log(forHtml)

// write a function that takes an cerealOBJ and return formatted price with
// .00 

const indPrice = (cereal) => {
  return console.log(`${cereal.price.toFixed(2)}`)
}
indPrice(cereal1)

// create a new array where all of the prices is formatted with .00

const forPrice = () => {
  return cereals.map (cereal => {
    return console.log(`${cereal.price.toFixed(2)}`)
})}
forPrice()

// write a function that takes an array and logs each item in the array
// hint forEach

cereals.forEach (cereal => {
  return console.log(`${cereal.name} is ${cereal.about}. It is $${cereal.price}.`)
})


// use the find method to return the object with id:1

let findCereals = (id) => {
  return cereals.find ((cereal) => {
    return (cereal.id === id)
})
}
console.log(findCereals(2))

// return a new array with all prices greater than 19

let pG19 = cereals.filter (cereal => {
  return cereal > 19
})
console.log(pG19)

// return a new array with a 'about' key where it is a combo of
// name price and about

let combo = cereals.map ((cereal) => {
  return {...cereal, NewAbout: (`${cereal.name} is ${cereal.about}. It cost's $${cereal.price}.`) }
})
console.log(combo)

///CRUD

// don't change cereals array or change objects
// can hard code data (Don't need to get it from the users)


// READ (array of obj to array of html) 

cereals.forEach ((cereal, index) => {
  console.log(`${index + 1}) Name: ${cereal.name}. Price: $${cereal.price}. About: ${cereal.about}.`)
})

// Update (update Cereal) 

const updateCereal = (id, newCereal) => {
  return cereals.map (cereal => {
    if(cereal.id === id){
      return {...cereal, price: newCereal}
    } else {
      return cereal 
    }
  })
}
let cerealEdit = updateCereal(1, 'Honey Combs')
console.log(cerealEdit)

// Remove (delete a taco) 

const cerealDelete = (id) => { 
  return cerealEdit.filter (cereal => {
    return cereal.id !== id
  })
}
let cerealDelete1 = cerealDelete(2)

console.log(cerealDelete1)

// Create (add a Cereal) 

const addCereal = (cereal) => {
  return [...cereals, cereal]
}
let newCereal = addCereal({
  id:(Math.floor(Math.random() * (20 - 10 + 1)) + 10),
  name: 'Coco Puffs', 
  price:(Math.floor(Math.random() * (10 - 1 + 1)) + 1),
  about: 'So Filling!'
})
console.log(newCereal)

// bonus use reduce to return the sum of prices in tacos array
// using newCereal Array
totalSum = newCereal.reduce ((acum, cereal) => {
  return acum + cereal.price
}, 0)
console.log(totalSum)

// bonus do in rails

// bonus create you own
