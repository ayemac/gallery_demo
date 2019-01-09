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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              y: 4.6353,
              name: "Never married"
            },
            {
              predicted: 4.5887,
              conf.low: 4.5116,
              conf.high: 4.6658,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              y: 4.5887,
              name: "Married"
            },
            {
              predicted: 4.3901,
              conf.low: 4.3093,
              conf.high: 4.471,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              y: 4.3901,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.6529,
              conf.low: 4.5718,
              conf.high: 4.7339,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              y: 4.6529,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              low: 4.56,
              high: 4.71,
              name: "Never married"
            },
            {
              predicted: 4.5887,
              conf.low: 4.5116,
              conf.high: 4.6658,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              low: 4.51,
              high: 4.67,
              name: "Married"
            },
            {
              predicted: 4.3901,
              conf.low: 4.3093,
              conf.high: 4.471,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              low: 4.31,
              high: 4.47,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.6529,
              conf.low: 4.5718,
              conf.high: 4.7339,
              id: "Marital_Status",
              var: "trstprl",
              displayName: "Marital Status",
              low: 4.57,
              high: 4.73,
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
