//$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com/";

$(updateView);

function updateView() {
    $.when (
        $.getJSON(BASE_URL + "rides/count/per_month") 
      ).then(updateGraph);
  }

function updateGraph( data ) {
    const monthList = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var rideMonths = [];
    var rideTotals = [];
    for (var year in data){
        for (var i in data[year]){
            
            //monthNum is key, value is number of rides:
            //{5: 2400} = May, 2400 rides
            var monthNum = Object.keys(data[year][i])[0];
            var monthName = monthList[monthNum-1]; //5 = May
            var rideCount = data[year][i][monthNum];

            rideMonths.push(monthName + " " + year);
            rideTotals.push(rideCount);
        }


    }



    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: rideMonths,
            datasets: [{
                label: 'Rides per month',
                backgroundColor: '#6dcff6',
                borderColor: '#0b7cb1',
                data: rideTotals
            }]
        },

        // Configuration options go here
        options: {}
    });
}

