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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              y: 4.6353,
              name: "Low Education"
            },
            {
              predicted: 4.7171,
              conf.low: 4.6419,
              conf.high: 4.7923,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              y: 4.7171,
              name: "Middle Education"
            },
            {
              predicted: 5.2084,
              conf.low: 5.1321,
              conf.high: 5.2847,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              y: 5.2084,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              low: 4.56,
              high: 4.71,
              name: "Low Education"
            },
            {
              predicted: 4.7171,
              conf.low: 4.6419,
              conf.high: 4.7923,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              low: 4.64,
              high: 4.79,
              name: "Middle Education"
            },
            {
              predicted: 5.2084,
              conf.low: 5.1321,
              conf.high: 5.2847,
              id: "Education",
              var: "trstprl",
              displayName: "Education",
              low: 5.13,
              high: 5.28,
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
