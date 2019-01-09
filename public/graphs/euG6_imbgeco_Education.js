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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              y: 4.9488,
              name: "Low Education"
            },
            {
              predicted: 5.3006,
              conf.low: 5.225,
              conf.high: 5.3762,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              y: 5.3006,
              name: "Middle Education"
            },
            {
              predicted: 6.0806,
              conf.low: 6.004,
              conf.high: 6.1573,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              y: 6.0806,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              low: 4.87,
              high: 5.03,
              name: "Low Education"
            },
            {
              predicted: 5.3006,
              conf.low: 5.225,
              conf.high: 5.3762,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              low: 5.23,
              high: 5.38,
              name: "Middle Education"
            },
            {
              predicted: 6.0806,
              conf.low: 6.004,
              conf.high: 6.1573,
              id: "Education",
              var: "imbgeco",
              displayName: "Education",
              low: 6,
              high: 6.16,
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
