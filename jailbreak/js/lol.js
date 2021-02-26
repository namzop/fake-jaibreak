function lol(){
    document.getElementById('ahh').style.backgroundColor = "black";
    document.getElementById('ahh').style.color = "white";
    document.getElementById("lol").style.display = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function exploit(){
    document.getElementById("start").style.display = "none";
    alert("Exploiting")
    document.getElementById("statuslol").innerHTML = "Status: Exploiting.";
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Exploiting.."; }, 2000);
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Exploiting..."; }, 4000);
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Exploited!"; }, 12000);
    setTimeout(() => { alert("Exploited!") }, 12000);
    // document.getElementById("statuslol").innerHTML = "Status: Exploited!";
}