$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Race\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Minority",
              var: "trstplc",
              displayName: "Race",
              y: 6.2757,
              name: "Minority"
            },
            {
              predicted: 6.5336,
              conf.low: 6.4663,
              conf.high: 6.6008,
              id: "Minority",
              var: "trstplc",
              displayName: "Race",
              y: 6.5336,
              name: "Non-Minority"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Minority",
              var: "trstplc",
              displayName: "Race",
              low: 6.2,
              high: 6.35,
              name: "Minority"
            },
            {
              predicted: 6.5336,
              conf.low: 6.4663,
              conf.high: 6.6008,
              id: "Minority",
              var: "trstplc",
              displayName: "Race",
              low: 6.47,
              high: 6.6,
              name: "Non-Minority"
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
