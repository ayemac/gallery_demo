$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religion\n  <br/>\n<\/h4>",
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
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 5.4946,
              name: "Roman Catholic"
            },
            {
              predicted: 5.6032,
              conf.low: 5.524,
              conf.high: 5.6823,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 5.6032,
              name: "Protestant"
            },
            {
              predicted: 5.4108,
              conf.low: 5.3235,
              conf.high: 5.4981,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 5.4108,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.4055,
              conf.low: 5.3285,
              conf.high: 5.4824,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 5.4055,
              name: "Other Religion"
            },
            {
              predicted: 5.1208,
              conf.low: 4.994,
              conf.high: 5.2476,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 5.1208,
              name: "Jewish"
            },
            {
              predicted: 6.048,
              conf.low: 5.9581,
              conf.high: 6.1378,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              y: 6.048,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 5.42,
              high: 5.57,
              name: "Roman Catholic"
            },
            {
              predicted: 5.6032,
              conf.low: 5.524,
              conf.high: 5.6823,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 5.52,
              high: 5.68,
              name: "Protestant"
            },
            {
              predicted: 5.4108,
              conf.low: 5.3235,
              conf.high: 5.4981,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 5.32,
              high: 5.5,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.4055,
              conf.low: 5.3285,
              conf.high: 5.4824,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 5.33,
              high: 5.48,
              name: "Other Religion"
            },
            {
              predicted: 5.1208,
              conf.low: 4.994,
              conf.high: 5.2476,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 4.99,
              high: 5.25,
              name: "Jewish"
            },
            {
              predicted: 6.048,
              conf.low: 5.9581,
              conf.high: 6.1378,
              id: "religiousDenom",
              var: "trstlgl",
              displayName: "Religion",
              low: 5.96,
              high: 6.14,
              name: "Islamic"
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
