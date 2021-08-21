
      var ctx = document.getElementById('Home_three').getContext('2d');
      
      
      var Home_three = new Chart(ctx, {
          type: 'bar',
          data: {
            labels:['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
              datasets: [{
                  label: 'Example Chart',
                  data: [
                      3000,
                       2430, 
                       1110, 
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
      