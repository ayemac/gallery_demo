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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              y: 5.4946,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.4299,
              conf.low: 5.3538,
              conf.high: 5.506,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              y: 5.4299,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.2049,
              conf.low: 5.1273,
              conf.high: 5.2826,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              y: 5.2049,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              low: 5.42,
              high: 5.57,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.4299,
              conf.low: 5.3538,
              conf.high: 5.506,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              low: 5.35,
              high: 5.51,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.2049,
              conf.low: 5.1273,
              conf.high: 5.2826,
              id: "religiousAttend",
              var: "trstlgl",
              displayName: "Church Attendance",
              low: 5.13,
              high: 5.28,
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
