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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.4946,
              name: "2002"
            },
            {
              predicted: 5.3246,
              conf.low: 5.2468,
              conf.high: 5.4024,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.3246,
              name: "2004"
            },
            {
              predicted: 5.4141,
              conf.low: 5.3359,
              conf.high: 5.4923,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.4141,
              name: "2006"
            },
            {
              predicted: 5.3535,
              conf.low: 5.2754,
              conf.high: 5.4315,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.3535,
              name: "2008"
            },
            {
              predicted: 5.2782,
              conf.low: 5.2002,
              conf.high: 5.3562,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.2782,
              name: "2010"
            },
            {
              predicted: 5.3394,
              conf.low: 5.2612,
              conf.high: 5.4175,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.3394,
              name: "2012"
            },
            {
              predicted: 5.4542,
              conf.low: 5.3757,
              conf.high: 5.5326,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.4542,
              name: "2014"
            },
            {
              predicted: 5.695,
              conf.low: 5.6161,
              conf.high: 5.7738,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              y: 5.695,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.42,
              high: 5.57,
              name: "2002"
            },
            {
              predicted: 5.3246,
              conf.low: 5.2468,
              conf.high: 5.4024,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.25,
              high: 5.4,
              name: "2004"
            },
            {
              predicted: 5.4141,
              conf.low: 5.3359,
              conf.high: 5.4923,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.34,
              high: 5.49,
              name: "2006"
            },
            {
              predicted: 5.3535,
              conf.low: 5.2754,
              conf.high: 5.4315,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.28,
              high: 5.43,
              name: "2008"
            },
            {
              predicted: 5.2782,
              conf.low: 5.2002,
              conf.high: 5.3562,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.2,
              high: 5.36,
              name: "2010"
            },
            {
              predicted: 5.3394,
              conf.low: 5.2612,
              conf.high: 5.4175,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.26,
              high: 5.42,
              name: "2012"
            },
            {
              predicted: 5.4542,
              conf.low: 5.3757,
              conf.high: 5.5326,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.38,
              high: 5.53,
              name: "2014"
            },
            {
              predicted: 5.695,
              conf.low: 5.6161,
              conf.high: 5.7738,
              id: "year",
              var: "trstlgl",
              displayName: "Year",
              low: 5.62,
              high: 5.77,
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
