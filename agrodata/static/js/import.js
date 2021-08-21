
      var ctx = document.getElementById('Import').getContext('2d');
      
      
      var Import = new Chart(ctx, {
          type: 'bar',
          data: {
            labels:['2015', '2016', '2017', '2018', '2019', '2020'],
              datasets: [{
                  label: 'Volume Imported',
                  data: [
                      2450,
                       3300, 
                       4300, 
                       2060, 
                       3500, 
                       1000,
                        500],
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
      