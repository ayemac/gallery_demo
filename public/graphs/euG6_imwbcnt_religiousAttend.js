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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              y: 4.9648,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.9288,
              conf.low: 4.8596,
              conf.high: 4.9981,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              y: 4.9288,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.8235,
              conf.low: 4.7528,
              conf.high: 4.8941,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              y: 4.8235,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              low: 4.89,
              high: 5.04,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.9288,
              conf.low: 4.8596,
              conf.high: 4.9981,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              low: 4.86,
              high: 5,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.8235,
              conf.low: 4.7528,
              conf.high: 4.8941,
              id: "religiousAttend",
              var: "imwbcnt",
              displayName: "Church Attendance",
              low: 4.75,
              high: 4.89,
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
