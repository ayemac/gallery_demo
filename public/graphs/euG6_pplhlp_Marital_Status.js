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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              y: 4.4109,
              name: "Never married"
            },
            {
              predicted: 4.4114,
              conf.low: 4.3403,
              conf.high: 4.4826,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              y: 4.4114,
              name: "Married"
            },
            {
              predicted: 4.2206,
              conf.low: 4.1459,
              conf.high: 4.2953,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              y: 4.2206,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.4291,
              conf.low: 4.3543,
              conf.high: 4.5039,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              y: 4.4291,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              low: 4.34,
              high: 4.48,
              name: "Never married"
            },
            {
              predicted: 4.4114,
              conf.low: 4.3403,
              conf.high: 4.4826,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              low: 4.34,
              high: 4.48,
              name: "Married"
            },
            {
              predicted: 4.2206,
              conf.low: 4.1459,
              conf.high: 4.2953,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              low: 4.15,
              high: 4.3,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.4291,
              conf.low: 4.3543,
              conf.high: 4.5039,
              id: "Marital_Status",
              var: "pplhlp",
              displayName: "Marital Status",
              low: 4.35,
              high: 4.5,
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
