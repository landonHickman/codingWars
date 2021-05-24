const taco = {id:1, name:'chicken', price:20, about:'Yummy'}
const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}
const taco2 = {id:3, name:'fish', price:30, about:'So good'}

const tacos = [taco, taco1, taco2]

let lb = lineBreak = (obj) => {
  console.log(`-----------------------${obj}-----------------------`)
}

let empty = emptyBreak = () => {
  console.log(' ')
}

// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
empty()
lb("tacoOBJ and a id and returns a new object with name changed to 'changed'")
const nameChanger = (id, newName) => {
  return tacos.map(taco => {
    if(taco.id !== id){
      return taco 
    } else {
      return {...taco, name: newName}
    }
  })
}

let updatedTacos = nameChanger(3, "Changed")
console.log(updatedTacos)
empty()

// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)
lb("formatted html")
const returnHtml = () => {
  return tacos.map (t => {
    return `<div><h1>"${t.name} Taco is $${t.price} and is ${t.about}/</h1></div>`
  })
  
}
console.log(returnHtml())
empty()

// write a function that takes an tacoOBJ and return formatted price with
// .00 
lb(".00")
const return2Decimals =(taco) => {
  return (
    console.log(`$${taco.price.toFixed(2)}`)
  )
}
return2Decimals(taco1)
empty()

// create a new array where all of the prices is formatted with .00
lb("all formatted with .00")
const fixedTacos = () => {
  return tacos.map (taco => {
    return console.log(`$${taco.price.toFixed(2)}`)
  })
}
fixedTacos()
empty()

lb("all formatted with .00")
const fixedTacos1 = () => {
  return tacos.map (taco => {
    return taco.price.toFixed(2)
  })
}
console.log(fixedTacos1())
empty()
// write a function that takes an array and logs each item in the array
// hint forEach
lb("array that logs each item in array")
let logfunction1 = tacos.forEach(t => {
  console.log(`${t.name} Taco. Price $${t.price}. About: ${t.about}.`)
})
empty()

// use the find method to return the object with id:1
lb("find method to return the object with id:1")
const findId = tacos.find((taco) => {
  return taco.id = 1
})
console.log(findId)
empty()

// return a new array with all prices greater than 19
lb("return new array with all prices > 19")
const priceG19 = tacos.filter (t => {
  return t.price > 19
})
console.log(priceG19)
empty()

// return a new array with a 'about' key where it is a combo of
// name price and about
lb("return with 'about' key combo of name price and about")

const allAbout = tacos.map((t) =>{
  return {...t, allAbout: `${t.name} Tacos. $${t.price}. ${t.about}.`}
})
console.log(allAbout)
empty()

///CRUD

// don't change tacos array or change objects
// can hard code data (Don't need to get it from the users)

// READ (array of obj to array of html) 
lb("Read")
const html = () => {
  return tacos.map (t => {
    return(
      `<div><h1>${t.name} Tacos. $${t.price}. About: ${t.about}.</h1></div>`
    )
  })
}
console.log(html())
empty()

// // Update (update a taco) 

lb("Update")
const updatePrice = (id, newPrice) => {
  return tacos.map (taco => {
    if(taco.id === id){
      return {...taco, price: newPrice}
    } else {
      return taco
    }
  })
}
let updatedTacoPrice = updatePrice(2, 10)
console.log(updatedTacoPrice)
empty()

// Remove (delete a taco) 
lb("Remove")
const deleteTaco = (id) => {
  return tacos.filter (taco =>{
    return taco.id !== id
  })
}

let oneRemovedTaco = deleteTaco(2)
console.log(oneRemovedTaco)
empty()

// Create (add a taco) 
lb("Create")
const addTaco = (food) => {
  return [...tacos, food]
} 
let newTaco = addTaco({id:(Math.ceil(Math.random()* (19 - 10 + 1)) + 10), name: 'Steak', price: 11, about: 'From the best farm in town!'})
console.log(newTaco)
empty()

// bonus use reduce to return the sum of prices in tacos array
lb("Use reduce to return the sum of Taco prices in Tacos Array")
const totalSum = tacos.reduce((acum, t) => {
  return acum + t.price
}, 0)
console.log(totalSum)
empty()

// bonus do in rails

// bonus create you own
