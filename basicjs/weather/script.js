const fetchData = async (cityName)=>{
    const apikey = "3315d2f98b798eb1155145e7a14e9fec"
    const error = document.getElementById("error")
    const output = document.getElementById("output")

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`)
    if(!response.ok){
        error.textContent = "failed to fetch"
    }
    const data = await response.json()
    console.log(data)
    const temp = Math.floor(data.main.temp)
    output.innerHTML=`
    <h1>${data.name}</h1>
    <h1>${temp}gi°C</h1>
    `
}

const callerFun=() =>{
    const searchInput = document.getElementById("searchInput").value.trim();
    const error = document.getElementById("error");
    error.style.color = "red"
    if(!searchInput){
        error.textContent = "enter city name"
        return
    }
    console.log(searchInput)
    fetchData(searchInput)
}