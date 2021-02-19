function compute()
{
    p = document.getElementById("principal").value;
 	r = document.getElementById("rate").value;
	y = document.getElementById("years").value;
 
    i = p*y*(r/100);
	anio = new Date().getFullYear() + parseInt(y);
	 
	if (p < 1) {
		 window.alert("Enter a positive number");
		 document.getElementById("principal").focus();
	 }
	 else{
		result.innerHTML = "If you deposit " + "<mark>" + p + "</mark>" + "," + "</br>" + "at an interest rate of " + "<mark>" + r + "%.</mark>" +  "</br>" + " You will recive an amount of " + "<mark>" +i.toFixed(2) + "</mark>" +  "," + "</br>" + " in the year " + "<mark>" + anio + "</mark>" ;
	 }
}

function muestraPorcentaje(porcentaje)       
{
	var valor = document.getElementById("porcentaje");
	valor.innerHTML = porcentaje + "%";
}
        