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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              y: 6.6558,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.5534,
              conf.low: 6.4961,
              conf.high: 6.6108,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              y: 6.5534,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.4861,
              conf.low: 6.4276,
              conf.high: 6.5446,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              y: 6.4861,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              low: 6.6,
              high: 6.71,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 6.5534,
              conf.low: 6.4961,
              conf.high: 6.6108,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              low: 6.5,
              high: 6.61,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 6.4861,
              conf.low: 6.4276,
              conf.high: 6.5446,
              id: "religiousAttend",
              var: "happy",
              displayName: "Church Attendance",
              low: 6.43,
              high: 6.54,
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
