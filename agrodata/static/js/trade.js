var ctx = document.getElementById('Trade')
  // eslint-disable-next-line no-unused-vars
  var Trade = new Chart(ctx, {
    type: 'line',
    data: {
      labels:['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        data: [
          300,
          350,
          300,
          430,
          150,
          220,
        
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(255, 99, 132)',
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
