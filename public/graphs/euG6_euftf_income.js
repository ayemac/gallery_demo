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
              id: "income",
              var: "euftf",
              displayName: "Income",
              y: 5.6238,
              name: "Low Income"
            },
            {
              predicted: 5.6375,
              conf.low: 5.5404,
              conf.high: 5.7346,
              id: "income",
              var: "euftf",
              displayName: "Income",
              y: 5.6375,
              name: "Middle Income"
            },
            {
              predicted: 5.8106,
              conf.low: 5.7112,
              conf.high: 5.9101,
              id: "income",
              var: "euftf",
              displayName: "Income",
              y: 5.8106,
              name: "High Income"
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
              id: "income",
              var: "euftf",
              displayName: "Income",
              low: 5.53,
              high: 5.72,
              name: "Low Income"
            },
            {
              predicted: 5.6375,
              conf.low: 5.5404,
              conf.high: 5.7346,
              id: "income",
              var: "euftf",
              displayName: "Income",
              low: 5.54,
              high: 5.73,
              name: "Middle Income"
            },
            {
              predicted: 5.8106,
              conf.low: 5.7112,
              conf.high: 5.9101,
              id: "income",
              var: "euftf",
              displayName: "Income",
              low: 5.71,
              high: 5.91,
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
