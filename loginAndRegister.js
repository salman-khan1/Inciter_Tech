function onRegister(e){
    e.preventDefault()
    let emailInput=document.querySelector('#email')
    let passwordInput=document.querySelector('#password')

    let user={
        email:emailInput.value,
        password:passwordInput.value
    }
    let users=localStorage.getItem('users')
    if (users){
        users=JSON.parse(users)
    }else {
        users=[]
    }
    const userExists = users.some(u => u.email === user.email);
    if(!userExists){
        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
            alert('User registered successfully');
        }else{
            alert('User with this email already exists');
        }
        emailInput.value='';
        passwordInput.value='';
    }

function onLogin(e){
    e.preventDefault()
    let emailInput=document.querySelector('#email')
    let passwordInput=document.querySelector('#password')
    let users=localStorage.getItem('users')
    if(users){
        users=JSON.parse(users)
    }else{
        users=[]
    }
    const user=users.find(u=>u.email===emailInput.value && u.password===passwordInput.value)
    if(user){
        alert("Login Successfully")
        window.open("dashboard.html","_blank")
    }else{
        alert('Invalid email or password');
    }
}    