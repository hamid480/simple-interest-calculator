function rate(){
  var ratevalue=document.getElementById("interestRate");
  document.getElementById("interestRate").innerHTML=ratevalue.value+"%";
}

function compute(){
  var ratevalue=parseFloat(document.getElementById("interestRate").value);
  var principal=parseFloat(document.getElementById("amount").value);
  var time=parseFloat(document.getElementById("numberOfYears").value);
  var total= principal*(1+((ratevalue)*(time)));
  if(document.getElementById("amount").value==""){
    alert("Please enter the principal amount");}
    if(document.getElementById("amount").value<="0"){
      alert("Please enter positive number");
  }
  var today=new Date();
  var year=today.getFullYear();
  time+=year;
  var sortie="If you deposit ";
  sortie+=principal;
  sortie+=" at an interest rate of ";
  sortie+=ratevalue;
  sortie+="%";
  sortie+=" You will receive an amount of ";
  sortie+=total;
  sortie+=" in the year ";
  sortie+=time;
  document.getElementById("resultat").innerHTML=sortie;
  }
