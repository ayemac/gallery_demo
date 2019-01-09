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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              y: 6.2757,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.1847,
              conf.low: 6.111,
              conf.high: 6.2583,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              y: 6.1847,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.0307,
              conf.low: 5.9556,
              conf.high: 6.1058,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              y: 6.0307,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              low: 6.2,
              high: 6.35,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.1847,
              conf.low: 6.111,
              conf.high: 6.2583,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              low: 6.11,
              high: 6.26,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.0307,
              conf.low: 5.9556,
              conf.high: 6.1058,
              id: "religiousAttend",
              var: "trstplc",
              displayName: "Church Attendance",
              low: 5.96,
              high: 6.11,
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
