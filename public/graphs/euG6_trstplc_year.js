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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.2757,
              name: "2002"
            },
            {
              predicted: 6.1341,
              conf.low: 6.0589,
              conf.high: 6.2094,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.1341,
              name: "2004"
            },
            {
              predicted: 6.1694,
              conf.low: 6.0937,
              conf.high: 6.245,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.1694,
              name: "2006"
            },
            {
              predicted: 6.1568,
              conf.low: 6.0812,
              conf.high: 6.2323,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.1568,
              name: "2008"
            },
            {
              predicted: 6.205,
              conf.low: 6.1296,
              conf.high: 6.2805,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.205,
              name: "2010"
            },
            {
              predicted: 6.3137,
              conf.low: 6.2382,
              conf.high: 6.3893,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.3137,
              name: "2012"
            },
            {
              predicted: 6.3883,
              conf.low: 6.3123,
              conf.high: 6.4642,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.3883,
              name: "2014"
            },
            {
              predicted: 6.6954,
              conf.low: 6.6192,
              conf.high: 6.7717,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              y: 6.6954,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.2,
              high: 6.35,
              name: "2002"
            },
            {
              predicted: 6.1341,
              conf.low: 6.0589,
              conf.high: 6.2094,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.06,
              high: 6.21,
              name: "2004"
            },
            {
              predicted: 6.1694,
              conf.low: 6.0937,
              conf.high: 6.245,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.09,
              high: 6.25,
              name: "2006"
            },
            {
              predicted: 6.1568,
              conf.low: 6.0812,
              conf.high: 6.2323,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.08,
              high: 6.23,
              name: "2008"
            },
            {
              predicted: 6.205,
              conf.low: 6.1296,
              conf.high: 6.2805,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.13,
              high: 6.28,
              name: "2010"
            },
            {
              predicted: 6.3137,
              conf.low: 6.2382,
              conf.high: 6.3893,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.24,
              high: 6.39,
              name: "2012"
            },
            {
              predicted: 6.3883,
              conf.low: 6.3123,
              conf.high: 6.4642,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.31,
              high: 6.46,
              name: "2014"
            },
            {
              predicted: 6.6954,
              conf.low: 6.6192,
              conf.high: 6.7717,
              id: "year",
              var: "trstplc",
              displayName: "Year",
              low: 6.62,
              high: 6.77,
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
