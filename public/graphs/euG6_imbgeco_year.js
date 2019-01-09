$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Year\n  <br/>\n<\/h4>",
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
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.9488,
              name: "2002"
            },
            {
              predicted: 4.7628,
              conf.low: 4.6866,
              conf.high: 4.8391,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.7628,
              name: "2004"
            },
            {
              predicted: 4.9487,
              conf.low: 4.872,
              conf.high: 5.0254,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.9487,
              name: "2006"
            },
            {
              predicted: 4.9738,
              conf.low: 4.8973,
              conf.high: 5.0503,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.9738,
              name: "2008"
            },
            {
              predicted: 4.794,
              conf.low: 4.7175,
              conf.high: 4.8704,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.794,
              name: "2010"
            },
            {
              predicted: 4.8991,
              conf.low: 4.8226,
              conf.high: 4.9757,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.8991,
              name: "2012"
            },
            {
              predicted: 4.8402,
              conf.low: 4.7633,
              conf.high: 4.9171,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.8402,
              name: "2014"
            },
            {
              predicted: 4.9394,
              conf.low: 4.8622,
              conf.high: 5.0167,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              y: 4.9394,
              name: "2016"
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
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.87,
              high: 5.03,
              name: "2002"
            },
            {
              predicted: 4.7628,
              conf.low: 4.6866,
              conf.high: 4.8391,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.69,
              high: 4.84,
              name: "2004"
            },
            {
              predicted: 4.9487,
              conf.low: 4.872,
              conf.high: 5.0254,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.87,
              high: 5.03,
              name: "2006"
            },
            {
              predicted: 4.9738,
              conf.low: 4.8973,
              conf.high: 5.0503,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.9,
              high: 5.05,
              name: "2008"
            },
            {
              predicted: 4.794,
              conf.low: 4.7175,
              conf.high: 4.8704,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.72,
              high: 4.87,
              name: "2010"
            },
            {
              predicted: 4.8991,
              conf.low: 4.8226,
              conf.high: 4.9757,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.82,
              high: 4.98,
              name: "2012"
            },
            {
              predicted: 4.8402,
              conf.low: 4.7633,
              conf.high: 4.9171,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.76,
              high: 4.92,
              name: "2014"
            },
            {
              predicted: 4.9394,
              conf.low: 4.8622,
              conf.high: 5.0167,
              id: "year",
              var: "imbgeco",
              displayName: "Year",
              low: 4.86,
              high: 5.02,
              name: "2016"
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
