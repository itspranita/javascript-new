var vl=0
  function inc(){
    // let vl=0
    let ct=document.getElementById('counter')
    vl++
    ct.textContent=vl

    
  }
  
  
  
  
  
  var vl=0
  function dec(){
    if(vl!=0){
        let ct=document.getElementById('counter')
        vl--
        ct.textContent=vl
    }
    else{
        alert("not less then 0")
      }
  }
   