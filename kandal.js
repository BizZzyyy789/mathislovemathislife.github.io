function Leang()
{   
    let f = 172;
    let pi = 3.14;
    let month = document.getElementById("K2").value;
    let day = document.getElementById("K3").value;
    let year = document.getElementById("K4").value;
    let A = document.getElementById("K16");
    let AA = document.getElementById("K17");
    let AAA;
    Number(AAA);
    Number(f);
    Number(month);
    Number(day);
    Number(year);
    Number(pi);
    if(day < 1)
    {
        alert(`Please Input from 1-30`);
    }
    else if(month < 1)
    {
        alert(`Please Input from 1-12`);
    }
   else  if(year < 1)
    {
        alert(`Please Input again....!`);
    }
    if(month == 1)
    {
        AAA = 31;
    }
   else if(month == 3)
    {
        AAA = 31;
    }
   else if(month == 5)
    {
        AAA = 31;
    }
   else if(month == 7)
    {
        AAA = 31;
    }
   else if(month == 8)
    {
        AAA = 31;
    }
   else if(month == 10)
    {
        AAA = 31;
    }
  else  if(month == 12)
    {
        AAA = 31;
    }
    else  if(month == 4)
    {
        AAA = 30;
    }
    else  if(month == 6)
    {
        AAA = 30;
    }
    else  if(month == 9)
    {
        AAA = 30;
    }
    else  if(month == 11)
    {
        AAA = 30;
    }  else  if(month == 2)
    {
        AAA = 29;
    }
    else  if(month == 2 && year%4 == 0)
    {
        AAA = 28;
    }
    if(day>31){
        alert(`Please check Your Day Number!`);
    }
    else if(month > 12){
        alert(`Please check Your Month Number!`);
    }
    else {
    let BB = document.getElementById("K11");
    let Fullday = (month*AAA) - (AAA-day);
    Number(Fullday);
    let long_day = 46680;
    let short_day = 40680;
    Number(long_day);
    Number(short_day);
    let c = (long_day+short_day)/2;
    Number(c);
    let a = long_day - c;
    Number(a);
    if(month == 2 && day > 28 && year%4 == 0){
             A.innerText = `ERROOORRR`;
             BB.style.visibility = "hidden";
             A.style.visibility = "visible";
        }
    else if(month == 2 && day > 29)
        {
            A.innerText = `EORRROOR`;
            BB.style.visibility = "hidden";
            A.style.visibility = "visible";
        }
    else{
        if(day == 0 && month == 0 && year == 0){
            AA.innerText = `Time[00:00:0000];`;
            BB.style.visibility = "hidden";
            AA.style.visibility = "visible";
            
        }
        else{
            if(year%4 == 0 && month == 2)
            {
                f = 173;
            }
        let B = Math.floor(a*(Math.cos(((2*pi)/365)*(Fullday-f)))+c);
        let h,m,s;
        Number(h);
        Number(m);
        Number(s);
        h = Math.floor(B/3600);
        s = Math.floor((B-h*3600)%60);
        m = Math.floor((B-h*3600)/60);
        BB.innerText = `Time : [${h}h : ${m}m : ${s}s]`;
        BB.style.visibility = "visible";
        A.style.visibility = "hidden";
        AA.style.visibility = "hidden";
}    
}
} 
}