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
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 5.9145,
              name: "Roman Catholic"
            },
            {
              predicted: 5.8956,
              conf.low: 5.718,
              conf.high: 6.0733,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 5.8956,
              name: "Protestant"
            },
            {
              predicted: 5.7853,
              conf.low: 5.5933,
              conf.high: 5.9772,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 5.7853,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.8573,
              conf.low: 5.6849,
              conf.high: 6.0296,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 5.8573,
              name: "Other Religion"
            },
            {
              predicted: 6.6981,
              conf.low: 6.3732,
              conf.high: 7.0229,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 6.6981,
              name: "Jewish"
            },
            {
              predicted: 5.7552,
              conf.low: 5.5493,
              conf.high: 5.9611,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              y: 5.7552,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 5.74,
              high: 6.09,
              name: "Roman Catholic"
            },
            {
              predicted: 5.8956,
              conf.low: 5.718,
              conf.high: 6.0733,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 5.72,
              high: 6.07,
              name: "Protestant"
            },
            {
              predicted: 5.7853,
              conf.low: 5.5933,
              conf.high: 5.9772,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 5.59,
              high: 5.98,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.8573,
              conf.low: 5.6849,
              conf.high: 6.0296,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 5.68,
              high: 6.03,
              name: "Other Religion"
            },
            {
              predicted: 6.6981,
              conf.low: 6.3732,
              conf.high: 7.0229,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 6.37,
              high: 7.02,
              name: "Jewish"
            },
            {
              predicted: 5.7552,
              conf.low: 5.5493,
              conf.high: 5.9611,
              id: "religiousDenom",
              var: "stfjb",
              displayName: "Religion",
              low: 5.55,
              high: 5.96,
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
