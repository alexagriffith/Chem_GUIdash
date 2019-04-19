Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

new Chart(document.getElementById("myBarChart"),{
      "type": 'bar',
      "data": {
        "labels": ['A', 'B', 'C', 'D'],
        "datasets": [{
          "label": "Progress Report",
          "data": ['1', '2', '3', '4'],
          "fill": false,
          "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
          "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
          "borderWidth": 1
        }]
      },
      "options": {
        "responive": true,
        "scales": {
          "yAxes": [{
            "type": 'category',
            "display": true, 
            "scaleLabel": {
              "display": true,
              "labelString": 'Tasks Completed',
              "xAxes": [{
                "display": true,
                "type": 'category',
                "labelString": 'Model'
              }]
            }
          }]
        }
      }
    }

    ,);