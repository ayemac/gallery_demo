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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              y: 6.1338,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.1676,
              conf.low: 6.093,
              conf.high: 6.2423,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              y: 6.1676,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.122,
              conf.low: 6.0459,
              conf.high: 6.1981,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              y: 6.122,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              low: 6.06,
              high: 6.21,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.1676,
              conf.low: 6.093,
              conf.high: 6.2423,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              low: 6.09,
              high: 6.24,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.122,
              conf.low: 6.0459,
              conf.high: 6.1981,
              id: "religiousAttend",
              var: "imueclt",
              displayName: "Church Attendance",
              low: 6.05,
              high: 6.2,
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
