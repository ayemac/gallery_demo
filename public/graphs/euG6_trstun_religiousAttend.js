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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              y: 5.0693,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.1702,
              conf.low: 5.09,
              conf.high: 5.2505,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              y: 5.1702,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.9988,
              conf.low: 4.917,
              conf.high: 5.0807,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              y: 4.9988,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              low: 4.99,
              high: 5.15,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.1702,
              conf.low: 5.09,
              conf.high: 5.2505,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              low: 5.09,
              high: 5.25,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.9988,
              conf.low: 4.917,
              conf.high: 5.0807,
              id: "religiousAttend",
              var: "trstun",
              displayName: "Church Attendance",
              low: 4.92,
              high: 5.08,
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
