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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 4.6353,
              name: "Roman Catholic"
            },
            {
              predicted: 4.7199,
              conf.low: 4.6427,
              conf.high: 4.7972,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 4.7199,
              name: "Protestant"
            },
            {
              predicted: 4.5443,
              conf.low: 4.4592,
              conf.high: 4.6294,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 4.5443,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.5636,
              conf.low: 4.4884,
              conf.high: 4.6387,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 4.5636,
              name: "Other Religion"
            },
            {
              predicted: 4.8209,
              conf.low: 4.6971,
              conf.high: 4.9448,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 4.8209,
              name: "Jewish"
            },
            {
              predicted: 5.1326,
              conf.low: 5.0445,
              conf.high: 5.2206,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              y: 5.1326,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 4.56,
              high: 4.71,
              name: "Roman Catholic"
            },
            {
              predicted: 4.7199,
              conf.low: 4.6427,
              conf.high: 4.7972,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 4.64,
              high: 4.8,
              name: "Protestant"
            },
            {
              predicted: 4.5443,
              conf.low: 4.4592,
              conf.high: 4.6294,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 4.46,
              high: 4.63,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.5636,
              conf.low: 4.4884,
              conf.high: 4.6387,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 4.49,
              high: 4.64,
              name: "Other Religion"
            },
            {
              predicted: 4.8209,
              conf.low: 4.6971,
              conf.high: 4.9448,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 4.7,
              high: 4.94,
              name: "Jewish"
            },
            {
              predicted: 5.1326,
              conf.low: 5.0445,
              conf.high: 5.2206,
              id: "religiousDenom",
              var: "trstprl",
              displayName: "Religion",
              low: 5.04,
              high: 5.22,
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
