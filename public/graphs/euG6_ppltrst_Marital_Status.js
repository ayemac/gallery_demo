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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              y: 4.1117,
              name: "Never married"
            },
            {
              predicted: 4.0603,
              conf.low: 3.9868,
              conf.high: 4.1338,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              y: 4.0603,
              name: "Married"
            },
            {
              predicted: 3.9036,
              conf.low: 3.8265,
              conf.high: 3.9807,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              y: 3.9036,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.0039,
              conf.low: 3.9267,
              conf.high: 4.0812,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              y: 4.0039,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              low: 4.04,
              high: 4.18,
              name: "Never married"
            },
            {
              predicted: 4.0603,
              conf.low: 3.9868,
              conf.high: 4.1338,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              low: 3.99,
              high: 4.13,
              name: "Married"
            },
            {
              predicted: 3.9036,
              conf.low: 3.8265,
              conf.high: 3.9807,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              low: 3.83,
              high: 3.98,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.0039,
              conf.low: 3.9267,
              conf.high: 4.0812,
              id: "Marital_Status",
              var: "ppltrst",
              displayName: "Marital Status",
              low: 3.93,
              high: 4.08,
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
