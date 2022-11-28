function speedMeasurer(){
    //identifies input and out from html
    let input = document.querySelector("#Input")
    let output = document.querySelector("#Output")
    //Decides whether or not to give point
    if (input.value <= 70){
        output.innerHTML = "No points given" 
    }else if (input.value > 70){
        //decide amount of points being distributed 
        let points = (input.value-70)/5
        if (points < 12){
            output.innerHTML = `Points: ${points}`
        }else if (points >= 12){
            output.innerHTML = "License suspended"
        }

    }
}