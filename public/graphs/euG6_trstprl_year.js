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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.6353,
              name: "2002"
            },
            {
              predicted: 4.3856,
              conf.low: 4.3097,
              conf.high: 4.4616,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.3856,
              name: "2004"
            },
            {
              predicted: 4.3581,
              conf.low: 4.2817,
              conf.high: 4.4344,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.3581,
              name: "2006"
            },
            {
              predicted: 4.2835,
              conf.low: 4.2073,
              conf.high: 4.3597,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.2835,
              name: "2008"
            },
            {
              predicted: 4.0441,
              conf.low: 3.9679,
              conf.high: 4.1202,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.0441,
              name: "2010"
            },
            {
              predicted: 4.106,
              conf.low: 4.0297,
              conf.high: 4.1822,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.106,
              name: "2012"
            },
            {
              predicted: 4.2782,
              conf.low: 4.2016,
              conf.high: 4.3548,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.2782,
              name: "2014"
            },
            {
              predicted: 4.5338,
              conf.low: 4.4568,
              conf.high: 4.6107,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              y: 4.5338,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.56,
              high: 4.71,
              name: "2002"
            },
            {
              predicted: 4.3856,
              conf.low: 4.3097,
              conf.high: 4.4616,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.31,
              high: 4.46,
              name: "2004"
            },
            {
              predicted: 4.3581,
              conf.low: 4.2817,
              conf.high: 4.4344,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.28,
              high: 4.43,
              name: "2006"
            },
            {
              predicted: 4.2835,
              conf.low: 4.2073,
              conf.high: 4.3597,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.21,
              high: 4.36,
              name: "2008"
            },
            {
              predicted: 4.0441,
              conf.low: 3.9679,
              conf.high: 4.1202,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 3.97,
              high: 4.12,
              name: "2010"
            },
            {
              predicted: 4.106,
              conf.low: 4.0297,
              conf.high: 4.1822,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.03,
              high: 4.18,
              name: "2012"
            },
            {
              predicted: 4.2782,
              conf.low: 4.2016,
              conf.high: 4.3548,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.2,
              high: 4.35,
              name: "2014"
            },
            {
              predicted: 4.5338,
              conf.low: 4.4568,
              conf.high: 4.6107,
              id: "year",
              var: "trstprl",
              displayName: "Year",
              low: 4.46,
              high: 4.61,
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
