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
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 6.1338,
              name: "Roman Catholic"
            },
            {
              predicted: 6.2697,
              conf.low: 6.192,
              conf.high: 6.3473,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 6.2697,
              name: "Protestant"
            },
            {
              predicted: 6.2842,
              conf.low: 6.1985,
              conf.high: 6.3699,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 6.2842,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.4197,
              conf.low: 6.3441,
              conf.high: 6.4952,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 6.4197,
              name: "Other Religion"
            },
            {
              predicted: 8.1153,
              conf.low: 7.9905,
              conf.high: 8.2402,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 8.1153,
              name: "Jewish"
            },
            {
              predicted: 6.7492,
              conf.low: 6.6609,
              conf.high: 6.8375,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              y: 6.7492,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 6.06,
              high: 6.21,
              name: "Roman Catholic"
            },
            {
              predicted: 6.2697,
              conf.low: 6.192,
              conf.high: 6.3473,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 6.19,
              high: 6.35,
              name: "Protestant"
            },
            {
              predicted: 6.2842,
              conf.low: 6.1985,
              conf.high: 6.3699,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 6.2,
              high: 6.37,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.4197,
              conf.low: 6.3441,
              conf.high: 6.4952,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 6.34,
              high: 6.5,
              name: "Other Religion"
            },
            {
              predicted: 8.1153,
              conf.low: 7.9905,
              conf.high: 8.2402,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 7.99,
              high: 8.24,
              name: "Jewish"
            },
            {
              predicted: 6.7492,
              conf.low: 6.6609,
              conf.high: 6.8375,
              id: "religiousDenom",
              var: "imueclt",
              displayName: "Religion",
              low: 6.66,
              high: 6.84,
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
