
var ctx = document.getElementById('Farmer').getContext('2d');


var Area = new Chart(ctx, {
    type: 'pie',
    data: {
    labels:['Male', 'female',],
        datasets: [{
            label: 'Farmers Gender Data',
            data: [
                43, 
                164],
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
      