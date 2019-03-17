const alert = document.querySelector(".alert");
alert.style.display = "none";

const alertAfter = seconds => {
	alert.style.display = "block";
};

alertAfter(10);