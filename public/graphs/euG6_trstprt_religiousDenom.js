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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 3.7422,
              name: "Roman Catholic"
            },
            {
              predicted: 3.8839,
              conf.low: 3.8093,
              conf.high: 3.9585,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 3.8839,
              name: "Protestant"
            },
            {
              predicted: 3.7459,
              conf.low: 3.6649,
              conf.high: 3.827,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 3.7459,
              name: "Eastern Orthodox"
            },
            {
              predicted: 3.7338,
              conf.low: 3.662,
              conf.high: 3.8056,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 3.7338,
              name: "Other Religion"
            },
            {
              predicted: 4.1885,
              conf.low: 4.0611,
              conf.high: 4.3158,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 4.1885,
              name: "Jewish"
            },
            {
              predicted: 4.1127,
              conf.low: 4.0283,
              conf.high: 4.1972,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              y: 4.1127,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 3.67,
              high: 3.82,
              name: "Roman Catholic"
            },
            {
              predicted: 3.8839,
              conf.low: 3.8093,
              conf.high: 3.9585,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 3.81,
              high: 3.96,
              name: "Protestant"
            },
            {
              predicted: 3.7459,
              conf.low: 3.6649,
              conf.high: 3.827,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 3.66,
              high: 3.83,
              name: "Eastern Orthodox"
            },
            {
              predicted: 3.7338,
              conf.low: 3.662,
              conf.high: 3.8056,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 3.66,
              high: 3.81,
              name: "Other Religion"
            },
            {
              predicted: 4.1885,
              conf.low: 4.0611,
              conf.high: 4.3158,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 4.06,
              high: 4.32,
              name: "Jewish"
            },
            {
              predicted: 4.1127,
              conf.low: 4.0283,
              conf.high: 4.1972,
              id: "religiousDenom",
              var: "trstprt",
              displayName: "Religion",
              low: 4.03,
              high: 4.2,
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
