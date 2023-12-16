
const setApp = document.querySelector("#setApp");
const deltApp = document.querySelector("#deltApp");

setApp.addEventListener("click", function () {
    const giveAppName = prompt("Enter Your App Name");
    //console.log("giveAppName=", giveAppName);

    if (giveAppName != null) {
        localStorage.setItem("myAppName", giveAppName);

        //Retrieve from Local Storage
        const savedName = localStorage.getItem("myAppName");
        //console.log(savedName);
        document.querySelector("#myAppTitle").textContent = savedName;
    }
});

if (localStorage.getItem("myAppName") != null && localStorage.getItem("myAppName").trim() != "") {
    document.querySelector("#myAppTitle").textContent = localStorage.getItem("myAppName");
}

deltApp.addEventListener("click", function () { 
    localStorage.removeItem("myAppName");
    document.querySelector("#myAppTitle").textContent = "";
});