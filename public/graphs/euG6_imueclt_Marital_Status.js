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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              y: 6.1338,
              name: "Never married"
            },
            {
              predicted: 6.0043,
              conf.low: 5.9268,
              conf.high: 6.0817,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              y: 6.0043,
              name: "Married"
            },
            {
              predicted: 5.9642,
              conf.low: 5.8829,
              conf.high: 6.0455,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              y: 5.9642,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.9531,
              conf.low: 5.8715,
              conf.high: 6.0348,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              y: 5.9531,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              low: 6.06,
              high: 6.21,
              name: "Never married"
            },
            {
              predicted: 6.0043,
              conf.low: 5.9268,
              conf.high: 6.0817,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              low: 5.93,
              high: 6.08,
              name: "Married"
            },
            {
              predicted: 5.9642,
              conf.low: 5.8829,
              conf.high: 6.0455,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              low: 5.88,
              high: 6.05,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.9531,
              conf.low: 5.8715,
              conf.high: 6.0348,
              id: "Marital_Status",
              var: "imueclt",
              displayName: "Marital Status",
              low: 5.87,
              high: 6.03,
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
