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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 5.0693,
              name: "Roman Catholic"
            },
            {
              predicted: 5.1214,
              conf.low: 5.038,
              conf.high: 5.2049,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 5.1214,
              name: "Protestant"
            },
            {
              predicted: 4.7842,
              conf.low: 4.6913,
              conf.high: 4.8771,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 4.7842,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.9157,
              conf.low: 4.8345,
              conf.high: 4.9969,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 4.9157,
              name: "Other Religion"
            },
            {
              predicted: 4.0997,
              conf.low: 3.9648,
              conf.high: 4.2346,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 4.0997,
              name: "Jewish"
            },
            {
              predicted: 4.9281,
              conf.low: 4.833,
              conf.high: 5.0231,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              y: 4.9281,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 4.99,
              high: 5.15,
              name: "Roman Catholic"
            },
            {
              predicted: 5.1214,
              conf.low: 5.038,
              conf.high: 5.2049,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 5.04,
              high: 5.2,
              name: "Protestant"
            },
            {
              predicted: 4.7842,
              conf.low: 4.6913,
              conf.high: 4.8771,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 4.69,
              high: 4.88,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.9157,
              conf.low: 4.8345,
              conf.high: 4.9969,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 4.83,
              high: 5,
              name: "Other Religion"
            },
            {
              predicted: 4.0997,
              conf.low: 3.9648,
              conf.high: 4.2346,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 3.96,
              high: 4.23,
              name: "Jewish"
            },
            {
              predicted: 4.9281,
              conf.low: 4.833,
              conf.high: 5.0231,
              id: "religiousDenom",
              var: "trstun",
              displayName: "Religion",
              low: 4.83,
              high: 5.02,
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
