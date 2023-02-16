// Fetch JSON Data
async function fetchData() {
    let response = await fetch("./data.json");
    let data = await response.json();

    // Save data into an array
    let arr = [];
    // for(let i in data) {
    //     arr.push([i, data [i]]);
    // }
    arr.push(data);

    // Iterate over array
    for(let i = 0; i<arr.length; i++) {
        console.log(arr[i]);
        for(let y = 0; y<arr.length; y++) {
            console.log(arr[i][y].title);
        }
    }
   

    // for (let i = 0; i < data.length; i++) {
    //     myData.title = data[i].title;
        
    //     myData.dailyCurrent = data[i].timeframes.daily.current;
    //     myData.dailyPrevious = data[i].timeframes.daily.previous;
    //     myData.weeklyCurrent = data[i].timeframes.weekly.current;
    //     myData.weeklyPrevious = data[i].timeframes.weekly.previous;
    //     myData.monthlyCurrent = data[i].timeframes.monthly.current;
    //     myData.monthlyPrevious = data[i].timeframes.monthly.previous;


    //     if(myData.title === 'work') {
    //         hours.innerHTML = `${myData.weeklyCurrent}hrs hey`;
    //     }

    // }
}

// Call function 
fetchData();
