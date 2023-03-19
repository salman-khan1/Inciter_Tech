// function onRegister(e){
//     e.preventDefault()
//     let email=document.querySelector('#email')
//     let pass=document.querySelector('#pass')
//     if(!email.value||!password.value) return
//     console.log(email,pass)
//     let users=[]
//     users.push({
//     email:email.value,
//     password:pass.value
//     })
//  var use=geUsers();    
//  use.push(users)
// }


// function getUsers(){
//     var stringUsers=localStorage.getItem("users")
//     var users=JSON.parse(stringify)
//     if(!users){
//         users=[]
//     }
//     return users;
// }

// function onLogin(e){
//     e.preventDefault()
//     let email=document.querySelector('#email')
//     let password=document.querySelector('#pass')
//     let stringifyUser=localStorage.getItem('user')
//     let users=JSON.parse(stringifyUser)
//     for(let i=0;i<users.length;i++){
//         let item=users[i];
//         if(item.email===email.value && item.password===password.value){
//             alert("Login Successfully")
//             break
//         }  
//         else{
//             alert("Failed")
//             break
//         }
//     }
// }
// function onRegister(e){
//     e.preventDefault()
//     let email=document.querySelector('#email')
//     let password=document.querySelector('#pass')
//     if(!email.value|| !password.value) return;
//     let isAlreadyRegistered=serachUser(email.value,password.value)
//     if(isAlreadyRegistered) return;
//     let obj=[{
//         email:email.value,
//         password:password.value
//     }]
//     let users=getUsers();
//     users.push(obj)
//     localStorage.setItem("users",JSON.stringify(users))
// }


// function serachUser(email,password){
//     if(!email) return;
//     if(!password) return;

//     let isFound=false;
//     let users=getUsers();
//     let user;
//     for(let i=0;i<users.length;i++){
//         let item=users[i]
//         if(item.email==email && item.password===password){
//             isFound=true;
//             user=item;
//         }
//     }
//     if(isFound){
//         return user;
//     }else{
//         return false
//     }
// }
// function getUsers(){
//         var stringUsers=localStorage.getItem("users")
//         var users=JSON.parse(stringUsers)
//         if(!users){
//             users=[]
//         }
//         return users;
//     }

// function onLogin(e){
//     e.preventDefault()
//     let email=document.querySelector('#email')
//     let pass=document.querySelector('#pass')
//     let stringifyUser=localStorage.getItem('users');
//     let users=JSON.parse(stringifyUser)
//     for(let i=0;i<users.length; i++){
//         let item=users[i];
//         if(item.email===email.value && item.pass===pass.value){
//             alert("Login Succesfully")
//             break;
//         }
//         else{
//             alert("Failed")
//             break;
//         }
//     }
// }


const onRegister=(e=> {
  e.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const user = {
    email: emailInput.value,
    password: passwordInput.value
  };

  let users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  const userExists = users.some(u => u.email === user.email);
  if (!userExists) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
  } else {
    alert('User with this email already exists');
  }

  emailInput.value = '';
  passwordInput.value = '';
});



const onLogin=( (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  let users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  const user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
  if (user) {
    alert('Login successful');
  } else {
    alert('Invalid email or password');
  }

  emailInput.value = '';
  passwordInput.value = '';
});
