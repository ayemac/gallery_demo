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
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              y: 5.6238,
              name: "Never married"
            },
            {
              predicted: 5.538,
              conf.low: 5.4389,
              conf.high: 5.6372,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              y: 5.538,
              name: "Married"
            },
            {
              predicted: 5.4246,
              conf.low: 5.3206,
              conf.high: 5.5287,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              y: 5.4246,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.4225,
              conf.low: 5.3176,
              conf.high: 5.5275,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              y: 5.4225,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              low: 5.53,
              high: 5.72,
              name: "Never married"
            },
            {
              predicted: 5.538,
              conf.low: 5.4389,
              conf.high: 5.6372,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              low: 5.44,
              high: 5.64,
              name: "Married"
            },
            {
              predicted: 5.4246,
              conf.low: 5.3206,
              conf.high: 5.5287,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              low: 5.32,
              high: 5.53,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.4225,
              conf.low: 5.3176,
              conf.high: 5.5275,
              id: "Marital_Status",
              var: "euftf",
              displayName: "Marital Status",
              low: 5.32,
              high: 5.53,
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
