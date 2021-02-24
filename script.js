document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);

    document.getElementById("weatherResults").innerHTML = 
    "<h2 style='color: red;'>Sorry, Jeff can't sing \"" + value + "\"! Try a different song!</h>";

});