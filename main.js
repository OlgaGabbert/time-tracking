let weeklyCurrents = [];
let dailyCurrents = [];
let monthlyCurrents = [];

let dailyPrevis = [];
let weeklyPrevis = [];
let monthlyPrevis = [];

// Fetch JSON Data
async function fetchData() {
    let response = await fetch("./data.json");
    let data = await response.json();
    // Save data into arrays
    for (let i = 0; i< data.length; i++) {
        let dailyCurrent = data[i].timeframes.daily.current;
        dailyCurrents.push(dailyCurrent);
        let weeklyCurrent = data[i].timeframes.weekly.current;
        weeklyCurrents.push(weeklyCurrent);
        let monthlyCurrent = data[i].timeframes.monthly.current;
        monthlyCurrents.push(monthlyCurrent);

        let dailyPrevious = data[i].timeframes.daily.previous;
        dailyPrevis.push(dailyPrevious);
        let weeklyPrevious = data[i].timeframes.weekly.previous;
        weeklyPrevis.push(weeklyPrevious);
        let monthlyPrevious = data[i].timeframes.monthly.previous;
        monthlyPrevis.push(monthlyPrevious);
    }

}

// Call function 
fetchData();

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
}
// Call function to have default display
changeToDaily();

function changeToWeekly() {
    weekly.style.color='white';
    weekly.style.fontWeight ='400';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';
    workHours.innerHTML = weeklyCurrents[0] + 'hrs';
    playHours.innerHTML = weeklyCurrents[1] + 'hrs';
    studyHours.innerHTML = weeklyCurrents[2] + 'hrs';
    exerciseHours.innerHTML = weeklyCurrents[3] + 'hrs';
    socialHours.innerHTML = weeklyCurrents[4] + 'hrs';
    selfCareHours.innerHTML = weeklyCurrents[5] + "hrs";
    changeToWeekly.called = true;
}

function changeToMonthly() {
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color='white';
    monthly.style.fontWeight ='400';
    workHours.innerHTML = monthlyCurrents[0] + 'hrs';
    playHours.innerHTML = monthlyCurrents[1] + 'hrs';
    studyHours.innerHTML = monthlyCurrents[2] + 'hrs';
    exerciseHours.innerHTML = monthlyCurrents[3] + 'hrs';
    socialHours.innerHTML = monthlyCurrents[4] + 'hrs';
    selfCareHours.innerHTML = monthlyCurrents[5] + "hrs";
    changeToMonthly.called = true;
}

function showPreviousWork() {
    if(changeToMonthly.called) {
        workHours.innerHTML = monthlyPrevis[0] + 'hrs';
        workHoursInfo.innerHTML = 'last month';
    } else if(changeToWeekly.called) {
        workHours.innerHTML = weeklyPrevis[0] + 'hrs';
        workHoursInfo.innerHTML = 'last week';
    } else {
    workHours.innerHTML = dailyPrevis[0] + 'hrs';
    workHoursInfo.innerHTML = 'yesterday';
    }
}