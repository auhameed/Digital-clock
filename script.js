function Time(){
    // Creating object of the Date class
    var date = new Date();
    // get current hour
    var hour = date.getHours();
    //get current minute
    var minute = date.getMinutes();
    //get current second
    var second = date.getSeconds();
    //variable to store AM / PM
    var period = " ";
    //assigning AM / PM according to the current hour
    if (hour >= 12){
        period = "PM";
    }
    else{
        period = "AM";
    }
    //converting the hour in 12 hour format
    if (hour == 0){
        hour = 12;
    }
    else{
    if (hour > 12){
        hour = hour - 12;
    }
    }
    //updating hour, minute, and seconf
    //if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    //adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " +  period;
    //set timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before the time elements if they are less than 10
function update(t){
    if (t < 10){
        return "0" + t;
    }
    else{
        return t;
    }
}
Time();