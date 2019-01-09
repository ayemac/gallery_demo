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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              y: 4.4109,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.2881,
              conf.low: 4.2195,
              conf.high: 4.3567,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              y: 4.2881,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.1454,
              conf.low: 4.0755,
              conf.high: 4.2154,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              y: 4.1454,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              low: 4.34,
              high: 4.48,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.2881,
              conf.low: 4.2195,
              conf.high: 4.3567,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              low: 4.22,
              high: 4.36,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.1454,
              conf.low: 4.0755,
              conf.high: 4.2154,
              id: "religiousAttend",
              var: "pplhlp",
              displayName: "Church Attendance",
              low: 4.08,
              high: 4.22,
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
