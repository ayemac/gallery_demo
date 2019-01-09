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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              y: 3.7422,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 3.6101,
              conf.low: 3.5389,
              conf.high: 3.6813,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              y: 3.6101,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.335,
              conf.low: 3.2623,
              conf.high: 3.4076,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              y: 3.335,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              low: 3.67,
              high: 3.82,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 3.6101,
              conf.low: 3.5389,
              conf.high: 3.6813,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              low: 3.54,
              high: 3.68,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.335,
              conf.low: 3.2623,
              conf.high: 3.4076,
              id: "religiousAttend",
              var: "trstprt",
              displayName: "Church Attendance",
              low: 3.26,
              high: 3.41,
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
