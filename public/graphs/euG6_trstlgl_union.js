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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              y: 5.4946,
              name: "Current Member"
            },
            {
              predicted: 5.3146,
              conf.low: 5.2374,
              conf.high: 5.3919,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              y: 5.3146,
              name: "Former Member"
            },
            {
              predicted: 5.4545,
              conf.low: 5.3805,
              conf.high: 5.5285,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              y: 5.4545,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              low: 5.42,
              high: 5.57,
              name: "Current Member"
            },
            {
              predicted: 5.3146,
              conf.low: 5.2374,
              conf.high: 5.3919,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              low: 5.24,
              high: 5.39,
              name: "Former Member"
            },
            {
              predicted: 5.4545,
              conf.low: 5.3805,
              conf.high: 5.5285,
              id: "union",
              var: "trstlgl",
              displayName: "Union Member",
              low: 5.38,
              high: 5.53,
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
