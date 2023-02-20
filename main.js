// let weeklyCurrents = [];
// let dailyCurrents = [];
// let monthlyCurrents = [];

// let dailyPrevis = [];
// let weeklyPrevis = [];
// let monthlyPrevis = [];

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

let workEllipsis = document.getElementById("work-ellipsis");
let playEllipsis = document.getElementById('play-ellipsis');
let studyEllipsis = document.getElementById('study-ellipsis');
let exerciseEllipsis = document.getElementById('exercise-ellipsis');
let socialEllipsis = document.getElementById('social-ellipsis');
let selfCareEllipsis = document.getElementById('self-care-ellipsis');

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

    workEllipsis.addEventListener("click", showPreviousWorkDay);
    playEllipsis.addEventListener('click', showPreviousPlayDay);
    studyEllipsis.addEventListener('click', showPreviousStudyDay);
    exerciseEllipsis.addEventListener('click', showPreviousExerciseDay);
    socialEllipsis.addEventListener('click', showPreviousSocialDay);
    selfCareEllipsis.addEventListener('click', showPreviousSelfCareDay);
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

let a = 0;
function showPreviousPlayDay() {
    if(a == 0) {
        playHours.innerHTML = "2hrs"; 
        a += 1;
    } else {
        playHours.innerHTML = "1hr"; 
        a = 0;
    }
}

let d = 0;
function showPreviousStudyDay() {
    if(d == 0) {
        studyHours.innerHTML = "1hr"; 
        d += 1;
    } else {
        studyHours.innerHTML = "0hr"; 
        d = 0;
    }
}

let g = 0;
function showPreviousExerciseDay() {
    if(g == 0) {
        exerciseHours.innerHTML = "1hr"; 
        g += 1;
    } else {
        exerciseHours.innerHTML = "1hr"; 
        g = 0;
    }
}

let k = 0;
function showPreviousSocialDay() {
    if(k == 0) {
        socialHours.innerHTML = "3hrs"; 
        k += 1;
    } else {
        socialHours.innerHTML = "1hr"; 
        k = 0;
    }
}

let m = 0;
function showPreviousSelfCareDay() {
    if(m == 0) {
        selfCareHours.innerHTML = "1hr"; 
        m += 1;
    } else {
        selfCareHours.innerHTML = "0hr"; 
        m = 0;
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

    workEllipsis.addEventListener("click", showPreviousWorkWeek);
    playEllipsis.addEventListener('click', showPreviousPlayWeek);
    studyEllipsis.addEventListener('click', showPreviousStudyWeek);
    exerciseEllipsis.addEventListener('click', showPreviousExerciseWeek);
    socialEllipsis.addEventListener('click', showPreviousSocialWeek);
    selfCareEllipsis.addEventListener('click', showPreviousSelfCareWeek);
}

let b = 0;
function showPreviousPlayWeek() {
    if(b == 0) {
        playHours.innerHTML = "8hrs"; 
        b += 1;
    } else {
        playHours.innerHTML = "10hrs"; 
        b = 0;
    }
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

let e = 0;
function showPreviousStudyWeek() {
    if(e == 0) {
        studyHours.innerHTML = "7hrs"; 
        e += 1;
    } else {
        studyHours.innerHTML = "4hrs"; 
        e = 0;
    }
}

let h = 0;
function showPreviousExerciseWeek() {
    if(h == 0) {
        exerciseHours.innerHTML = "5hrs"; 
        h += 1;
    } else {
        exerciseHours.innerHTML = "4hrs"; 
        h = 0;
    }
}

let j = 0;
function showPreviousSocialWeek() {
    if(j == 0) {
        socialHours.innerHTML = "10hrs"; 
        j += 1;
    } else {
        socialHours.innerHTML = "5hrs"; 
        j = 0;
    }
}

let n = 0;
function showPreviousSelfCareWeek() {
    if(n == 0) {
        selfCareHours.innerHTML = "2hrs"; 
        n += 1;
    } else {
        selfCareHours.innerHTML = "2hrs"; 
        n = 0;
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

    workEllipsis.addEventListener("click", showPreviousWorkMonth);
    playEllipsis.addEventListener('click', showPreviousPlayMonth);
    studyEllipsis.addEventListener('click', showPreviousStudyMonth);
    exerciseEllipsis.addEventListener('click', showPreviousExerciseMonth);
    socialEllipsis.addEventListener('click', showPreviousSocialMonth);
    selfCareEllipsis.addEventListener('click', showPreviousSelfCareMonth);
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

let c = 0;
function showPreviousPlayMonth() {
    if(c == 0) {
        playHours.innerHTML = "29hrs"; 
        c += 1;
    } else {
        playHours.innerHTML = "23hrs"; 
        c = 0;
    }
}

let p = 0;
function showPreviousStudyMonth() {
    if(p == 0) {
        studyHours.innerHTML = "19hrs"; 
        p += 1;
    } else {
        studyHours.innerHTML = "13hrs"; 
        p = 0;
    }
}

let i = 0;
function showPreviousExerciseMonth() {
    if(i == 0) {
        exerciseHours.innerHTML = "18hrs"; 
        i += 1;
    } else {
        exerciseHours.innerHTML = "11hrs"; 
        i = 0;
    }
}

let l = 0;
function showPreviousSocialMonth() {
    if(l == 0) {
        socialHours.innerHTML = "23hrs"; 
        l += 1;
    } else {
        socialHours.innerHTML = "21hrs"; 
        l = 0;
    }
}

let o = 0;
function showPreviousSelfCareMonth() {
    if(o == 0) {
        selfCareHours.innerHTML = "11hrs"; 
        o += 1;
    } else {
        selfCareHours.innerHTML = "7hr"; 
        o = 0;
    }
}