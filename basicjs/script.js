console.log(window.document.body)
// const main = document.getElementById('main')
//main.style.background = "red"
//console.log(main)
// const container = document.getElementsByClassName("container")
// console.log(container)
//container[0].style.background = "red"
//container[1].style.background = "Blue"
// const elementExe = document.getElementsByTagName("h1")
// elementExe[0].style.background="red"
// const container = document.querySelectorAll(".container")
// console.log(container)
// container.forEach((element)=>{
//     element.style.background = "red"
// })
// const btn = document.querySelectorAll("button")
// btn.forEach((element)=>{
//     element.style.backgroundColor = "orange"
// })
// const textvisible = document.getElementById("textvisible");
// textvisible.textContent = "this is visible content"

// const main = document.querySelector("#main1");
// main1.innerHTML = '<h1>this is a content</h1>'
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsam expedita eaque explicabo consequatur exercitationem iusto itaque. Atque id modi deleniti, labore corrupti aliquid dignissimos blanditiis quo consequuntur distinctio ullam!</p>
//     <img src="../pexels-muffin-1629998.jpg" alt=""></img>
// const mainDiv = document.getElementById("mainDiv")
// const card = document.createElement("div")
// card.innerHTML = '<h1>this is the append text</h1>'
// mainDiv.appendChild(card)
// const linkPage = document.getElementById("linkPage")
// linkPage.setAttribute("href","https://www.flipkart.com")
const alertBtn = document.getElementById("alert");
alertBtn.addEventListener("click",()=>{
    const name = "eve"
    alert(`hello ${name}`)
})