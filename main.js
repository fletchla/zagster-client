//$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com/"
$.getJSON(BASE_URL + "/rides/count/per_month", perYear)

$(updateView)
$(updateGraph)
$(add)
$(greeter)

function add(num1,num2) {
    answer = num1 + num2;
    console.log("the sum of the two numbers is: ", answer);
    return answer;
}

function greeter(name){
    alert("Welcome to " + name + "data visualization")
    var person = {name: "Laurie", age:100}
    console.log("This person's name is: " + person.name);
    console.log("The age given is: " + person.age);
    if (person.age > 60){
        alert ("Much respect to you.")
    }
}

function updateView() {
    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
      ).then(updateChart);
  }

function updateGraph() {
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