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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              y: 4.842,
              name: "Low Education"
            },
            {
              predicted: 4.9021,
              conf.low: 4.8212,
              conf.high: 4.9829,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              y: 4.9021,
              name: "Middle Education"
            },
            {
              predicted: 5.2753,
              conf.low: 5.1933,
              conf.high: 5.3573,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              y: 5.2753,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              low: 4.76,
              high: 4.92,
              name: "Low Education"
            },
            {
              predicted: 4.9021,
              conf.low: 4.8212,
              conf.high: 4.9829,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              low: 4.82,
              high: 4.98,
              name: "Middle Education"
            },
            {
              predicted: 5.2753,
              conf.low: 5.1933,
              conf.high: 5.3573,
              id: "Education",
              var: "trstep",
              displayName: "Education",
              low: 5.19,
              high: 5.36,
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
