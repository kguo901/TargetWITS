

function addToCart() {
    var dropdown = document.getElementById("dropdown");
    id = dropdown.options[dropdown.selectedIndex].text;
}

function highlight(event) {
    document.getElementById("active").id = "";
    event.id = "active";
}