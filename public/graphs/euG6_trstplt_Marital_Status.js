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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              y: 3.7098,
              name: "Never married"
            },
            {
              predicted: 3.6723,
              conf.low: 3.6011,
              conf.high: 3.7436,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              y: 3.6723,
              name: "Married"
            },
            {
              predicted: 3.4866,
              conf.low: 3.4118,
              conf.high: 3.5614,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              y: 3.4866,
              name: "Divorced/Sep"
            },
            {
              predicted: 3.7424,
              conf.low: 3.6675,
              conf.high: 3.8173,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              y: 3.7424,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              low: 3.64,
              high: 3.78,
              name: "Never married"
            },
            {
              predicted: 3.6723,
              conf.low: 3.6011,
              conf.high: 3.7436,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              low: 3.6,
              high: 3.74,
              name: "Married"
            },
            {
              predicted: 3.4866,
              conf.low: 3.4118,
              conf.high: 3.5614,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              low: 3.41,
              high: 3.56,
              name: "Divorced/Sep"
            },
            {
              predicted: 3.7424,
              conf.low: 3.6675,
              conf.high: 3.8173,
              id: "Marital_Status",
              var: "trstplt",
              displayName: "Marital Status",
              low: 3.67,
              high: 3.82,
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
