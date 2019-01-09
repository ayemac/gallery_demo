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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              y: 6.2757,
              name: "Current Member"
            },
            {
              predicted: 6.0907,
              conf.low: 6.016,
              conf.high: 6.1654,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              y: 6.0907,
              name: "Former Member"
            },
            {
              predicted: 6.2076,
              conf.low: 6.136,
              conf.high: 6.2791,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              y: 6.2076,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              low: 6.2,
              high: 6.35,
              name: "Current Member"
            },
            {
              predicted: 6.0907,
              conf.low: 6.016,
              conf.high: 6.1654,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              low: 6.02,
              high: 6.17,
              name: "Former Member"
            },
            {
              predicted: 6.2076,
              conf.low: 6.136,
              conf.high: 6.2791,
              id: "union",
              var: "trstplc",
              displayName: "Union Member",
              low: 6.14,
              high: 6.28,
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
