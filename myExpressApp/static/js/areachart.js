// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: "Energy",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [-1578,-1580,-1590,-1588,-1587,-1589,-1585,-1588,-1589, -1590]
    }, {
      label: "Max Gradient",
      lineTension: 0.3,
      backgroundColor: "#28a745",
      borderColor: "#28a745",
      pointRadius: 5,
      pointBackgroundColor: "#28a745",
      pointBorderColor: "#28a745",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#28a745",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [-1570,-1571,-1572,-1573,-1574,-1575,-1576,-1577,-1575, -1574]
    }, {
      label: "RMS Gradient",
      lineTension: 0.3,
      backgroundColor: "#ffc107",
      borderColor: "#ffc107",
      pointRadius: 5,
      pointBackgroundColor: "#ffc107",
      pointBorderColor: "#ffc107",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#ffc107",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [-1590,-1591,-1592,-1593,-1594,-1595,-1594,-1593,-1595, -1594],
    }]
    },
  options: {
    responsive: true, 
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Steps'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 50
        }
      }],
      yAxes: [{
        ticks: {
          min: -1600,
          max: -1560,
          maxTicksLimit: 50
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
