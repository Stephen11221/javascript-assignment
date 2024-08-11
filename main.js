const time = new Date().getHours();

let greeting ;
if (time <10 ) {
  greeting="Good morning"; 
} else if (time <20) {
  greeting="Good Dy";
  
} else{
  greeting="Good evening";

}
document .getElementById("greeting").innerHTMLTML =greeting;

function openNav() {
    document.getElementById("mySidenav").style.width = "900px";
    document.getElementById("main").style.marginRight = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
 var time = h + ":" +" hours "  +  m + ": "+"  min " + s + " sec " + session;

    document.getElementById("MyClockDisplay").innerText = time; 
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

     