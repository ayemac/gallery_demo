$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              y: 5.4946,
              name: "Low Education"
            },
            {
              predicted: 5.5406,
              conf.low: 5.4636,
              conf.high: 5.6177,
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              y: 5.5406,
              name: "Middle Education"
            },
            {
              predicted: 6.0009,
              conf.low: 5.9228,
              conf.high: 6.0791,
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              y: 6.0009,
              name: "High Education"
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
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              low: 5.42,
              high: 5.57,
              name: "Low Education"
            },
            {
              predicted: 5.5406,
              conf.low: 5.4636,
              conf.high: 5.6177,
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              low: 5.46,
              high: 5.62,
              name: "Middle Education"
            },
            {
              predicted: 6.0009,
              conf.low: 5.9228,
              conf.high: 6.0791,
              id: "Education",
              var: "trstlgl",
              displayName: "Education",
              low: 5.92,
              high: 6.08,
              name: "High Education"
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
