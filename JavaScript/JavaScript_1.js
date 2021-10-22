//Color Function
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Colors_String = " is a great color";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Colors_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Colors_String;
            break;
        case "Green":
            Color_Output = "Green" + Colors_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Colors_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Colors_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Colors_String;
            break;
        default:
            Color_Output = "Pleas enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
//getElementsByClassName() Method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has changed!";
}
//Canvas Challenge

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 5, 500, 250);
