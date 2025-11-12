
        //BAR-CHART
  const barCtx = document.getElementById("weeklyCodingChart");

  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      datasets: [{
        label: "Hours Coded",
        data: [5,10,6,2,1,0,6],
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#4f46e5',
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      title: {
        display: true,
        text: "Weekly Coding Activity",
        font: {
          size: 24,
          weight: 'bold'
        },
        color: '#1e1e1e1',
      }
      },
      legend: {
       labels: {
        font: {
          size: 14,
        },
        color: '#555'
       }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font : {
              size: 15,
              weight: 'bold'
            }
          }
        },
        x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 12
          }
        }
       }
      }
    }
  });


  //donut-chart

  const donutCtx = document.getElementById("progressVisualizationChart");

  new Chart(donutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Active Projects','Goals in Progress','Task Completed'],
      datasets: [{
        label: "Progress",
        data: [100,100,100],
        backgroundColor: ['#4f46e5', '#a5b4fc', '#c7d2fe']
      }]
    },
    options: {
      plugins: {
        legends: {
          display: true
        },
        title: {
          display: true,
          text: "Progress Visualization",
          font: {
            size: 24,
            weight: 'bold'
          },
           color: '#1e1e1e1',
        }
      }
    }
  });