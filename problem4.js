//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let email = "faheem@gmail.com"

let password = "987654"

let reg_email = "faheem@gmail.com"
let reg_password = "987654"

if(reg_email==email){

  if (reg_password==password){
     
   console.log("Login suvessfull") 
     
  }else {console.log("incorrect password")
        }        
}else {console.log("wrong email")}
