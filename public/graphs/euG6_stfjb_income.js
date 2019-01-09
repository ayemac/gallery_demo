$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Income\n  <br/>\n<\/h4>",
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
              id: "income",
              var: "stfjb",
              displayName: "Income",
              y: 5.9145,
              name: "Low Income"
            },
            {
              predicted: 6.2357,
              conf.low: 6.0642,
              conf.high: 6.4073,
              id: "income",
              var: "stfjb",
              displayName: "Income",
              y: 6.2357,
              name: "Middle Income"
            },
            {
              predicted: 6.3525,
              conf.low: 6.1769,
              conf.high: 6.528,
              id: "income",
              var: "stfjb",
              displayName: "Income",
              y: 6.3525,
              name: "High Income"
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
              id: "income",
              var: "stfjb",
              displayName: "Income",
              low: 5.74,
              high: 6.09,
              name: "Low Income"
            },
            {
              predicted: 6.2357,
              conf.low: 6.0642,
              conf.high: 6.4073,
              id: "income",
              var: "stfjb",
              displayName: "Income",
              low: 6.06,
              high: 6.41,
              name: "Middle Income"
            },
            {
              predicted: 6.3525,
              conf.low: 6.1769,
              conf.high: 6.528,
              id: "income",
              var: "stfjb",
              displayName: "Income",
              low: 6.18,
              high: 6.53,
              name: "High Income"
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
