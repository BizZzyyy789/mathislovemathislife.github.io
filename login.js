 function login()
{
    const email = document.getElementById("L2").value;
    const pass = document.getElementById("L3").value;
        if(email === "leang" && pass == "123")
        {
             location.href="file:///C:/Users/user/Desktop/project1math/homepage.html";
        }
        else {
            alert("Please input again...!");
        }
}
function myFunction() {
    var x = document.getElementById("L3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


