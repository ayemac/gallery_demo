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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              y: 4.9488,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.936,
              conf.low: 4.8613,
              conf.high: 5.0106,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              y: 4.936,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.8533,
              conf.low: 4.7772,
              conf.high: 4.9295,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              y: 4.8533,
              name: "Never Attends Services"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              low: 4.87,
              high: 5.03,
              name: "Attends Services Weekly +"
            },
            {
              predicted: 4.936,
              conf.low: 4.8613,
              conf.high: 5.0106,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              low: 4.86,
              high: 5.01,
              name: "Attends Services Sometimes"
            },
            {
              predicted: 4.8533,
              conf.low: 4.7772,
              conf.high: 4.9295,
              id: "religiousAttend",
              var: "imbgeco",
              displayName: "Church Attendance",
              low: 4.78,
              high: 4.93,
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
