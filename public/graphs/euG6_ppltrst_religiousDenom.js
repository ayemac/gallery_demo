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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 4.1117,
              name: "Roman Catholic"
            },
            {
              predicted: 4.3047,
              conf.low: 4.231,
              conf.high: 4.3784,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 4.3047,
              name: "Protestant"
            },
            {
              predicted: 4.0949,
              conf.low: 4.0138,
              conf.high: 4.176,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 4.0949,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.1515,
              conf.low: 4.0798,
              conf.high: 4.2231,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 4.1515,
              name: "Other Religion"
            },
            {
              predicted: 4.4301,
              conf.low: 4.3125,
              conf.high: 4.5477,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 4.4301,
              name: "Jewish"
            },
            {
              predicted: 3.9746,
              conf.low: 3.8913,
              conf.high: 4.058,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              y: 3.9746,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 4.04,
              high: 4.18,
              name: "Roman Catholic"
            },
            {
              predicted: 4.3047,
              conf.low: 4.231,
              conf.high: 4.3784,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 4.23,
              high: 4.38,
              name: "Protestant"
            },
            {
              predicted: 4.0949,
              conf.low: 4.0138,
              conf.high: 4.176,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 4.01,
              high: 4.18,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.1515,
              conf.low: 4.0798,
              conf.high: 4.2231,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 4.08,
              high: 4.22,
              name: "Other Religion"
            },
            {
              predicted: 4.4301,
              conf.low: 4.3125,
              conf.high: 4.5477,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 4.31,
              high: 4.55,
              name: "Jewish"
            },
            {
              predicted: 3.9746,
              conf.low: 3.8913,
              conf.high: 4.058,
              id: "religiousDenom",
              var: "ppltrst",
              displayName: "Religion",
              low: 3.89,
              high: 4.06,
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
