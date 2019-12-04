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

