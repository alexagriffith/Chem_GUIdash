var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  
  var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
  };
  
  var ctx = document.getElementById("canvas").getContext("2d");
  var myLine = new Chart(ctx, {
    type: 'line',
    data: {
      xLabels: ["", "A", "B", "c", ""],
      yLabels: ['','Analyze', 'Hess', 'Opt', 'Single Point',''],
      datasets: [{
        label: "First Single Point",
        data: [null,'Single Point', 'Single Point', 'Single Point',null],
        fill: false,
        showLine: false,
        borderColor: '#dc3545',
        backgroundColor: '#dc3545',
        pointRadius: 10,
        pointHoverRadius: 15,
      }, {
        label: "Geometry Optimization",
        data: [null, null, 'Opt', 'Opt', null],
        fill: false,
        showLine: false,
        borderColor: chartColors.yellow,
        backgroundColor: chartColors.yellow,
        pointRadius: 10,
        pointHoverRadius: 15,
      }, {
        label: "Hessian",
        data: [null, 'Hess', null],
        fill: false,
        showLine: false,
        borderColor: "rgba(2,117,216,1)",
        backgroundColor: "rgba(2,117,216,1)",
        pointRadius: 10,
        pointHoverRadius: 15,
    }, {
            label: "Analyze",
            data: [null, 'Analyze', null],
            fill: false,
            showLine: false,
            borderColor: '#28a745',
            backgroundColor: '#28a745',
            pointRadius: 10,
            pointHoverRadius: 15,
          }]
        },
    options: {
      responsive: true,
      title:{
        display: true,
        text: ''
      },
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Models'
          }
        }],
        yAxes: [{
          type: 'category',
          position: 'left',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Tasks'
          },
          ticks: {
            reverse: true
          },
        }]
      }
    }
  });
  
  