
var areaChartData1 = {
  labels: ["Data 1", "Data 2", "Data 3"],
  datasets: [{
    data: [1,9,3]
  }]
};  

var areaChartData2 = {
  labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 7", "Data 7", "Data 7", "Data 5", "Data 2", "Data 4", "Data 1", "Data 7"],
  datasets: [{
    data: [20, 90, 140, 25, 53, 67, 47, 98, 30, 80, 20, 40, 10, 60]
  }]
};

// these are some defaults you can use for customizing your charts

Chart.defaults.global.responsive = true;
//Chart.defaults.global.animationSteps = 50;
//Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.animationEasing = "easeOutBounce";
//Chart.defaults.global.scaleFontSize = 16;
Chart.defaults.global.showScale = false;
Chart.defaults.global.fill = false;
Chart.defaults.global.lineTension = 0.3;
Chart.defaults.global.pointRadius = 5;
Chart.defaults.globalpointHitRadius = 50;
Chart.defaults.global.pointBorderWidth = 1;








/* //label: "Energy",
  //    lineTension: 0.3,
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
      data1: [] */


// then i just duplicated the chart specific options
var ctx1 = document.getElementById("areaChartData1").getContext("2d");
var LineChart1 = new Chart(ctx1).Line(areaChartData1, {
});

var ctx2 = document.getElementById("areaChartData2").getContext("2d");
var LineChart2 = new Chart(ctx2).Line(areaChartData2, {
});









