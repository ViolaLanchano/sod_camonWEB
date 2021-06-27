function myFunction_Hyssop() {
    var popup = document.getElementById("myPopupHyssop");
    popup.classList.toggle("show");
}

function myFunction_Soya() {
    var popup = document.getElementById("myPopupSoya");
    popup.classList.toggle("show");
}

function myFunction_Salt() {
    var popup = document.getElementById("myPopupSalt");
    popup.classList.toggle("show");
}

function myFunction_Himalayansalt() {
    var popup = document.getElementById("myPopup_Himalayansalt");
    popup.classList.toggle("show");
}

function myFunction_Thyme() {
    var popup = document.getElementById("myPopupThyme");
    popup.classList.toggle("show");
}
function myFunction_paprika() {
    var popup = document.getElementById("myPopuppaprika");
    popup.classList.toggle("show");
}
function myFunction_Curry() {
    var popup = document.getElementById("myPopupCurry");
    popup.classList.toggle("show");
}
function myFunction_Horseradish() {
    var popup = document.getElementById("myPopupHorseradish");
    popup.classList.toggle("show");
}
function myFunction_Tabasco() {
    var popup = document.getElementById("myPopupTabasco");
    popup.classList.toggle("show");
}
function myFunction_Chili() {
    var popup = document.getElementById("myPopupChili");
    popup.classList.toggle("show");
}
function myFunction_WhitePepper() {
    var popup = document.getElementById("myPopupWhitePepper");
    popup.classList.toggle("show");
}
function myFunction_BlackPepper() {
    var popup = document.getElementById("myPopupBlackPepper");
    popup.classList.toggle("show");
}
function myFunction_Berbere() {
    var popup = document.getElementById("myPopupBerbere");
    popup.classList.toggle("show");
}
function feedback() {
    if (document.getElementById("userFname").value != "" && document.getElementById("userLname").value != "" && document.getElementById("userEmail").value != "" && document.getElementById("userMessage").value != "") {
        document.getElementById("feedback").innerHTML = "ההודעה נשמרה בהצלחה!";
    }
}    
//function errorFname() {
//    if (document.getElementById("userFname").value == "") {
//        document.getElementById("FirstName").style.border = "3px solid red";
//        document.getElementById("errorFname").innerHTML = "אנא מלא את שמך הפרטי"
//    } 
//        else {
//        document.getElementById("userFname").style.border = "none";
//        document.getElementById("errorFname").innerHTML = ""

//        }
    
//} 