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
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              y: 6.6558,
              name: "Never married"
            },
            {
              predicted: 7.1256,
              conf.low: 7.0661,
              conf.high: 7.1851,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              y: 7.1256,
              name: "Married"
            },
            {
              predicted: 6.4699,
              conf.low: 6.4074,
              conf.high: 6.5324,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              y: 6.4699,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.3796,
              conf.low: 6.317,
              conf.high: 6.4421,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              y: 6.3796,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              low: 6.6,
              high: 6.71,
              name: "Never married"
            },
            {
              predicted: 7.1256,
              conf.low: 7.0661,
              conf.high: 7.1851,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              low: 7.07,
              high: 7.19,
              name: "Married"
            },
            {
              predicted: 6.4699,
              conf.low: 6.4074,
              conf.high: 6.5324,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              low: 6.41,
              high: 6.53,
              name: "Divorced/Sep"
            },
            {
              predicted: 6.3796,
              conf.low: 6.317,
              conf.high: 6.4421,
              id: "Marital_Status",
              var: "happy",
              displayName: "Marital Status",
              low: 6.32,
              high: 6.44,
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
