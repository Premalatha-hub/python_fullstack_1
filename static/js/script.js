let registerForm=document.getElementById("registerForm")
if(registerForm){
    registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;    
        let email=document.getElementyId("email").value;
        let password=document.getElementById("password").value;
        let date=document.getElementyId("date").value;
        let male=document.getElementyId("male").checked;
        let female=document.getElementyId("female").checked;
        let courses=document.querySelector('input[name="courses"]:checked').value;
        let gender=";
        if(male){
            gender="male";
        }else if(female){
            gender="female";
        }
        if(name==" "||email==" "||password==" "||date==" "||gender==" "||course==" "){
            alert("Please fill all the fields");
        }else{
            alert("Registration successful");
        }else{
            alert("Registration successful");
        }
        
        
    }
    )
}