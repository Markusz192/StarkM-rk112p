function vegrehajt() 
{
    let pontszam = 0
    
    let valasztas1 = ""
    let valasztas2= ""
    if (document.getElementById("q1b").checked) {
      valasztas1 = "a";
    }
    else 
    {
      valasztas1 = "b";
    }
    if (document.getElementById("q2a").checked) {
        valasztas2 = "a";
    }
    else
    {
        valasztas2 = "b";
    }
    
    if (valasztas1 == "a") 
    {
      pontszam++;
    }
    if (valasztas2 == "a")
    {
        pontszam++;
    }
    if(pontszam>0)
    {
        document.getElementById("eredmeny").innerHTML = "Pontszám: " + pontszam+ "/2 😊";
    }
    else
    {
        document.getElementById("eredmeny").innerHTML = "Sajnos nem értél el egy pontot sem!😢";
    }

  }

