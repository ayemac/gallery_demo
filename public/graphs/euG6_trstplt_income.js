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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              y: 3.7098,
              name: "Low Income"
            },
            {
              predicted: 3.8453,
              conf.low: 3.7755,
              conf.high: 3.9151,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              y: 3.8453,
              name: "Middle Income"
            },
            {
              predicted: 3.9987,
              conf.low: 3.927,
              conf.high: 4.0703,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              y: 3.9987,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              low: 3.64,
              high: 3.78,
              name: "Low Income"
            },
            {
              predicted: 3.8453,
              conf.low: 3.7755,
              conf.high: 3.9151,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              low: 3.78,
              high: 3.92,
              name: "Middle Income"
            },
            {
              predicted: 3.9987,
              conf.low: 3.927,
              conf.high: 4.0703,
              id: "income",
              var: "trstplt",
              displayName: "Income",
              low: 3.93,
              high: 4.07,
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
