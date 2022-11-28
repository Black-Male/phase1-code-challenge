function myFunction(){
//here i'm identifying the input and output points in the program 
    let mark = document.querySelector("#StudentMark");
    let output = document.querySelector("#Output")
// below sorts the grades based on the acheivement of the students dividing their scores  and giving grades based of this 
    if (mark.value < 0){
        output.innerHTML = "Not a grade"
    }else if (mark.value > 100){
        output.innerHTML = "not a grade"
    }else if (mark.value > 79){
        output.innerHTML = "A"
    }else if (mark.value > 59){
        output.innerHTML = "B"
    }else if (mark.value > 49){
        output.innerHTML = "C"
    }else if (mark.value >= 40){
        output.innerHTML = "D"
    }else if (mark.value < 40 ){
        output.innerHTML = "E"
    }
}