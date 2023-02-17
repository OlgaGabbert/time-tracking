// // Fetch JSON Data
// async function fetchData() {
//     let response = await fetch("./data.json");
//     let data = await response.json();

// //     // Save data into an array
// //     let arr = [];
// //     // for(let i in data) {
// //     //     arr.push([i, data [i]]);
// //     // }
// //     arr.push(data);

// //     // Iterate over array
// //     for(let i = 0; i<arr.length; i++) {
// //         console.log(arr[i]);
// //     }
   

//  }

// // Call function 
// fetchData();

let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

function changeToDaily() {
    daily.style.color='white';
    daily.style.fontWeight ='400';
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';
}

function changeToWeekly() {
    weekly.style.color='white';
    weekly.style.fontWeight ='400';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color= '#DADADA';
    monthly.style.fontWeight ='300';
}

function changeToMonthly() {
    weekly.style.color= '#DADADA';
    weekly.style.fontWeight ='300';
    daily.style.color= '#DADADA';
    daily.style.fontWeight ='300';
    monthly.style.color='white';
    monthly.style.fontWeight ='400';
}