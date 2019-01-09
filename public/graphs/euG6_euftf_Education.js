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
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              y: 5.6238,
              name: "Low Education"
            },
            {
              predicted: 5.7015,
              conf.low: 5.6051,
              conf.high: 5.798,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              y: 5.7015,
              name: "Middle Education"
            },
            {
              predicted: 6.1808,
              conf.low: 6.083,
              conf.high: 6.2786,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              y: 6.1808,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              low: 5.53,
              high: 5.72,
              name: "Low Education"
            },
            {
              predicted: 5.7015,
              conf.low: 5.6051,
              conf.high: 5.798,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              low: 5.61,
              high: 5.8,
              name: "Middle Education"
            },
            {
              predicted: 6.1808,
              conf.low: 6.083,
              conf.high: 6.2786,
              id: "Education",
              var: "euftf",
              displayName: "Education",
              low: 6.08,
              high: 6.28,
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
