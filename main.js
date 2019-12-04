//$(updateView)

const BASE_URL = "https://zagster-service.herokuapp.com/";

$(updateView);
$(updateGraph);
$(add);
$(greeter);

function add(num1,num2) {
    answer = num1 + num2;
    console.log("the sum of the two numbers is: ", + answer);
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
            data: {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],"2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],"2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}
        }]
    },

    // Configuration options go here
    options: {}
});
}

function updateView() {
    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
      ).then(updateChart);
  }