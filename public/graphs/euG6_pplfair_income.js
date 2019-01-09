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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              y: 5.1436,
              name: "Low Income"
            },
            {
              predicted: 5.3757,
              conf.low: 5.3072,
              conf.high: 5.4443,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              y: 5.3757,
              name: "Middle Income"
            },
            {
              predicted: 5.5147,
              conf.low: 5.4443,
              conf.high: 5.5851,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              y: 5.5147,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              low: 5.07,
              high: 5.21,
              name: "Low Income"
            },
            {
              predicted: 5.3757,
              conf.low: 5.3072,
              conf.high: 5.4443,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              low: 5.31,
              high: 5.44,
              name: "Middle Income"
            },
            {
              predicted: 5.5147,
              conf.low: 5.4443,
              conf.high: 5.5851,
              id: "income",
              var: "pplfair",
              displayName: "Income",
              low: 5.44,
              high: 5.59,
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
