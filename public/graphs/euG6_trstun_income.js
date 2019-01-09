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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "income",
              var: "trstun",
              displayName: "Income",
              y: 5.0693,
              name: "Low Income"
            },
            {
              predicted: 5.2231,
              conf.low: 5.1416,
              conf.high: 5.3046,
              id: "income",
              var: "trstun",
              displayName: "Income",
              y: 5.2231,
              name: "Middle Income"
            },
            {
              predicted: 5.3829,
              conf.low: 5.2993,
              conf.high: 5.4665,
              id: "income",
              var: "trstun",
              displayName: "Income",
              y: 5.3829,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "income",
              var: "trstun",
              displayName: "Income",
              low: 4.99,
              high: 5.15,
              name: "Low Income"
            },
            {
              predicted: 5.2231,
              conf.low: 5.1416,
              conf.high: 5.3046,
              id: "income",
              var: "trstun",
              displayName: "Income",
              low: 5.14,
              high: 5.3,
              name: "Middle Income"
            },
            {
              predicted: 5.3829,
              conf.low: 5.2993,
              conf.high: 5.4665,
              id: "income",
              var: "trstun",
              displayName: "Income",
              low: 5.3,
              high: 5.47,
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
