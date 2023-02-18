let weeklyCurrents = [];
let dailyCurrents = [];
console.log(dailyCurrents);
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

        let dailyPrevious = data[1].timeframes.daily.previous;
        dailyPrevis.push(dailyPrevious);
        let weeklyPrevious = data[i].timeframes.weekly.previous;
        weeklyPrevis.push(weeklyPrevious);
        let monthlyPrevious = data[i].timeframes.monthly.previous;
        monthlyPrevis.push(monthlyPrevious);
    }
    // let myData = new Object({});
    // for (let i = 0; i < data.length; i++) {
    //     myData.title = data[i].title;
    //     console.log(myData.title);
    //     myData.dailyC = data[i].timeframes.daily.current;
    //     myData.dailyP = data[i].timeframes.daily.previous;
    //     myData.weeklyC = data[i].timeframes.weekly.current;
    //     myData.weeklyP = data[i].timeframes.weekly.previous;
    //     myData.monthlyC = data[i].timeframes.monthly.current;
    //     myData.monthlyP = data[i].timeframes.monthly.previous;
    // }
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

function changeToDaily() {
    daily.style.color='white';
    daily.style.fontWeight ='400';
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';

    selfCareHours.innerHTML = "0hr";
}

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
}

function changeToMonthly() {
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color='white';
    monthly.style.fontWeight ='400';
}