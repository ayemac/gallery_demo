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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              y: 5.0693,
              name: "Never married"
            },
            {
              predicted: 4.9497,
              conf.low: 4.8665,
              conf.high: 5.0329,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              y: 4.9497,
              name: "Married"
            },
            {
              predicted: 4.8869,
              conf.low: 4.7996,
              conf.high: 4.9743,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              y: 4.8869,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.953,
              conf.low: 4.8649,
              conf.high: 5.041,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              y: 4.953,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              low: 4.99,
              high: 5.15,
              name: "Never married"
            },
            {
              predicted: 4.9497,
              conf.low: 4.8665,
              conf.high: 5.0329,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              low: 4.87,
              high: 5.03,
              name: "Married"
            },
            {
              predicted: 4.8869,
              conf.low: 4.7996,
              conf.high: 4.9743,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              low: 4.8,
              high: 4.97,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.953,
              conf.low: 4.8649,
              conf.high: 5.041,
              id: "Marital_Status",
              var: "trstun",
              displayName: "Marital Status",
              low: 4.86,
              high: 5.04,
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
