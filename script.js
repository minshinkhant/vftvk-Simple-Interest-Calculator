//computing the year and interest
function compute()
{   
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal.value * years * rate) /100
    var year = new Date().getFullYear()+parseInt(years);
    validateAmount(principal, rate, interest, year-1);
}

//update the rate text with the button sliding
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal + "%";
}

//show the result text with the compute value
function resultText(principal, rate, interest, year)
{
    var deposit = "If you deposit <mark>" + principal + "</mark>,";
    var interestRate = "at an interest rate of <mark>" + rate +"%</mark>.";
    var amount = "You will receive an amount of <mark>" + interest + "</mark>,";
    var yearAdd = "in the year <mark>" + year + "</mark>.";
    document.getElementById("result").innerHTML = "<br/>" + deposit + "<br/>"
    + interestRate +"<br/>" + amount + "<br/>" + yearAdd;
}

//validate the input of Amount
function validateAmount(principal, rate, interest, year)
{
  if (principal.value <= 0){
    alert("Enter the positive number for Amount");
    principal.focus();
    return false;
  }
    resultText(principal.value, rate, interest, year);
}
