$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Union Member\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              y: 5.9145,
              name: "Current Member"
            },
            {
              predicted: 5.8211,
              conf.low: 5.6454,
              conf.high: 5.9967,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              y: 5.8211,
              name: "Former Member"
            },
            {
              predicted: 5.9007,
              conf.low: 5.7328,
              conf.high: 6.0687,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              y: 5.9007,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              low: 5.74,
              high: 6.09,
              name: "Current Member"
            },
            {
              predicted: 5.8211,
              conf.low: 5.6454,
              conf.high: 5.9967,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              low: 5.65,
              high: 6,
              name: "Former Member"
            },
            {
              predicted: 5.9007,
              conf.low: 5.7328,
              conf.high: 6.0687,
              id: "union",
              var: "stfjb",
              displayName: "Union Member",
              low: 5.73,
              high: 6.07,
              name: "Non-member"
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
