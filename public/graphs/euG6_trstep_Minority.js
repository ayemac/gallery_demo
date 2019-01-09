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
              id: "Minority",
              var: "trstep",
              displayName: "Race",
              y: 4.842,
              name: "Minority"
            },
            {
              predicted: 4.7933,
              conf.low: 4.7207,
              conf.high: 4.8659,
              id: "Minority",
              var: "trstep",
              displayName: "Race",
              y: 4.7933,
              name: "Non-Minority"
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
              id: "Minority",
              var: "trstep",
              displayName: "Race",
              low: 4.76,
              high: 4.92,
              name: "Minority"
            },
            {
              predicted: 4.7933,
              conf.low: 4.7207,
              conf.high: 4.8659,
              id: "Minority",
              var: "trstep",
              displayName: "Race",
              low: 4.72,
              high: 4.87,
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
