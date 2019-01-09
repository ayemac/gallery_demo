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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "income",
              var: "stflife",
              displayName: "Income",
              y: 6.0801,
              name: "Low Income"
            },
            {
              predicted: 6.5985,
              conf.low: 6.5334,
              conf.high: 6.6636,
              id: "income",
              var: "stflife",
              displayName: "Income",
              y: 6.5985,
              name: "Middle Income"
            },
            {
              predicted: 6.8897,
              conf.low: 6.8228,
              conf.high: 6.9565,
              id: "income",
              var: "stflife",
              displayName: "Income",
              y: 6.8897,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "income",
              var: "stflife",
              displayName: "Income",
              low: 6.01,
              high: 6.15,
              name: "Low Income"
            },
            {
              predicted: 6.5985,
              conf.low: 6.5334,
              conf.high: 6.6636,
              id: "income",
              var: "stflife",
              displayName: "Income",
              low: 6.53,
              high: 6.66,
              name: "Middle Income"
            },
            {
              predicted: 6.8897,
              conf.low: 6.8228,
              conf.high: 6.9565,
              id: "income",
              var: "stflife",
              displayName: "Income",
              low: 6.82,
              high: 6.96,
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
