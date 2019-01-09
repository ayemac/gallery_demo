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
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              y: 3.7098,
              name: "Political Left"
            },
            {
              predicted: 3.5497,
              conf.low: 3.4792,
              conf.high: 3.6202,
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              y: 3.5497,
              name: "Political Center"
            },
            {
              predicted: 3.9573,
              conf.low: 3.8856,
              conf.high: 4.0289,
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              y: 3.9573,
              name: "Political Right"
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
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              low: 3.64,
              high: 3.78,
              name: "Political Left"
            },
            {
              predicted: 3.5497,
              conf.low: 3.4792,
              conf.high: 3.6202,
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              low: 3.48,
              high: 3.62,
              name: "Political Center"
            },
            {
              predicted: 3.9573,
              conf.low: 3.8856,
              conf.high: 4.0289,
              id: "Politics",
              var: "trstplt",
              displayName: "Politics",
              low: 3.89,
              high: 4.03,
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
