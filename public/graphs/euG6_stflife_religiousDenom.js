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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 6.0801,
              name: "Roman Catholic"
            },
            {
              predicted: 6.1635,
              conf.low: 6.0968,
              conf.high: 6.2301,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 6.1635,
              name: "Protestant"
            },
            {
              predicted: 5.855,
              conf.low: 5.7817,
              conf.high: 5.9284,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 5.855,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.0389,
              conf.low: 5.9741,
              conf.high: 6.1037,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 6.0389,
              name: "Other Religion"
            },
            {
              predicted: 6.1035,
              conf.low: 5.997,
              conf.high: 6.2099,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 6.1035,
              name: "Jewish"
            },
            {
              predicted: 5.9726,
              conf.low: 5.8972,
              conf.high: 6.048,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              y: 5.9726,
              name: "Islamic"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 6.01,
              high: 6.15,
              name: "Roman Catholic"
            },
            {
              predicted: 6.1635,
              conf.low: 6.0968,
              conf.high: 6.2301,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 6.1,
              high: 6.23,
              name: "Protestant"
            },
            {
              predicted: 5.855,
              conf.low: 5.7817,
              conf.high: 5.9284,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 5.78,
              high: 5.93,
              name: "Eastern Orthodox"
            },
            {
              predicted: 6.0389,
              conf.low: 5.9741,
              conf.high: 6.1037,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 5.97,
              high: 6.1,
              name: "Other Religion"
            },
            {
              predicted: 6.1035,
              conf.low: 5.997,
              conf.high: 6.2099,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 6,
              high: 6.21,
              name: "Jewish"
            },
            {
              predicted: 5.9726,
              conf.low: 5.8972,
              conf.high: 6.048,
              id: "religiousDenom",
              var: "stflife",
              displayName: "Religion",
              low: 5.9,
              high: 6.05,
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
