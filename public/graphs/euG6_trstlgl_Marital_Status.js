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
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              y: 5.4946,
              name: "Never married"
            },
            {
              predicted: 5.4663,
              conf.low: 5.3873,
              conf.high: 5.5452,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              y: 5.4663,
              name: "Married"
            },
            {
              predicted: 5.2611,
              conf.low: 5.1782,
              conf.high: 5.3439,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              y: 5.2611,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.5952,
              conf.low: 5.5121,
              conf.high: 5.6783,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              y: 5.5952,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              low: 5.42,
              high: 5.57,
              name: "Never married"
            },
            {
              predicted: 5.4663,
              conf.low: 5.3873,
              conf.high: 5.5452,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              low: 5.39,
              high: 5.55,
              name: "Married"
            },
            {
              predicted: 5.2611,
              conf.low: 5.1782,
              conf.high: 5.3439,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              low: 5.18,
              high: 5.34,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.5952,
              conf.low: 5.5121,
              conf.high: 5.6783,
              id: "Marital_Status",
              var: "trstlgl",
              displayName: "Marital Status",
              low: 5.51,
              high: 5.68,
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
