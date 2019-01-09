$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Gender\n  <br/>\n<\/h4>",
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
              id: "Gender",
              var: "imueclt",
              displayName: "Gender",
              y: 6.1338,
              name: "Female"
            },
            {
              predicted: 6.0426,
              conf.low: 5.966,
              conf.high: 6.1193,
              id: "Gender",
              var: "imueclt",
              displayName: "Gender",
              y: 6.0426,
              name: "Male"
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
              id: "Gender",
              var: "imueclt",
              displayName: "Gender",
              low: 6.06,
              high: 6.21,
              name: "Female"
            },
            {
              predicted: 6.0426,
              conf.low: 5.966,
              conf.high: 6.1193,
              id: "Gender",
              var: "imueclt",
              displayName: "Gender",
              low: 5.97,
              high: 6.12,
              name: "Male"
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
