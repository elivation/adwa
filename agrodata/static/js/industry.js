
      var ctx = document.getElementById('Industry').getContext('2d');
      
      
      var Industry = new Chart(ctx, {
          type: 'pie',
          data: {
            labels:['2015', '2016', '2017', '2018', '2019', '2020'],
              datasets: [{
                  label: 'Volume To Industry',
                  data: [
                      600, 
                      760, 
                      590, 
                      660, 
                      980, 
                      1500],
                  backgroundColor: [
                      'rgba(255, 99, 132,2)',
                      'rgba(54, 162, 235,2)',
                      'rgba(255, 206, 86,2)',
                      'rgba(75, 192, 192,2)',
                      'rgba(153, 102, 255,2)',
                      'rgba(255, 159, 64,2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                     
                  ],
                  borderWidth: 1
              }]
          },
          options: {
               animateScale: true,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
      