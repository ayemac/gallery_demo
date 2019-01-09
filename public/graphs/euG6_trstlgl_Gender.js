$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Gender\n  <br/>\n<\/h4>",
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
              id: "Gender",
              var: "trstlgl",
              displayName: "Gender",
              y: 5.4946,
              name: "Female"
            },
            {
              predicted: 5.5333,
              conf.low: 5.4552,
              conf.high: 5.6114,
              id: "Gender",
              var: "trstlgl",
              displayName: "Gender",
              y: 5.5333,
              name: "Male"
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
              id: "Gender",
              var: "trstlgl",
              displayName: "Gender",
              low: 5.42,
              high: 5.57,
              name: "Female"
            },
            {
              predicted: 5.5333,
              conf.low: 5.4552,
              conf.high: 5.6114,
              id: "Gender",
              var: "trstlgl",
              displayName: "Gender",
              low: 5.46,
              high: 5.61,
              name: "Male"
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
