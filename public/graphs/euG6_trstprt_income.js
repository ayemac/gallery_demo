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
              id: "income",
              var: "trstprt",
              displayName: "Income",
              y: 3.7422,
              name: "Low Income"
            },
            {
              predicted: 3.8823,
              conf.low: 3.8097,
              conf.high: 3.9549,
              id: "income",
              var: "trstprt",
              displayName: "Income",
              y: 3.8823,
              name: "Middle Income"
            },
            {
              predicted: 4.0122,
              conf.low: 3.9378,
              conf.high: 4.0866,
              id: "income",
              var: "trstprt",
              displayName: "Income",
              y: 4.0122,
              name: "High Income"
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
              id: "income",
              var: "trstprt",
              displayName: "Income",
              low: 3.67,
              high: 3.82,
              name: "Low Income"
            },
            {
              predicted: 3.8823,
              conf.low: 3.8097,
              conf.high: 3.9549,
              id: "income",
              var: "trstprt",
              displayName: "Income",
              low: 3.81,
              high: 3.95,
              name: "Middle Income"
            },
            {
              predicted: 4.0122,
              conf.low: 3.9378,
              conf.high: 4.0866,
              id: "income",
              var: "trstprt",
              displayName: "Income",
              low: 3.94,
              high: 4.09,
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
