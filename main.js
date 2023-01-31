let workHoursDaily = document.getElementById('work-hours-daily');

async function fetchData() {
    let response = await fetch("./data.json");
    let data = await response.json();
    let myHours = data[0].timeframes.daily.current;
    console.log(myHours);
}

fetchData();
