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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              y: 4.9488,
              name: "Low Income"
            },
            {
              predicted: 5.1204,
              conf.low: 5.0446,
              conf.high: 5.1963,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              y: 5.1204,
              name: "Middle Income"
            },
            {
              predicted: 5.3077,
              conf.low: 5.2298,
              conf.high: 5.3856,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              y: 5.3077,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              low: 4.87,
              high: 5.03,
              name: "Low Income"
            },
            {
              predicted: 5.1204,
              conf.low: 5.0446,
              conf.high: 5.1963,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              low: 5.04,
              high: 5.2,
              name: "Middle Income"
            },
            {
              predicted: 5.3077,
              conf.low: 5.2298,
              conf.high: 5.3856,
              id: "income",
              var: "imbgeco",
              displayName: "Income",
              low: 5.23,
              high: 5.39,
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
