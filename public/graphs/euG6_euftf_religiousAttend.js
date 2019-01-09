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
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              y: 5.6238,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.651,
              conf.low: 5.5557,
              conf.high: 5.7462,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              y: 5.651,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.5402,
              conf.low: 5.443,
              conf.high: 5.6374,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              y: 5.5402,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              low: 5.53,
              high: 5.72,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.651,
              conf.low: 5.5557,
              conf.high: 5.7462,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              low: 5.56,
              high: 5.75,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.5402,
              conf.low: 5.443,
              conf.high: 5.6374,
              id: "religiousAttend",
              var: "euftf",
              displayName: "Church Attendance",
              low: 5.44,
              high: 5.64,
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
