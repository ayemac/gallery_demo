$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Politics\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              y: 6.6558,
              name: "Political Left"
            },
            {
              predicted: 6.7563,
              conf.low: 6.6974,
              conf.high: 6.8152,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              y: 6.7563,
              name: "Political Center"
            },
            {
              predicted: 6.9069,
              conf.low: 6.8471,
              conf.high: 6.9667,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              y: 6.9069,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              low: 6.6,
              high: 6.71,
              name: "Political Left"
            },
            {
              predicted: 6.7563,
              conf.low: 6.6974,
              conf.high: 6.8152,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              low: 6.7,
              high: 6.82,
              name: "Political Center"
            },
            {
              predicted: 6.9069,
              conf.low: 6.8471,
              conf.high: 6.9667,
              id: "Politics",
              var: "happy",
              displayName: "Politics",
              low: 6.85,
              high: 6.97,
              name: "Political Right"
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
