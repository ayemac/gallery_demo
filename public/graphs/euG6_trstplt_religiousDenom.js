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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 3.7098,
              name: "Roman Catholic"
            },
            {
              predicted: 3.8314,
              conf.low: 3.7599,
              conf.high: 3.9029,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 3.8314,
              name: "Protestant"
            },
            {
              predicted: 3.6243,
              conf.low: 3.5455,
              conf.high: 3.7031,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 3.6243,
              name: "Eastern Orthodox"
            },
            {
              predicted: 3.6597,
              conf.low: 3.5902,
              conf.high: 3.7292,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 3.6597,
              name: "Other Religion"
            },
            {
              predicted: 3.8178,
              conf.low: 3.7031,
              conf.high: 3.9325,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 3.8178,
              name: "Jewish"
            },
            {
              predicted: 4.0447,
              conf.low: 3.9634,
              conf.high: 4.1259,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              y: 4.0447,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.64,
              high: 3.78,
              name: "Roman Catholic"
            },
            {
              predicted: 3.8314,
              conf.low: 3.7599,
              conf.high: 3.9029,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.76,
              high: 3.9,
              name: "Protestant"
            },
            {
              predicted: 3.6243,
              conf.low: 3.5455,
              conf.high: 3.7031,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.55,
              high: 3.7,
              name: "Eastern Orthodox"
            },
            {
              predicted: 3.6597,
              conf.low: 3.5902,
              conf.high: 3.7292,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.59,
              high: 3.73,
              name: "Other Religion"
            },
            {
              predicted: 3.8178,
              conf.low: 3.7031,
              conf.high: 3.9325,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.7,
              high: 3.93,
              name: "Jewish"
            },
            {
              predicted: 4.0447,
              conf.low: 3.9634,
              conf.high: 4.1259,
              id: "religiousDenom",
              var: "trstplt",
              displayName: "Religion",
              low: 3.96,
              high: 4.13,
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
