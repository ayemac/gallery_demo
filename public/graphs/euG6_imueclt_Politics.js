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
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              y: 6.1338,
              name: "Political Left"
            },
            {
              predicted: 5.6566,
              conf.low: 5.5799,
              conf.high: 5.7333,
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              y: 5.6566,
              name: "Political Center"
            },
            {
              predicted: 5.5653,
              conf.low: 5.4874,
              conf.high: 5.6432,
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              y: 5.5653,
              name: "Political Right"
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
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              low: 6.06,
              high: 6.21,
              name: "Political Left"
            },
            {
              predicted: 5.6566,
              conf.low: 5.5799,
              conf.high: 5.7333,
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              low: 5.58,
              high: 5.73,
              name: "Political Center"
            },
            {
              predicted: 5.5653,
              conf.low: 5.4874,
              conf.high: 5.6432,
              id: "Politics",
              var: "imueclt",
              displayName: "Politics",
              low: 5.49,
              high: 5.64,
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
