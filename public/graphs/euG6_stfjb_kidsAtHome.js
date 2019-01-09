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
              id: "kidsAtHome",
              var: "stfjb",
              displayName: "Kids at Home",
              y: 5.9145,
              name: "Kids at Home"
            },
            {
              predicted: 5.9242,
              conf.low: 5.7542,
              conf.high: 6.0942,
              id: "kidsAtHome",
              var: "stfjb",
              displayName: "Kids at Home",
              y: 5.9242,
              name: "No Kids at Home"
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
              id: "kidsAtHome",
              var: "stfjb",
              displayName: "Kids at Home",
              low: 5.74,
              high: 6.09,
              name: "Kids at Home"
            },
            {
              predicted: 5.9242,
              conf.low: 5.7542,
              conf.high: 6.0942,
              id: "kidsAtHome",
              var: "stfjb",
              displayName: "Kids at Home",
              low: 5.75,
              high: 6.09,
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
