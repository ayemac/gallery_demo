$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religion\n  <br/>\n<\/h4>",
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
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.6558,
              name: "Roman Catholic"
            },
            {
              predicted: 6.7762,
              conf.low: 6.7165,
              conf.high: 6.8358,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.7762,
              name: "Protestant"
            },
            {
              predicted: 6.5503,
              conf.low: 6.4846,
              conf.high: 6.616,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.5503,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.6663,
              conf.low: 6.6083,
              conf.high: 6.7243,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.6663,
              name: "Other Religion"
            },
            {
              predicted: 6.7029,
              conf.low: 6.6076,
              conf.high: 6.7981,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.7029,
              name: "Jewish"
            },
            {
              predicted: 6.6282,
              conf.low: 6.5607,
              conf.high: 6.6957,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              y: 6.6282,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.6,
              high: 6.71,
              name: "Roman Catholic"
            },
            {
              predicted: 6.7762,
              conf.low: 6.7165,
              conf.high: 6.8358,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.72,
              high: 6.84,
              name: "Protestant"
            },
            {
              predicted: 6.5503,
              conf.low: 6.4846,
              conf.high: 6.616,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.48,
              high: 6.62,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.6663,
              conf.low: 6.6083,
              conf.high: 6.7243,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.61,
              high: 6.72,
              name: "Other Religion"
            },
            {
              predicted: 6.7029,
              conf.low: 6.6076,
              conf.high: 6.7981,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.61,
              high: 6.8,
              name: "Jewish"
            },
            {
              predicted: 6.6282,
              conf.low: 6.5607,
              conf.high: 6.6957,
              id: "religiousDenom",
              var: "happy",
              displayName: "Religion",
              low: 6.56,
              high: 6.7,
              name: "Islamic"
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
