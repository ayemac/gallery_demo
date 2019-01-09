$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Marital Status\n  <br/>\n<\/h4>",
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
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              y: 6.2757,
              name: "Never married"
            },
            {
              predicted: 6.3874,
              conf.low: 6.311,
              conf.high: 6.4637,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              y: 6.3874,
              name: "Married"
            },
            {
              predicted: 6.1457,
              conf.low: 6.0655,
              conf.high: 6.2259,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              y: 6.1457,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.4512,
              conf.low: 6.3708,
              conf.high: 6.5315,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              y: 6.4512,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              low: 6.2,
              high: 6.35,
              name: "Never married"
            },
            {
              predicted: 6.3874,
              conf.low: 6.311,
              conf.high: 6.4637,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              low: 6.31,
              high: 6.46,
              name: "Married"
            },
            {
              predicted: 6.1457,
              conf.low: 6.0655,
              conf.high: 6.2259,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              low: 6.07,
              high: 6.23,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.4512,
              conf.low: 6.3708,
              conf.high: 6.5315,
              id: "Marital_Status",
              var: "trstplc",
              displayName: "Marital Status",
              low: 6.37,
              high: 6.53,
              name: "Widowed"
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
