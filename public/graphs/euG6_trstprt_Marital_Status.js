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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              y: 3.7422,
              name: "Never married"
            },
            {
              predicted: 3.6719,
              conf.low: 3.5979,
              conf.high: 3.7459,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              y: 3.6719,
              name: "Married"
            },
            {
              predicted: 3.5199,
              conf.low: 3.4422,
              conf.high: 3.5975,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              y: 3.5199,
              name: "Divorced/Sep"
            },
            {
              predicted: 3.7624,
              conf.low: 3.6845,
              conf.high: 3.8403,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              y: 3.7624,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              low: 3.67,
              high: 3.82,
              name: "Never married"
            },
            {
              predicted: 3.6719,
              conf.low: 3.5979,
              conf.high: 3.7459,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              low: 3.6,
              high: 3.75,
              name: "Married"
            },
            {
              predicted: 3.5199,
              conf.low: 3.4422,
              conf.high: 3.5975,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              low: 3.44,
              high: 3.6,
              name: "Divorced/Sep"
            },
            {
              predicted: 3.7624,
              conf.low: 3.6845,
              conf.high: 3.8403,
              id: "Marital_Status",
              var: "trstprt",
              displayName: "Marital Status",
              low: 3.68,
              high: 3.84,
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
