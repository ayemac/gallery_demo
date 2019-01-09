$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              y: 4.1117,
              name: "Low Education"
            },
            {
              predicted: 4.3323,
              conf.low: 4.2606,
              conf.high: 4.4041,
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              y: 4.3323,
              name: "Middle Education"
            },
            {
              predicted: 4.8327,
              conf.low: 4.7599,
              conf.high: 4.9055,
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              y: 4.8327,
              name: "High Education"
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
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              low: 4.04,
              high: 4.18,
              name: "Low Education"
            },
            {
              predicted: 4.3323,
              conf.low: 4.2606,
              conf.high: 4.4041,
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              low: 4.26,
              high: 4.4,
              name: "Middle Education"
            },
            {
              predicted: 4.8327,
              conf.low: 4.7599,
              conf.high: 4.9055,
              id: "Education",
              var: "ppltrst",
              displayName: "Education",
              low: 4.76,
              high: 4.91,
              name: "High Education"
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
