let hey=document.querySelector("body")

let hello = function(hey){
  const foo=hey.innerText
  console.log(foo)
}
hey.addEventListner("click",hello)