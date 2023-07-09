 function Playyyys()
{
    const Province = document.getElementById("G2").value;
    if(Province === "Kompong Thom")
    {
         location.href = "";
    }
    else if(Province === "kompong cham") { 
        location.href = "";         
    }
    else if(Province === "kandal") {
        location.href ="file:///C:/Users/user/Desktop/project1math/kandal.html";         
    }
    else if(Province === "Phnom Penh") {
        location.href = "";        
    }
    else if(Province === "preah vihea") {
        location.href = "file:///C:/Users/user/Desktop/project1math/preahvihea.html";          
    }
    else if(Province === "Kompot") {
        location.href = "";          
    }
    else {
        alert("PLease Check Your Province Again....!");
    }
}
