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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 5.1436,
              name: "Roman Catholic"
            },
            {
              predicted: 5.3137,
              conf.low: 5.2435,
              conf.high: 5.3838,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 5.3137,
              name: "Protestant"
            },
            {
              predicted: 4.99,
              conf.low: 4.9126,
              conf.high: 5.0673,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 4.99,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.1621,
              conf.low: 5.0939,
              conf.high: 5.2304,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 5.1621,
              name: "Other Religion"
            },
            {
              predicted: 5.4867,
              conf.low: 5.3746,
              conf.high: 5.5988,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 5.4867,
              name: "Jewish"
            },
            {
              predicted: 4.9458,
              conf.low: 4.8664,
              conf.high: 5.0253,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              y: 4.9458,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 5.07,
              high: 5.21,
              name: "Roman Catholic"
            },
            {
              predicted: 5.3137,
              conf.low: 5.2435,
              conf.high: 5.3838,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 5.24,
              high: 5.38,
              name: "Protestant"
            },
            {
              predicted: 4.99,
              conf.low: 4.9126,
              conf.high: 5.0673,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 4.91,
              high: 5.07,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.1621,
              conf.low: 5.0939,
              conf.high: 5.2304,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 5.09,
              high: 5.23,
              name: "Other Religion"
            },
            {
              predicted: 5.4867,
              conf.low: 5.3746,
              conf.high: 5.5988,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 5.37,
              high: 5.6,
              name: "Jewish"
            },
            {
              predicted: 4.9458,
              conf.low: 4.8664,
              conf.high: 5.0253,
              id: "religiousDenom",
              var: "pplfair",
              displayName: "Religion",
              low: 4.87,
              high: 5.03,
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
