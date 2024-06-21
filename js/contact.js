function checkStatus(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let messageMes = document.getElementById("message");
    let button = document.getElementById("sumbit");
    let num = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < num.length; i++) {
        if(firstName.includes(num[i]) || lastName.includes(num[i])){
           messageMes.textContent = "You cannot use number as a  name";
           messageMes.style.color = "red";
        }

      
    }


}