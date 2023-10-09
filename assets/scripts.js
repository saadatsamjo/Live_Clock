//SETTING THE VARIABLES
let today_display_date = "";
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Oct", "Sep", "Nov", "Oct", "Dec"];

function refreshTime(){
    let today_display_date = "";
    let now_hour = new Date().getHours().toString().padStart(2, '0');
    let now_minutes =  new Date().getMinutes().toString().padStart(2, '0');
    let today_date = new Date();
    let week_day = new Date().getDay();
    let today_month = new Date().getMonth();

    today_display_date += dayNames[week_day] + ' ';
    today_display_date += today_date.getDate()+ 'th' + ' ';
    today_display_date +=  monthName[today_month + 1];

    // INJECTING JAVASCRIPT TO HTML
    hrs.innerHTML = now_hour;
    min.innerHTML = now_minutes;
    date.innerHTML = today_display_date;
}
refreshTime();
setInterval(refreshTime, 30000);