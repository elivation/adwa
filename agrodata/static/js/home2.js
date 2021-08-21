var ctx = document.getElementById('Home_two')
  // eslint-disable-next-line no-unused-vars
  var Home_two = new Chart(ctx, {
    type: 'line',
    data: {
        labels:['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'],
      datasets: [{
        label: 'Example Chart',
        data: [
          150,
          250,
          200,
          400,
          350,
          220,
        
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(54, 162, 235,2)'
      },
    
    
    
      {
        label: 'Example Chart',
        data: [
          200,
          150,
          300,
          250,
          250,
          400,
        
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgba(54, 162, 235)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(54, 162, 235,2)'
      }]
    },
    options: {

        
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
