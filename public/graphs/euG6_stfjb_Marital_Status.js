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
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              y: 5.9145,
              name: "Never married"
            },
            {
              predicted: 6.0508,
              conf.low: 5.8763,
              conf.high: 6.2253,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              y: 6.0508,
              name: "Married"
            },
            {
              predicted: 5.9367,
              conf.low: 5.7538,
              conf.high: 6.1196,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              y: 5.9367,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.0699,
              conf.low: 5.8635,
              conf.high: 6.2763,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              y: 6.0699,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              low: 5.74,
              high: 6.09,
              name: "Never married"
            },
            {
              predicted: 6.0508,
              conf.low: 5.8763,
              conf.high: 6.2253,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              low: 5.88,
              high: 6.23,
              name: "Married"
            },
            {
              predicted: 5.9367,
              conf.low: 5.7538,
              conf.high: 6.1196,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              low: 5.75,
              high: 6.12,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.0699,
              conf.low: 5.8635,
              conf.high: 6.2763,
              id: "Marital_Status",
              var: "stfjb",
              displayName: "Marital Status",
              low: 5.86,
              high: 6.28,
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
