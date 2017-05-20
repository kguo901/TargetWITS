var id = ;

function addToCart() {
    var dropdown = document.getElementById("dropdown");
    id = dropdown.options[dropdown.selectedIndex].text;
}

function highlight(event) {
    document.getElementById("active").id = "";
    event.id = "active";
    alert(id);
    if (document.getElementById(id).parentElement.id == "active") {
        var p = document.getElementById("new");
        var image = document.createElement("img");
        image.src = "http://target.scene7.com/is/image/Target/51183940?wid=360&hei=360&qlt=80&fmt=pjpeg";
        p.appendChild(image);
    }
}