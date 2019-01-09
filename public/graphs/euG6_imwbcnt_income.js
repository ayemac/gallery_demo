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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              y: 4.9648,
              name: "Low Income"
            },
            {
              predicted: 5.0976,
              conf.low: 5.0272,
              conf.high: 5.1681,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              y: 5.0976,
              name: "Middle Income"
            },
            {
              predicted: 5.2256,
              conf.low: 5.1534,
              conf.high: 5.2979,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              y: 5.2256,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              low: 4.89,
              high: 5.04,
              name: "Low Income"
            },
            {
              predicted: 5.0976,
              conf.low: 5.0272,
              conf.high: 5.1681,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              low: 5.03,
              high: 5.17,
              name: "Middle Income"
            },
            {
              predicted: 5.2256,
              conf.low: 5.1534,
              conf.high: 5.2979,
              id: "income",
              var: "imwbcnt",
              displayName: "Income",
              low: 5.15,
              high: 5.3,
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
