
var ctx = document.getElementById('Home_one').getContext('2d');


var Home_one = new Chart(ctx, {
    type: 'pie',
    data: {
    labels:['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'],
        datasets: [{
            label: 'Example Chart',
            data: [
                700, 
                600, 
                1000, 
                400, 
                1300, 
                3000,
                ],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

    
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
      