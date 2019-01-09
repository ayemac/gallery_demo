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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "income",
              var: "happy",
              displayName: "Income",
              y: 6.6558,
              name: "Low Income"
            },
            {
              predicted: 7.0659,
              conf.low: 7.0076,
              conf.high: 7.1242,
              id: "income",
              var: "happy",
              displayName: "Income",
              y: 7.0659,
              name: "Middle Income"
            },
            {
              predicted: 7.2557,
              conf.low: 7.1958,
              conf.high: 7.3155,
              id: "income",
              var: "happy",
              displayName: "Income",
              y: 7.2557,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "income",
              var: "happy",
              displayName: "Income",
              low: 6.6,
              high: 6.71,
              name: "Low Income"
            },
            {
              predicted: 7.0659,
              conf.low: 7.0076,
              conf.high: 7.1242,
              id: "income",
              var: "happy",
              displayName: "Income",
              low: 7.01,
              high: 7.12,
              name: "Middle Income"
            },
            {
              predicted: 7.2557,
              conf.low: 7.1958,
              conf.high: 7.3155,
              id: "income",
              var: "happy",
              displayName: "Income",
              low: 7.2,
              high: 7.32,
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
