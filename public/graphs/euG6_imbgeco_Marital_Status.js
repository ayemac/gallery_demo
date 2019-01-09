$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Marital Status\n  <br/>\n<\/h4>",
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
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              y: 4.9488,
              name: "Never married"
            },
            {
              predicted: 4.8652,
              conf.low: 4.7878,
              conf.high: 4.9426,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              y: 4.8652,
              name: "Married"
            },
            {
              predicted: 4.773,
              conf.low: 4.6918,
              conf.high: 4.8543,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              y: 4.773,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.7904,
              conf.low: 4.7089,
              conf.high: 4.872,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              y: 4.7904,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              low: 4.87,
              high: 5.03,
              name: "Never married"
            },
            {
              predicted: 4.8652,
              conf.low: 4.7878,
              conf.high: 4.9426,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              low: 4.79,
              high: 4.94,
              name: "Married"
            },
            {
              predicted: 4.773,
              conf.low: 4.6918,
              conf.high: 4.8543,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              low: 4.69,
              high: 4.85,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.7904,
              conf.low: 4.7089,
              conf.high: 4.872,
              id: "Marital_Status",
              var: "imbgeco",
              displayName: "Marital Status",
              low: 4.71,
              high: 4.87,
              name: "Widowed"
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
