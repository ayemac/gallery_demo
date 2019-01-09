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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              y: 5.1436,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.0912,
              conf.low: 5.0237,
              conf.high: 5.1587,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              y: 5.0912,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.0055,
              conf.low: 4.9367,
              conf.high: 5.0744,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              y: 5.0055,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              low: 5.07,
              high: 5.21,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.0912,
              conf.low: 5.0237,
              conf.high: 5.1587,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              low: 5.02,
              high: 5.16,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.0055,
              conf.low: 4.9367,
              conf.high: 5.0744,
              id: "religiousAttend",
              var: "pplfair",
              displayName: "Church Attendance",
              low: 4.94,
              high: 5.07,
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
