$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Race\n  <br/>\n<\/h4>",
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
              id: "Minority",
              var: "ppltrst",
              displayName: "Race",
              y: 4.1117,
              name: "Minority"
            },
            {
              predicted: 4.2633,
              conf.low: 4.1986,
              conf.high: 4.3281,
              id: "Minority",
              var: "ppltrst",
              displayName: "Race",
              y: 4.2633,
              name: "Non-Minority"
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
              id: "Minority",
              var: "ppltrst",
              displayName: "Race",
              low: 4.04,
              high: 4.18,
              name: "Minority"
            },
            {
              predicted: 4.2633,
              conf.low: 4.1986,
              conf.high: 4.3281,
              id: "Minority",
              var: "ppltrst",
              displayName: "Race",
              low: 4.2,
              high: 4.33,
              name: "Non-Minority"
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
