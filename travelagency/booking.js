
function showPrice() {
  let package = document.getElementById("package").value;
  let price = "";

  if (package === "bali") price = "$799";
  else if (package === "paris") price = "$999";
  else if (package === "swiss") price = "$1199";
  else price = "Please select a package";

  document.getElementById("price").innerText = "Price: " + price;
}

function confirmBooking() {
  let name = document.getElementById("fname").value;
  alert("Thank you, " + name + "! Your booking is confirmed.");
}

