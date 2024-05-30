const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    


    document.addEventListener('DOMContentLoaded', () => {
        const signupForm = document.getElementById("signupForm");
        const loginForm = document.getElementById("loginForm");


  const logem = document.getElementById("login-email");
const logpass = document.getElementById("login-password");


        const newemail= document.getElementById("signup-email");
        const newpass = document.getElementById("signup-password" );
        const newusername = document.getElementById("username");
        const newpasswordconfirm = document.getElementById("signup-confirmpassword");
        // clearing error messaga
        logem.addEventListener('input', function() {

            clearErrorMessage('login-email');
        });
    
        logpass.addEventListener('input', function() {

            clearErrorMessage('login-password');
        });
    
        newemail.addEventListener('input', function() {

            clearErrorMessage('signup-email');
        });
    
        newusername.addEventListener('input', function() {

            clearErrorMessage('username');
        });
    
        newpasswordconfirm.addEventListener('input', function() {

            clearErrorMessage('signup-confirmpassword');
        });
    
       newpass.addEventListener('input', function() {
            clearErrorMessage('signup-password');
        });
        // error clearing function
        function clearErrorMessage(elementId) {
           const ele= document.getElementById(elementId);
           const cerr = ele.parentElement;
           const errele = cerr.querySelector(".error")
           errele.textContent = '';
        }
    //  Handle login form submission
    loginForm.addEventListener('submit', async (event) => {
        
        event.preventDefault();
     
        const emailval = document.getElementById("login-email").value;
        const passwordval = document.getElementById("login-password").value;
       

    
    
        const validateInputslogin = () => {
        
    
            const email = document.getElementById("login-email")
            const password = document.getElementById("login-password")
            
            
          
            
            const setError = (element, message) => {
                const inputControl = element.parentElement;
                const errorDisplay = inputControl.querySelector(".error");
            
                errorDisplay.innerText = message;
                inputControl.classList.add('errorcontrollog');
                inputControl.classList.remove('successcontrollog');
            
            }
            
            const setSuccess = element => {
                const inputControl = element.parentElement;
                const errorDisplay = inputControl.querySelector(".error");
            
                errorDisplay.innerText = '';
                inputControl.classList.add('successcontrollog');
                inputControl.classList.remove('errorcontrollog');
              
               
            };
            
            const isValidEmail = email => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
                console.log("valid")
                const emailvaltrim = document.getElementById("login-email").value.trim();
        const passwordvaltrim = document.getElementById("login-password").value.trim();
               
            
               
                if(emailvaltrim === '') {
                    setError(email, 'Email is required');
                } else if (!isValidEmail(emailvaltrim)) {
                    setError(email, 'Provide a valid email address');
                } else {
                    setSuccess(email);
                }
            
                if(passwordvaltrim === '') {
                    setError(password, 'Password is required');
                } else if (passwordvaltrim.length < 8 ) {
                    setError(password, 'Password must be at least 8 character.')
                } else {
                    setSuccess(password);
                }
            }
        
            
                
            validateInputslogin();
            function helper(){
                const ele =document.getElementsByClassName('errorcontrollog');
                return ele.length?ele:false;
            }
            const test=helper()
            if(test){
                console.log("errors")
            }
            else{
               

        try {
            const response = await fetch('https://ebackend-fle4.onrender.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailval, passwordval })

            });
            

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                
                window.location.href = 'index.html';
            } else {
                alert(data.error);
            }
        }
         catch (error) {
            console.error('Error:', error);
            alert('Login failed');
        }
    }
    })
    
            //handle sinup form submission
signupForm.addEventListener('submit', async (event) => {
           
            event.preventDefault();
    //first client side validation is important so check here is imp
   const validateInputs = () => {
        
    
    
    const username = document.getElementById("username");
    const emailmain = document.getElementById("signup-email");
    const passwordmain = document.getElementById("signup-password" );
    const passwordconfirm = document.getElementById("signup-confirmpassword");
    
    
  
    
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
    
        errorDisplay.innerText = message;
        inputControl.classList.add('errorcontrol');
        inputControl.classList.remove('successcontrol');
    
    }
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
    
        errorDisplay.innerText = '';
        inputControl.classList.add('successcontrol');
        inputControl.classList.remove('errorcontrol');
       
       
    };
    
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
        console.log("valid")
        const usernameValue = username.value.trim();
        const emailValue = emailmain.value.trim();
        const passwordValue = passwordmain.value.trim();
        const password2Value = passwordconfirm.value.trim();
    
        if(usernameValue === '') {
            setError(username, "Username is required");
        } else {
            setSuccess(username);
        }
        if(emailValue === '') {
            setError(emailmain, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(emailmain, 'Provide a valid email address');
        } else {
            setSuccess(emailmain);
        }
    
        if(passwordValue === '') {
            setError(passwordmain, 'Password is required');
        } else if (passwordValue.length < 8 ) {
            setError(passwordmain, 'Password must be at least 8 character.')
        } else {
            setSuccess(passwordmain);
        }
    
        if(password2Value === '') {
            setError(passwordconfirm, 'Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(passwordconfirm, "Passwords doesn't match");
        } else {
            setSuccess(passwordconfirm);
        }
    
    };
    validateInputs();

    //checking whether if there is any error class is present (this will there is any error is there in this)
    function helper(){
        const ele =document.getElementsByClassName('errorcontrol');
        return ele.length?ele:false;
    }


    const test=helper()
    if(test){
        console.log("error during sinup");}
    else{
 //if everything is ok then proceed       
//sent to server here
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const username = document.getElementById("username").value;

        try {
            const response = await fetch('https://ebackend-fle4.onrender.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username,email, password })
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Registration successful!');
                window.location.href = 'index.html';
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed');
        }
    }
    


    
})    
    
    
    
    
    
    
    
    
    
    
    
    })