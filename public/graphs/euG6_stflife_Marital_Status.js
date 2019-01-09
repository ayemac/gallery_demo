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
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              y: 6.0801,
              name: "Never married"
            },
            {
              predicted: 6.4468,
              conf.low: 6.3803,
              conf.high: 6.5132,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              y: 6.4468,
              name: "Married"
            },
            {
              predicted: 5.8621,
              conf.low: 5.7924,
              conf.high: 5.9319,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              y: 5.8621,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.9814,
              conf.low: 5.9115,
              conf.high: 6.0512,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              y: 5.9814,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              low: 6.01,
              high: 6.15,
              name: "Never married"
            },
            {
              predicted: 6.4468,
              conf.low: 6.3803,
              conf.high: 6.5132,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              low: 6.38,
              high: 6.51,
              name: "Married"
            },
            {
              predicted: 5.8621,
              conf.low: 5.7924,
              conf.high: 5.9319,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              low: 5.79,
              high: 5.93,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.9814,
              conf.low: 5.9115,
              conf.high: 6.0512,
              id: "Marital_Status",
              var: "stflife",
              displayName: "Marital Status",
              low: 5.91,
              high: 6.05,
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
