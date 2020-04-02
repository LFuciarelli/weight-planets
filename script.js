function calculate(){
    var fmass = document.getElementById("txtweight")
    if(fmass.value >= 0){
        var weight = 0
        var fplanet = document.getElementsByName("radplanet")
        var planet = ""
        var res = document.querySelector("div#res")
        var img = document.createElement("img")
        img.setAttribute("img", "planet")
        if(fplanet[0].checked){
            img.setAttribute("src", "mercury.png")
            planet = "Mercury"
            weight = 0.377*fmass.value
            document.body.style.background = "#66749f"
        }else if (fplanet[1].checked){
            img.setAttribute("src", "venus.png")
            planet = "Venus"
            weight = 0.904*fmass.value
            document.body.style.background = "#b79254"
        }else if(fplanet[2].checked){
            img.setAttribute("src", "mars.png")
            planet = "Mars"
            weight = 0.38*fmass.value
            document.body.style.background = "#d58236"
        }else if(fplanet[3].checked){
            img.setAttribute("src", "jupiter.png")
            planet = "Jupiter"
            weight = 2.53*fmass.value
            document.body.style.background = "#e1c8a7"
        }else if(fplanet[4].checked){
            img.setAttribute("src", "saturn.png")
            planet = "Saturn"
            weight = 1.065*fmass.value
            document.body.style.background = "#fece83"
        }else if(fplanet[5].checked){
            img.setAttribute("src", "uranus.png")
            planet = "Uranus"
            weight = 0.886*fmass.value
            document.body.style.background = "#c0e6ea"
        }else{
            img.setAttribute("src", "neptune.png")
            planet = "Neptune"
            weight = 1.14*fmass.value
            document.body.style.background = "#3653c3"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Your weight on ${planet} is ${weight.toFixed(1)}`
        res.appendChild(img)
    }else{
        alert("Enter a valid weight value")
    }
}