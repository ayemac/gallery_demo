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
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 5.6238,
              name: "Roman Catholic"
            },
            {
              predicted: 5.6512,
              conf.low: 5.5514,
              conf.high: 5.7511,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 5.6512,
              name: "Protestant"
            },
            {
              predicted: 5.4598,
              conf.low: 5.3499,
              conf.high: 5.5696,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 5.4598,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.7442,
              conf.low: 5.6478,
              conf.high: 5.8405,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 5.7442,
              name: "Other Religion"
            },
            {
              predicted: 5.5839,
              conf.low: 5.4012,
              conf.high: 5.7665,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 5.5839,
              name: "Jewish"
            },
            {
              predicted: 6.1393,
              conf.low: 6.0254,
              conf.high: 6.2532,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              y: 6.1393,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 5.53,
              high: 5.72,
              name: "Roman Catholic"
            },
            {
              predicted: 5.6512,
              conf.low: 5.5514,
              conf.high: 5.7511,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 5.55,
              high: 5.75,
              name: "Protestant"
            },
            {
              predicted: 5.4598,
              conf.low: 5.3499,
              conf.high: 5.5696,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 5.35,
              high: 5.57,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.7442,
              conf.low: 5.6478,
              conf.high: 5.8405,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 5.65,
              high: 5.84,
              name: "Other Religion"
            },
            {
              predicted: 5.5839,
              conf.low: 5.4012,
              conf.high: 5.7665,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 5.4,
              high: 5.77,
              name: "Jewish"
            },
            {
              predicted: 6.1393,
              conf.low: 6.0254,
              conf.high: 6.2532,
              id: "religiousDenom",
              var: "euftf",
              displayName: "Religion",
              low: 6.03,
              high: 6.25,
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
