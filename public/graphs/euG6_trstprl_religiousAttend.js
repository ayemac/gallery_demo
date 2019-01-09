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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              y: 4.6353,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.5054,
              conf.low: 4.4311,
              conf.high: 4.5798,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              y: 4.5054,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.2399,
              conf.low: 4.1641,
              conf.high: 4.3157,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              y: 4.2399,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              low: 4.56,
              high: 4.71,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.5054,
              conf.low: 4.4311,
              conf.high: 4.5798,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              low: 4.43,
              high: 4.58,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.2399,
              conf.low: 4.1641,
              conf.high: 4.3157,
              id: "religiousAttend",
              var: "trstprl",
              displayName: "Church Attendance",
              low: 4.16,
              high: 4.32,
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
