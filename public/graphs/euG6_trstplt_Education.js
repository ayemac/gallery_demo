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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              y: 3.7098,
              name: "Low Education"
            },
            {
              predicted: 3.7189,
              conf.low: 3.6494,
              conf.high: 3.7885,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              y: 3.7189,
              name: "Middle Education"
            },
            {
              predicted: 4.0131,
              conf.low: 3.9426,
              conf.high: 4.0837,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              y: 4.0131,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              low: 3.64,
              high: 3.78,
              name: "Low Education"
            },
            {
              predicted: 3.7189,
              conf.low: 3.6494,
              conf.high: 3.7885,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              low: 3.65,
              high: 3.79,
              name: "Middle Education"
            },
            {
              predicted: 4.0131,
              conf.low: 3.9426,
              conf.high: 4.0837,
              id: "Education",
              var: "trstplt",
              displayName: "Education",
              low: 3.94,
              high: 4.08,
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
