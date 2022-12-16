
/*import { 
  getCurrentUser, fetchData, removeCurrentUser, setCurrentUser
} from "./main.js";
*/

import { fetchData, setCurrentUser, setCurrentNote,getCurrentUser, getCurrentNote } from "./fetch.js";


const login = document.getElementById("login-page");
const register = document.getElementById("register-Form");
//const note = document.getElementById("noteForm");

if (login) login.addEventListener("submit", loginpageFunction);
if (register) register.addEventListener("submit", registerpageFunction);
// if (note) note.addEventListener("submit", notepageFunction);



class User1 {
  constructor(username1, password1) {
    this.Username = username1;
    this.Password = password1;
  }

  getUsername() {
    return this.Username;
  }
  setUsername(username1) {
    this.Username = username1;
  }
  getPassword() {
    return this.Password;
  }
  setPassword(password1) {
    this.Password = password1;
  }
}

function loginpageFunction(e) {
  e.preventDefault();
  let username = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;

  const Userl2 = new User1(username, password);
  console.log(Userl2);
  fetchData("/users/login", Userl2, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 

}


function getUsers() {
  fetch("http://localhost:3000/users/")
   .then((res)=> res.json())
   .then((data) => console.log(data))
   .catch((err)=> console.log(err))
 }


function registerpageFunction(e) {
  e.preventDefault();
  let fname = document.getElementById("Firstname").value;
  let lname = document.getElementById("Lastname").value;
  let email = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;

  class User {
    constructor(fname, lname, email, password) {
      this.Firstname = fname;
      this.Lastname = lname;
      this.Username = email;
      this.Password = password;
    }
    getUsername() {
      return this.Username;
    }
    setUsername(email) {
      this.Username =email ;
    }
    getPassword() {
      return this.Password;
    }
    setPassword(password) {
      this.Password = password;
    }
    getFirstname() {
      return this.Firstname;
    }
    setFirstname(fname) {
      this.Firstname =fname ;
    }
    getLastname() {
      return this.Lastname;
    }
    setLastname(lname) {
      this.Lastname = lname;
    }
  }

  const user1 = new User(fname, lname, email, password);
  console.log(user1);

  fetchData("/users/register", user1, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })

}

class User {
  constructor(note) {
    this.notecontent = note;
  }

  getnotecontent() {
    return this.notecontent;
  }
  setnotecontent(note) {
    this.notecontent = note;
  }
}

let user = getCurrentUser();
const note2=document.getElementById("noteForm");
if(note2) note2.addEventListener('submit',funnote)

function funnote(e)
{
  e.preventDefault()
  
  let note1=document.getElementById("notecontent").value;
  const user1=new User(note1);
  console.log(user1);






  user1.userID = user.userID;

    fetchData("/notes/creatingnote", user1 , "POST")

  .then((data) => {

    setCurrentUser(data);

    console.log(data);

   

  })

  .catch((err) =>{

    let p = document.querySelector('.error');

    p.innerHTML = err.message;

  })

  window.location.reload();

}


// const usersBtn=document.getElementById("users-btn");

// if(usersBtn)usersBtn.addEventListener('click',getUsers);




// const notesBtn=document.getElementById("notes-btn");
// if(notesBtn)notesBtn.addEventListener('click',getNotes);


if(user && note2) getNotes();


function getNotes(){
  let note1= document.getElementById("notecontent");
  fetchData("/notes/getnote",user,"POST")
  .then((data) => {
    console.log(data);
 for(let i=0;i<data.length;i++){
 note1.value='\n'+data[i].notecontent
 }

    })
     // .catch((err)=>console.log(`Error! ${err}`));

// window.location.href="note.html";
 }
  

  