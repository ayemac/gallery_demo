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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              y: 3.7098,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 3.5673,
              conf.low: 3.4985,
              conf.high: 3.636,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              y: 3.5673,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.2659,
              conf.low: 3.1958,
              conf.high: 3.336,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              y: 3.2659,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              low: 3.64,
              high: 3.78,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 3.5673,
              conf.low: 3.4985,
              conf.high: 3.636,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              low: 3.5,
              high: 3.64,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 3.2659,
              conf.low: 3.1958,
              conf.high: 3.336,
              id: "religiousAttend",
              var: "trstplt",
              displayName: "Church Attendance",
              low: 3.2,
              high: 3.34,
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
