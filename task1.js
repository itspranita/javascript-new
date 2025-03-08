var count=0
function inp(){
    if (count<=4){
        let inp=document.createElement("input")
        let body=document.body
        body.append(inp)
        count++
    }
    else{
        alert("no more attemp")
    }
}



