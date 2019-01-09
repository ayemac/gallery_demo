$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Kids at Home\n  <br/>\n<\/h4>",
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
              id: "kidsAtHome",
              var: "trstlgl",
              displayName: "Kids at Home",
              y: 5.4946,
              name: "Kids at Home"
            },
            {
              predicted: 5.5144,
              conf.low: 5.4387,
              conf.high: 5.5902,
              id: "kidsAtHome",
              var: "trstlgl",
              displayName: "Kids at Home",
              y: 5.5144,
              name: "No Kids at Home"
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
              id: "kidsAtHome",
              var: "trstlgl",
              displayName: "Kids at Home",
              low: 5.42,
              high: 5.57,
              name: "Kids at Home"
            },
            {
              predicted: 5.5144,
              conf.low: 5.4387,
              conf.high: 5.5902,
              id: "kidsAtHome",
              var: "trstlgl",
              displayName: "Kids at Home",
              low: 5.44,
              high: 5.59,
              name: "No Kids at Home"
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
