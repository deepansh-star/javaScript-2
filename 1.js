const alluser = [
    "Rahul",
    "Sonia",
    "Kaiash",
    "Gopal",
    "Sahil",
    "Sachin",
    "Vinay",
] ;

function validUser (user) {
    if (alluser.includes(user)) {
        console.log(`Yes, ${user} Is A Valid User`) ;
    } else {
        console.log(`No, ${user} Is Not A Valid User`) ;
    }
}

validUser("AjjuBhai");
validUser("Sachin") ;





