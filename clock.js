function myclock() {
    let date;

    date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    // take session as AM
    let session = "AM";

    if (hour === 0) {
        hour = 12;
    }

    if (hour >= 12) {
        hour = hour - 12;
        session = "PM";
    }


    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    second = (second < 10) ? "0" + second : second;


    collection_hour = document.getElementsByClassName("clock-hour")[0].innerText = hour;
    document.getElementsByClassName("clock-min")[0].innerHTML = min;
    document.getElementsByClassName("clock-second")[0].innerHTML = second;
    document.getElementsByClassName("clock-session")[0].innerHTML = session;
    

    let t = setTimeout(function () { myclock(); }, 1000)
}
myclock();