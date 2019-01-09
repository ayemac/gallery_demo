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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 4.9488,
              name: "Roman Catholic"
            },
            {
              predicted: 5.0567,
              conf.low: 4.9791,
              conf.high: 5.1344,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 5.0567,
              name: "Protestant"
            },
            {
              predicted: 5.0737,
              conf.low: 4.9879,
              conf.high: 5.1595,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 5.0737,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.1351,
              conf.low: 5.0596,
              conf.high: 5.2106,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 5.1351,
              name: "Other Religion"
            },
            {
              predicted: 6.7408,
              conf.low: 6.6167,
              conf.high: 6.8648,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 6.7408,
              name: "Jewish"
            },
            {
              predicted: 5.3819,
              conf.low: 5.2938,
              conf.high: 5.4699,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              y: 5.3819,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 4.87,
              high: 5.03,
              name: "Roman Catholic"
            },
            {
              predicted: 5.0567,
              conf.low: 4.9791,
              conf.high: 5.1344,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 4.98,
              high: 5.13,
              name: "Protestant"
            },
            {
              predicted: 5.0737,
              conf.low: 4.9879,
              conf.high: 5.1595,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 4.99,
              high: 5.16,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.1351,
              conf.low: 5.0596,
              conf.high: 5.2106,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 5.06,
              high: 5.21,
              name: "Other Religion"
            },
            {
              predicted: 6.7408,
              conf.low: 6.6167,
              conf.high: 6.8648,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 6.62,
              high: 6.86,
              name: "Jewish"
            },
            {
              predicted: 5.3819,
              conf.low: 5.2938,
              conf.high: 5.4699,
              id: "religiousDenom",
              var: "imbgeco",
              displayName: "Religion",
              low: 5.29,
              high: 5.47,
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
