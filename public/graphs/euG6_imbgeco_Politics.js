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
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              y: 4.9488,
              name: "Political Left"
            },
            {
              predicted: 4.58,
              conf.low: 4.5034,
              conf.high: 4.6567,
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              y: 4.58,
              name: "Political Center"
            },
            {
              predicted: 4.6275,
              conf.low: 4.5496,
              conf.high: 4.7054,
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              y: 4.6275,
              name: "Political Right"
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
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              low: 4.87,
              high: 5.03,
              name: "Political Left"
            },
            {
              predicted: 4.58,
              conf.low: 4.5034,
              conf.high: 4.6567,
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              low: 4.5,
              high: 4.66,
              name: "Political Center"
            },
            {
              predicted: 4.6275,
              conf.low: 4.5496,
              conf.high: 4.7054,
              id: "Politics",
              var: "imbgeco",
              displayName: "Politics",
              low: 4.55,
              high: 4.71,
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
