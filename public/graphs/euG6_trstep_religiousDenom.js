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
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 4.842,
              name: "Roman Catholic"
            },
            {
              predicted: 4.8126,
              conf.low: 4.7295,
              conf.high: 4.8956,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 4.8126,
              name: "Protestant"
            },
            {
              predicted: 4.75,
              conf.low: 4.6578,
              conf.high: 4.8421,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 4.75,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.7738,
              conf.low: 4.6929,
              conf.high: 4.8547,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 4.7738,
              name: "Other Religion"
            },
            {
              predicted: 4.5687,
              conf.low: 4.4293,
              conf.high: 4.708,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 4.5687,
              name: "Jewish"
            },
            {
              predicted: 5.2933,
              conf.low: 5.1986,
              conf.high: 5.388,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              y: 5.2933,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 4.76,
              high: 4.92,
              name: "Roman Catholic"
            },
            {
              predicted: 4.8126,
              conf.low: 4.7295,
              conf.high: 4.8956,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 4.73,
              high: 4.9,
              name: "Protestant"
            },
            {
              predicted: 4.75,
              conf.low: 4.6578,
              conf.high: 4.8421,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 4.66,
              high: 4.84,
              name: "Eastern Orthodox"
            },
            {
              predicted: 4.7738,
              conf.low: 4.6929,
              conf.high: 4.8547,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 4.69,
              high: 4.85,
              name: "Other Religion"
            },
            {
              predicted: 4.5687,
              conf.low: 4.4293,
              conf.high: 4.708,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 4.43,
              high: 4.71,
              name: "Jewish"
            },
            {
              predicted: 5.2933,
              conf.low: 5.1986,
              conf.high: 5.388,
              id: "religiousDenom",
              var: "trstep",
              displayName: "Religion",
              low: 5.2,
              high: 5.39,
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
