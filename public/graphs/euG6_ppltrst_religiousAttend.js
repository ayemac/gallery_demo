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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              y: 4.1117,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.0336,
              conf.low: 3.9627,
              conf.high: 4.1045,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              y: 4.0336,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.9101,
              conf.low: 3.8378,
              conf.high: 3.9823,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              y: 3.9101,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              low: 4.04,
              high: 4.18,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.0336,
              conf.low: 3.9627,
              conf.high: 4.1045,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              low: 3.96,
              high: 4.1,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.9101,
              conf.low: 3.8378,
              conf.high: 3.9823,
              id: "religiousAttend",
              var: "ppltrst",
              displayName: "Church Attendance",
              low: 3.84,
              high: 3.98,
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
