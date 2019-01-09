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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.4109,
              name: "Roman Catholic"
            },
            {
              predicted: 4.5415,
              conf.low: 4.4701,
              conf.high: 4.6129,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.5415,
              name: "Protestant"
            },
            {
              predicted: 4.2844,
              conf.low: 4.2058,
              conf.high: 4.363,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.2844,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.4353,
              conf.low: 4.3659,
              conf.high: 4.5047,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.4353,
              name: "Other Religion"
            },
            {
              predicted: 4.4343,
              conf.low: 4.3204,
              conf.high: 4.5482,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.4343,
              name: "Jewish"
            },
            {
              predicted: 4.4776,
              conf.low: 4.3969,
              conf.high: 4.5584,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              y: 4.4776,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.34,
              high: 4.48,
              name: "Roman Catholic"
            },
            {
              predicted: 4.5415,
              conf.low: 4.4701,
              conf.high: 4.6129,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.47,
              high: 4.61,
              name: "Protestant"
            },
            {
              predicted: 4.2844,
              conf.low: 4.2058,
              conf.high: 4.363,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.21,
              high: 4.36,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.4353,
              conf.low: 4.3659,
              conf.high: 4.5047,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.37,
              high: 4.5,
              name: "Other Religion"
            },
            {
              predicted: 4.4343,
              conf.low: 4.3204,
              conf.high: 4.5482,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.32,
              high: 4.55,
              name: "Jewish"
            },
            {
              predicted: 4.4776,
              conf.low: 4.3969,
              conf.high: 4.5584,
              id: "religiousDenom",
              var: "pplhlp",
              displayName: "Religion",
              low: 4.4,
              high: 4.56,
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
