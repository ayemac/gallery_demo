$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Gender\n  <br/>\n<\/h4>",
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
              id: "Gender",
              var: "ppltrst",
              displayName: "Gender",
              y: 4.1117,
              name: "Female"
            },
            {
              predicted: 4.1514,
              conf.low: 4.0787,
              conf.high: 4.2242,
              id: "Gender",
              var: "ppltrst",
              displayName: "Gender",
              y: 4.1514,
              name: "Male"
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
              id: "Gender",
              var: "ppltrst",
              displayName: "Gender",
              low: 4.04,
              high: 4.18,
              name: "Female"
            },
            {
              predicted: 4.1514,
              conf.low: 4.0787,
              conf.high: 4.2242,
              id: "Gender",
              var: "ppltrst",
              displayName: "Gender",
              low: 4.08,
              high: 4.22,
              name: "Male"
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
