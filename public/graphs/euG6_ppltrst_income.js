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
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              y: 4.1117,
              name: "Low Income"
            },
            {
              predicted: 4.3578,
              conf.low: 4.2858,
              conf.high: 4.4298,
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              y: 4.3578,
              name: "Middle Income"
            },
            {
              predicted: 4.5392,
              conf.low: 4.4652,
              conf.high: 4.6131,
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              y: 4.5392,
              name: "High Income"
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
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              low: 4.04,
              high: 4.18,
              name: "Low Income"
            },
            {
              predicted: 4.3578,
              conf.low: 4.2858,
              conf.high: 4.4298,
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              low: 4.29,
              high: 4.43,
              name: "Middle Income"
            },
            {
              predicted: 4.5392,
              conf.low: 4.4652,
              conf.high: 4.6131,
              id: "income",
              var: "ppltrst",
              displayName: "Income",
              low: 4.47,
              high: 4.61,
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
