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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "kidsAtHome",
              var: "trstun",
              displayName: "Kids at Home",
              y: 5.0693,
              name: "Kids at Home"
            },
            {
              predicted: 5.1037,
              conf.low: 5.0239,
              conf.high: 5.1836,
              id: "kidsAtHome",
              var: "trstun",
              displayName: "Kids at Home",
              y: 5.1037,
              name: "No Kids at Home"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "kidsAtHome",
              var: "trstun",
              displayName: "Kids at Home",
              low: 4.99,
              high: 5.15,
              name: "Kids at Home"
            },
            {
              predicted: 5.1037,
              conf.low: 5.0239,
              conf.high: 5.1836,
              id: "kidsAtHome",
              var: "trstun",
              displayName: "Kids at Home",
              low: 5.02,
              high: 5.18,
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
