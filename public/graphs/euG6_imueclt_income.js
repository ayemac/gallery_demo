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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              y: 6.1338,
              name: "Low Income"
            },
            {
              predicted: 6.2755,
              conf.low: 6.1996,
              conf.high: 6.3514,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              y: 6.2755,
              name: "Middle Income"
            },
            {
              predicted: 6.4569,
              conf.low: 6.379,
              conf.high: 6.5348,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              y: 6.4569,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              low: 6.06,
              high: 6.21,
              name: "Low Income"
            },
            {
              predicted: 6.2755,
              conf.low: 6.1996,
              conf.high: 6.3514,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              low: 6.2,
              high: 6.35,
              name: "Middle Income"
            },
            {
              predicted: 6.4569,
              conf.low: 6.379,
              conf.high: 6.5348,
              id: "income",
              var: "imueclt",
              displayName: "Income",
              low: 6.38,
              high: 6.53,
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
