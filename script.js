function submitForm(){
    let Name =document.getElementById('na').value;
    let Number = document.getElementById('nu').value;
    let mail = document.getElementById('ma').value;

    if(Name==""){
        document.getElementById('a1').innerHTML="kindly enter name" 
        return false;   
    }
    else{
        document.getElementById('a1').innerHTML=""
    }
    if(Number==""){
        document.getElementById('a2').innerHTML="kindly enter number"
        return false;
    }
    
    else if(Number==isNaN(Number)){
        document.getElementById('a2').innerHTML="enter number"
        return false;
    }
    else{
        document.getElementById('a2').innerHTML=""
    }
    if(mail==""){
        document.getElementById('a3').innerHTML="kindly enter email"
        return false;
    }
    else{
        document.getElementById('a3').innerHTML=""
    }
    alert("Form submitted");
    return true;
    
}