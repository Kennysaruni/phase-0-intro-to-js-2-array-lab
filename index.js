// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
  cats.push("Ralph")
  return cats
}
function destructivelyPrependCat(){
  cats.unshift("Bob")
  return cats
}
function destructivelyRemoveLastCat(){
  cats.pop()
  return cats
}
function destructivelyRemoveFirstCat(){
  cats.shift()
  return cats
}
function appendCat(){
  const appCat = [ ...cats,"Broom"];
  return appCat
}
function prependCat(){
  const prepCat = ["Arnold",...cats]
  return prepCat
}
function removeLastCat(){
  const remLCat = cats.slice(0,cats.length - 1);
  return remLCat

}
function removeFirstCat(){
  const relFCat = cats.slice(cats.length - 2);
  return relFCat
}