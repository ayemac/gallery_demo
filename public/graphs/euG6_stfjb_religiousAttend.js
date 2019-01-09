$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Church Attendance\n  <br/>\n<\/h4>",
        align: "center"
      },
      yAxis: {
        title: {
          text: "Predicted Happiness (10 Point Scale)"
        },
        type: "linear"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          showInLegend: true,
          marker: {
            enabled: false
          }
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        },
        scatter: {
          marker: {
            symbol: "circle"
          }
        },
        animation: true
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        crosshairs: {
          enabled: true,
          color: "#f7f2e6"
        },
        backgroundColor: "#f0f0f0",
        valueDecimals: 2,
        shared: true,
        borderWidth: 1,
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              y: 5.9145,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.8664,
              conf.low: 5.698,
              conf.high: 6.0347,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              y: 5.8664,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.8418,
              conf.low: 5.6698,
              conf.high: 6.0138,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              y: 5.8418,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              low: 5.74,
              high: 6.09,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.8664,
              conf.low: 5.698,
              conf.high: 6.0347,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              low: 5.7,
              high: 6.03,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.8418,
              conf.low: 5.6698,
              conf.high: 6.0138,
              id: "religiousAttend",
              var: "stfjb",
              displayName: "Church Attendance",
              low: 5.67,
              high: 6.01,
              name: "Never Attends Services"
            }
          ],
          type: "errorbar",
          showInLegend: false
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      legend: {
        enabled: false
      },
      colors: [
        #030303"
      ],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
