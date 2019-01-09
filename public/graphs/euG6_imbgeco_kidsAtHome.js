$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Kids at Home\n  <br/>\n<\/h4>",
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
              id: "kidsAtHome",
              var: "imbgeco",
              displayName: "Kids at Home",
              y: 4.9488,
              name: "Kids at Home"
            },
            {
              predicted: 5.0412,
              conf.low: 4.9669,
              conf.high: 5.1155,
              id: "kidsAtHome",
              var: "imbgeco",
              displayName: "Kids at Home",
              y: 5.0412,
              name: "No Kids at Home"
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
              id: "kidsAtHome",
              var: "imbgeco",
              displayName: "Kids at Home",
              low: 4.87,
              high: 5.03,
              name: "Kids at Home"
            },
            {
              predicted: 5.0412,
              conf.low: 4.9669,
              conf.high: 5.1155,
              id: "kidsAtHome",
              var: "imbgeco",
              displayName: "Kids at Home",
              low: 4.97,
              high: 5.12,
              name: "No Kids at Home"
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
