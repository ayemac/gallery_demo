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
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              y: 4.842,
              name: "Political Left"
            },
            {
              predicted: 4.6505,
              conf.low: 4.5685,
              conf.high: 4.7326,
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              y: 4.6505,
              name: "Political Center"
            },
            {
              predicted: 4.9612,
              conf.low: 4.8778,
              conf.high: 5.0445,
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              y: 4.9612,
              name: "Political Right"
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
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              low: 4.76,
              high: 4.92,
              name: "Political Left"
            },
            {
              predicted: 4.6505,
              conf.low: 4.5685,
              conf.high: 4.7326,
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              low: 4.57,
              high: 4.73,
              name: "Political Center"
            },
            {
              predicted: 4.9612,
              conf.low: 4.8778,
              conf.high: 5.0445,
              id: "Politics",
              var: "trstep",
              displayName: "Politics",
              low: 4.88,
              high: 5.04,
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
