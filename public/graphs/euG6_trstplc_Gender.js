$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Gender\n  <br/>\n<\/h4>",
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
              id: "Gender",
              var: "trstplc",
              displayName: "Gender",
              y: 6.2757,
              name: "Female"
            },
            {
              predicted: 6.1708,
              conf.low: 6.0952,
              conf.high: 6.2464,
              id: "Gender",
              var: "trstplc",
              displayName: "Gender",
              y: 6.1708,
              name: "Male"
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
              id: "Gender",
              var: "trstplc",
              displayName: "Gender",
              low: 6.2,
              high: 6.35,
              name: "Female"
            },
            {
              predicted: 6.1708,
              conf.low: 6.0952,
              conf.high: 6.2464,
              id: "Gender",
              var: "trstplc",
              displayName: "Gender",
              low: 6.1,
              high: 6.25,
              name: "Male"
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
