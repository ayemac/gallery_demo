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
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              y: 5.9145,
              name: "Low Education"
            },
            {
              predicted: 5.9261,
              conf.low: 5.7577,
              conf.high: 6.0946,
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              y: 5.9261,
              name: "Middle Education"
            },
            {
              predicted: 6.1383,
              conf.low: 5.9681,
              conf.high: 6.3085,
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              y: 6.1383,
              name: "High Education"
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
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              low: 5.74,
              high: 6.09,
              name: "Low Education"
            },
            {
              predicted: 5.9261,
              conf.low: 5.7577,
              conf.high: 6.0946,
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              low: 5.76,
              high: 6.09,
              name: "Middle Education"
            },
            {
              predicted: 6.1383,
              conf.low: 5.9681,
              conf.high: 6.3085,
              id: "Education",
              var: "stfjb",
              displayName: "Education",
              low: 5.97,
              high: 6.31,
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
