document.getElementById('another-page').addEventListener('click',function(){

    const email = document.querySelector('#email');
    const password = document.querySelector('#pass');


    const emailValue = email.value;
    const passwordValue = pass.value;

    if(emailValue == 'sabbir@gmail.com' && passwordValue == "icon24"){
        console.log('you are the real user');
        window.location.href = "page2.html"


    }else{
        console.log("You are not auser")
        alert('Wrong credential')
    }

})
function myFunction(){

    var x = document.getElementById("pass");
    if (x.type === "password"){
        x.type = "text";

    }else{
        x.type = "password";
    }

}

    

