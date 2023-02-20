let weeklyCurrents = [];
let dailyCurrents = [];
let monthlyCurrents = [];

let dailyPrevis = [];
let weeklyPrevis = [];
let monthlyPrevis = [];

// Fetch JSON Data
// async function fetchData() {
//     let response = await fetch("./data.json");
//     let data = await response.json();
//     // Save data into arrays
//     for (let i = 0; i< data.length; i++) {
//         let dailyCurrent = data[i].timeframes.daily.current;
//         dailyCurrents.push(dailyCurrent);
//         let weeklyCurrent = data[i].timeframes.weekly.current;
//         weeklyCurrents.push(weeklyCurrent);
//         let monthlyCurrent = data[i].timeframes.monthly.current;
//         monthlyCurrents.push(monthlyCurrent);

//         let dailyPrevious = data[i].timeframes.daily.previous;
//         dailyPrevis.push(dailyPrevious);
//         let weeklyPrevious = data[i].timeframes.weekly.previous;
//         weeklyPrevis.push(weeklyPrevious);
//         let monthlyPrevious = data[i].timeframes.monthly.previous;
//         monthlyPrevis.push(monthlyPrevious);
//     }

// }

// // Call function 
// fetchData();

let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

let workHours = document.getElementById('workHours');
let playHours = document.getElementById('playHours');
let studyHours = document.getElementById('studyHours');
let exerciseHours = document.getElementById('exerciseHours');
let socialHours = document.getElementById('socialHours');
let selfCareHours = document.getElementById('selfCareHours');

let workHoursInfo = document.getElementById('workHoursInfo');

function changeToDaily() {
    daily.style.color='white';
    daily.style.fontWeight ='400';
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';

    workHours.innerHTML = "5hrs";
    playHours.innerHTML = '1hr';
    studyHours.innerHTML = '0hr';
    exerciseHours.innerHTML = '1hr';
    socialHours.innerHTML = '1hr';
    selfCareHours.innerHTML = "0hr";

    document.getElementById("work-ellipsis").addEventListener("click", showPreviousWorkDay);
}
// Call function to have default display
changeToDaily();

let x = 0;
function showPreviousWorkDay() {
    if(x == 0) {
        workHours.innerHTML = "7hrs"; 
        x += 1;
    } else {
        workHours.innerHTML = "5hrs"; 
        x = 0;
    }
}

function changeToWeekly() {
    weekly.style.color='white';
    weekly.style.fontWeight ='400';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';
    workHours.innerHTML = '32 hrs';
    playHours.innerHTML = '10 hrs';
    studyHours.innerHTML = '4 hrs';
    exerciseHours.innerHTML = '4 hrs';
    socialHours.innerHTML = '5 hrs';
    selfCareHours.innerHTML = "2 hrs";

    document.getElementById("work-ellipsis").addEventListener("click", showPreviousWorkWeek);
}

let y = 0;
function showPreviousWorkWeek() {
    if(y == 0) {
        workHours.innerHTML = "36hrs"; 
        y += 1;
    } else {
        workHours.innerHTML = "32hrs"; 
        y = 0;
    }
}

function changeToMonthly() {
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color='white';
    monthly.style.fontWeight ='400';
    workHours.innerHTML = '103 hrs';
    playHours.innerHTML = '23 hrs';
    studyHours.innerHTML = '13 hrs';
    exerciseHours.innerHTML = '11 hrs';
    socialHours.innerHTML = '21 hrs';
    selfCareHours.innerHTML = "7 hrs";

    document.getElementById("work-ellipsis").addEventListener("click", showPreviousWorkMonth);

}

let z = 0;
function showPreviousWorkMonth() {
    if(z == 0) {
        workHours.innerHTML = "128hrs"; 
        z += 1;
    } else {
        workHours.innerHTML = "103hrs"; 
        z = 0;
    }
}