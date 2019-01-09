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
              id: "Education",
              var: "trstun",
              displayName: "Education",
              y: 5.0693,
              name: "Low Education"
            },
            {
              predicted: 5.1828,
              conf.low: 5.1016,
              conf.high: 5.264,
              id: "Education",
              var: "trstun",
              displayName: "Education",
              y: 5.1828,
              name: "Middle Education"
            },
            {
              predicted: 5.4922,
              conf.low: 5.4098,
              conf.high: 5.5746,
              id: "Education",
              var: "trstun",
              displayName: "Education",
              y: 5.4922,
              name: "High Education"
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
              id: "Education",
              var: "trstun",
              displayName: "Education",
              low: 4.99,
              high: 5.15,
              name: "Low Education"
            },
            {
              predicted: 5.1828,
              conf.low: 5.1016,
              conf.high: 5.264,
              id: "Education",
              var: "trstun",
              displayName: "Education",
              low: 5.1,
              high: 5.26,
              name: "Middle Education"
            },
            {
              predicted: 5.4922,
              conf.low: 5.4098,
              conf.high: 5.5746,
              id: "Education",
              var: "trstun",
              displayName: "Education",
              low: 5.41,
              high: 5.57,
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
