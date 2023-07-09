function login()
{
    const pass = document.getElementById("L3").value;
    const cpass = document.getElementById("L6").value;
        if( pass == cpass)
        {
             location.href="file:///C:/Users/user/Desktop/project1math/homepage.html";
        }
        else {
            alert("Please input again...!");
        }
}