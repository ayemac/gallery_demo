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
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              y: 4.4109,
              name: "Low Income"
            },
            {
              predicted: 4.5835,
              conf.low: 4.5138,
              conf.high: 4.6533,
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              y: 4.5835,
              name: "Middle Income"
            },
            {
              predicted: 4.6293,
              conf.low: 4.5577,
              conf.high: 4.7009,
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              y: 4.6293,
              name: "High Income"
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
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              low: 4.34,
              high: 4.48,
              name: "Low Income"
            },
            {
              predicted: 4.5835,
              conf.low: 4.5138,
              conf.high: 4.6533,
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              low: 4.51,
              high: 4.65,
              name: "Middle Income"
            },
            {
              predicted: 4.6293,
              conf.low: 4.5577,
              conf.high: 4.7009,
              id: "income",
              var: "pplhlp",
              displayName: "Income",
              low: 4.56,
              high: 4.7,
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
