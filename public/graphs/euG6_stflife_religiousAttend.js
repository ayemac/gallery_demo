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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              y: 6.0801,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.9253,
              conf.low: 5.8612,
              conf.high: 5.9894,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              y: 5.9253,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.8361,
              conf.low: 5.7708,
              conf.high: 5.9015,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              y: 5.8361,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              low: 6.01,
              high: 6.15,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 5.9253,
              conf.low: 5.8612,
              conf.high: 5.9894,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              low: 5.86,
              high: 5.99,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 5.8361,
              conf.low: 5.7708,
              conf.high: 5.9015,
              id: "religiousAttend",
              var: "stflife",
              displayName: "Church Attendance",
              low: 5.77,
              high: 5.9,
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
