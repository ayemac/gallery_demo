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
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              y: 6.1338,
              name: "Current Member"
            },
            {
              predicted: 6.0943,
              conf.low: 6.0186,
              conf.high: 6.1701,
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              y: 6.0943,
              name: "Former Member"
            },
            {
              predicted: 6.071,
              conf.low: 5.9984,
              conf.high: 6.1436,
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              y: 6.071,
              name: "Non-member"
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
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              low: 6.06,
              high: 6.21,
              name: "Current Member"
            },
            {
              predicted: 6.0943,
              conf.low: 6.0186,
              conf.high: 6.1701,
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              low: 6.02,
              high: 6.17,
              name: "Former Member"
            },
            {
              predicted: 6.071,
              conf.low: 5.9984,
              conf.high: 6.1436,
              id: "union",
              var: "imueclt",
              displayName: "Union Member",
              low: 6,
              high: 6.14,
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
