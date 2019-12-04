//$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com/";

$(updateView);

function updateView() {
    $.when (
        $.getJSON(BASE_URL + "rides/count/per_month") 
      ).then(updateGraph);
  }

function updateGraph( data ) {
    console.log (data);
    const monthList = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var labels = [];
    var values = [];
    for (var year in data){
        for (var i in data[year]){
            console.log(data[year][i]);
            //monthNum is key, value is number of rides:
            //{5: 2400} = May, 2400 rides
            var monthNum = Object.keys(data[year][i])[0];
            var monthName = monthList[monthNum]; //5 = May
            var rideCount = data[year][i][monthNum];

            labels.push(monthName + " " + year);
            values.push(rideCount);
        }


    }
console.table(labels,values);


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Rides per month',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });
}

