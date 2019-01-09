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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              y: 6.2757,
              name: "Low Income"
            },
            {
              predicted: 6.407,
              conf.low: 6.3322,
              conf.high: 6.4819,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              y: 6.407,
              name: "Middle Income"
            },
            {
              predicted: 6.5605,
              conf.low: 6.4837,
              conf.high: 6.6374,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              y: 6.5605,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              low: 6.2,
              high: 6.35,
              name: "Low Income"
            },
            {
              predicted: 6.407,
              conf.low: 6.3322,
              conf.high: 6.4819,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              low: 6.33,
              high: 6.48,
              name: "Middle Income"
            },
            {
              predicted: 6.5605,
              conf.low: 6.4837,
              conf.high: 6.6374,
              id: "income",
              var: "trstplc",
              displayName: "Income",
              low: 6.48,
              high: 6.64,
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
