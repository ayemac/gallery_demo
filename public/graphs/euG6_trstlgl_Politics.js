$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Politics\n  <br/>\n<\/h4>",
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
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              y: 5.4946,
              name: "Political Left"
            },
            {
              predicted: 5.365,
              conf.low: 5.2869,
              conf.high: 5.4432,
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              y: 5.365,
              name: "Political Center"
            },
            {
              predicted: 5.6372,
              conf.low: 5.5578,
              conf.high: 5.7166,
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              y: 5.6372,
              name: "Political Right"
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
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              low: 5.42,
              high: 5.57,
              name: "Political Left"
            },
            {
              predicted: 5.365,
              conf.low: 5.2869,
              conf.high: 5.4432,
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              low: 5.29,
              high: 5.44,
              name: "Political Center"
            },
            {
              predicted: 5.6372,
              conf.low: 5.5578,
              conf.high: 5.7166,
              id: "Politics",
              var: "trstlgl",
              displayName: "Politics",
              low: 5.56,
              high: 5.72,
              name: "Political Right"
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
