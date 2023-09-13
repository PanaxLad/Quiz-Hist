var imperalismo = "questions1.json";
var reinado = "questions2.json";

document.getElementById("button-1").addEventListener("click", function() {
    jsonFile = imperalismo;
    console.log("jsonFile changed to questions1.json");
});

document.getElementById("button-2").addEventListener("click", function() {
    jsonFile = reinado;
    console.log("jsonFile changed to questions2.json");
});

localStorage.setItem('questoes', jsonFile);
