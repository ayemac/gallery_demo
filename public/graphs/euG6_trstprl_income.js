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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              y: 4.6353,
              name: "Low Income"
            },
            {
              predicted: 4.8043,
              conf.low: 4.7287,
              conf.high: 4.8798,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              y: 4.8043,
              name: "Middle Income"
            },
            {
              predicted: 5.0153,
              conf.low: 4.9378,
              conf.high: 5.0928,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              y: 5.0153,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              low: 4.56,
              high: 4.71,
              name: "Low Income"
            },
            {
              predicted: 4.8043,
              conf.low: 4.7287,
              conf.high: 4.8798,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              low: 4.73,
              high: 4.88,
              name: "Middle Income"
            },
            {
              predicted: 5.0153,
              conf.low: 4.9378,
              conf.high: 5.0928,
              id: "income",
              var: "trstprl",
              displayName: "Income",
              low: 4.94,
              high: 5.09,
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
