$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              y: 6.1338,
              name: "Low Education"
            },
            {
              predicted: 6.5066,
              conf.low: 6.431,
              conf.high: 6.5821,
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              y: 6.5066,
              name: "Middle Education"
            },
            {
              predicted: 7.2661,
              conf.low: 7.1894,
              conf.high: 7.3428,
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              y: 7.2661,
              name: "High Education"
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
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              low: 6.06,
              high: 6.21,
              name: "Low Education"
            },
            {
              predicted: 6.5066,
              conf.low: 6.431,
              conf.high: 6.5821,
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              low: 6.43,
              high: 6.58,
              name: "Middle Education"
            },
            {
              predicted: 7.2661,
              conf.low: 7.1894,
              conf.high: 7.3428,
              id: "Education",
              var: "imueclt",
              displayName: "Education",
              low: 7.19,
              high: 7.34,
              name: "High Education"
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
