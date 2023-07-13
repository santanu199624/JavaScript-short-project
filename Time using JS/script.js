
function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    let session = document.getElementById('session');

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

    if(hrs >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
}
setInterval(displayTime, 10);