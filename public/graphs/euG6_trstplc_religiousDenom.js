$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religion\n  <br/>\n<\/h4>",
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
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.2757,
              name: "Roman Catholic"
            },
            {
              predicted: 6.2998,
              conf.low: 6.2232,
              conf.high: 6.3764,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.2998,
              name: "Protestant"
            },
            {
              predicted: 6.0946,
              conf.low: 6.0101,
              conf.high: 6.179,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.0946,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.1355,
              conf.low: 6.061,
              conf.high: 6.21,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.1355,
              name: "Other Religion"
            },
            {
              predicted: 6.2913,
              conf.low: 6.1686,
              conf.high: 6.4141,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.2913,
              name: "Jewish"
            },
            {
              predicted: 6.4574,
              conf.low: 6.3706,
              conf.high: 6.5442,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              y: 6.4574,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.2,
              high: 6.35,
              name: "Roman Catholic"
            },
            {
              predicted: 6.2998,
              conf.low: 6.2232,
              conf.high: 6.3764,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.22,
              high: 6.38,
              name: "Protestant"
            },
            {
              predicted: 6.0946,
              conf.low: 6.0101,
              conf.high: 6.179,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.01,
              high: 6.18,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.1355,
              conf.low: 6.061,
              conf.high: 6.21,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.06,
              high: 6.21,
              name: "Other Religion"
            },
            {
              predicted: 6.2913,
              conf.low: 6.1686,
              conf.high: 6.4141,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.17,
              high: 6.41,
              name: "Jewish"
            },
            {
              predicted: 6.4574,
              conf.low: 6.3706,
              conf.high: 6.5442,
              id: "religiousDenom",
              var: "trstplc",
              displayName: "Religion",
              low: 6.37,
              high: 6.54,
              name: "Islamic"
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
