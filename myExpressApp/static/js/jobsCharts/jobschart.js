// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
$(function(){
    var _data;
    var _labels;
    $.ajax({
        url: "/jobschartdata",
        type: "get",
        data: {vals: ''},
        success: function(response) {
            full_data = JSON.parse(response.payload);
            _data = full_data['data'];
            _lables = full_data['labels'];
        },
    });
var ctx = document.getElementById("jobsChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: _labels, 
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
      data: _data
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
});
