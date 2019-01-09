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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "income",
              var: "trstep",
              displayName: "Income",
              y: 4.842,
              name: "Low Income"
            },
            {
              predicted: 4.9553,
              conf.low: 4.8742,
              conf.high: 5.0364,
              id: "income",
              var: "trstep",
              displayName: "Income",
              y: 4.9553,
              name: "Middle Income"
            },
            {
              predicted: 5.1205,
              conf.low: 5.0373,
              conf.high: 5.2037,
              id: "income",
              var: "trstep",
              displayName: "Income",
              y: 5.1205,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "income",
              var: "trstep",
              displayName: "Income",
              low: 4.76,
              high: 4.92,
              name: "Low Income"
            },
            {
              predicted: 4.9553,
              conf.low: 4.8742,
              conf.high: 5.0364,
              id: "income",
              var: "trstep",
              displayName: "Income",
              low: 4.87,
              high: 5.04,
              name: "Middle Income"
            },
            {
              predicted: 5.1205,
              conf.low: 5.0373,
              conf.high: 5.2037,
              id: "income",
              var: "trstep",
              displayName: "Income",
              low: 5.04,
              high: 5.2,
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
