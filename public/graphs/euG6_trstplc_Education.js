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
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              y: 6.2757,
              name: "Low Education"
            },
            {
              predicted: 6.2066,
              conf.low: 6.1321,
              conf.high: 6.2812,
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              y: 6.2066,
              name: "Middle Education"
            },
            {
              predicted: 6.3921,
              conf.low: 6.3165,
              conf.high: 6.4678,
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              y: 6.3921,
              name: "High Education"
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
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              low: 6.2,
              high: 6.35,
              name: "Low Education"
            },
            {
              predicted: 6.2066,
              conf.low: 6.1321,
              conf.high: 6.2812,
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              low: 6.13,
              high: 6.28,
              name: "Middle Education"
            },
            {
              predicted: 6.3921,
              conf.low: 6.3165,
              conf.high: 6.4678,
              id: "Education",
              var: "trstplc",
              displayName: "Education",
              low: 6.32,
              high: 6.47,
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
