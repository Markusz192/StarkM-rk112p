 function pontszam() 
 {
    const jovalasz1 = 'Szabadka';
    const jovalasz2  = 'Ádám';
    const jovalasz3  = '1936';
    var i, jovalaszok = 0;
    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');


for(i = 0; i < q1.length; i++) 
{
    if (q1[i].checked)
    {
    q1 = q1[i].value;
    }
}

for(i = 0; i < q3.length; i++) 
{
  if(q3[i].checked) 
  {
    q3 = q3[i].value;
  }
}

for(i = 0; i < q2.length; i++) 
{
  if(q2[i].checked) 
  {
    q2 = q2[i].value;
  }
}
    
    if (q1==jovalasz1) 
    {
      jovalaszok++;
    }
    if (q2==jovalasz2)
    {
      jovalaszok++;
    }
    if (q3==jovalasz3) 
    {
      jovalaszok++;
    }
    alert(jovalaszok+" pontot értél el!");
 }