// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';








var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4'], 
    datasets: [{
      label: "Energy",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,2)",
      borderColor: "rgba(255,0,0,2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,2)",
      pointBorderColor: "rgba(255,0,0,2)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(255,0,0,2)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [3,7,8,9]
    },
      {
        label: "RMS Gradient",
        lineTension: 0.3,
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        pointRadius: 5,
        pointBackgroundColor: 'rgb(255, 205, 86)',
        pointBorderColor: 'rgb(255, 205, 86)',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgb(255, 205, 86)',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [3,8,4,6]
      },
     {
        label: "Energy Gradient",
        lineTension: 0.3,
        backgroundColor: '#00C851',
        borderColor: '#00C851',
        pointRadius: 5,
        pointBackgroundColor: '#00C851',
        pointBorderColor: '#00C851',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#00C851',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [5,7,3,9]
      }],
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
          min: 0,
          max: 10,
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


var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4'], 
    datasets: [{
      label: "Energy",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,2)",
      borderColor: "rgba(255,0,0,2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,2)",
      pointBorderColor: "rgba(255,0,0,2)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(255,0,0,2)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [3,7,8,9]
    },
      {
        label: "RMS Gradient",
        lineTension: 0.3,
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        pointRadius: 5,
        pointBackgroundColor: 'rgb(255, 205, 86)',
        pointBorderColor: 'rgb(255, 205, 86)',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgb(255, 205, 86)',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [2,9,3,8]
      },
     {
        label: "Energy Gradient",
        lineTension: 0.3,
        backgroundColor: '#00C851',
        borderColor: '#00C851',
        pointRadius: 5,
        pointBackgroundColor: '#00C851',
        pointBorderColor: '#00C851',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#00C851',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [3,4,5,6]
      }],
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
          min: 0,
          max: 10,
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



var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4'], 
    datasets: [{
      label: "Energy",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,2)",
      borderColor: "rgba(255,0,0,2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,2)",
      pointBorderColor: "rgba(255,0,0,2)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(255,0,0,2)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [3,7,8,9]
    },
      {
        label: "RMS Gradient",
        lineTension: 0.3,
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        pointRadius: 5,
        pointBackgroundColor: 'rgb(255, 205, 86)',
        pointBorderColor: 'rgb(255, 205, 86)',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgb(255, 205, 86)',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [2,9,3,8]
      },
     {
        label: "Energy Gradient",
        lineTension: 0.3,
        backgroundColor: '#00C851',
        borderColor: '#00C851',
        pointRadius: 5,
        pointBackgroundColor: '#00C851',
        pointBorderColor: '#00C851',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#00C851',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [3,4,5,6]
      }],
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
          min: 0,
          max: 10,
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



var ctx = document.getElementById("myAreaChart4");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4'], 
    datasets: [{
      label: "Energy",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,2)",
      borderColor: "rgba(255,0,0,2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,2)",
      pointBorderColor: "rgba(255,0,0,2)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(255,0,0,2)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      fill: false,
      data: [3,7,8,9]
    },
      {
        label: "RMS Gradient",
        lineTension: 0.3,
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        pointRadius: 5,
        pointBackgroundColor: 'rgb(255, 205, 86)',
        pointBorderColor: 'rgb(255, 205, 86)',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgb(255, 205, 86)',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [2,9,3,8]
      },
     {
        label: "Energy Gradient",
        lineTension: 0.3,
        backgroundColor: '#00C851',
        borderColor: '#00C851',
        pointRadius: 5,
        pointBackgroundColor: '#00C851',
        pointBorderColor: '#00C851',
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#00C851',
        pointHitRadius: 50,
        pointBorderWidth: 1,
        fill: false,
        data: [3,4,5,6]
      }],
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
          min: 0,
          max: 10,
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