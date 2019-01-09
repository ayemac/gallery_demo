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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              y: 4.842,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.8206,
              conf.low: 4.7408,
              conf.high: 4.9005,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              y: 4.8206,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.5491,
              conf.low: 4.4676,
              conf.high: 4.6306,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              y: 4.5491,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              low: 4.76,
              high: 4.92,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.8206,
              conf.low: 4.7408,
              conf.high: 4.9005,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              low: 4.74,
              high: 4.9,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.5491,
              conf.low: 4.4676,
              conf.high: 4.6306,
              id: "religiousAttend",
              var: "trstep",
              displayName: "Church Attendance",
              low: 4.47,
              high: 4.63,
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
