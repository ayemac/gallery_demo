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
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.1436,
              name: "2002"
            },
            {
              predicted: 5.1738,
              conf.low: 5.1049,
              conf.high: 5.2428,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.1738,
              name: "2004"
            },
            {
              predicted: 5.1814,
              conf.low: 5.1121,
              conf.high: 5.2507,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.1814,
              name: "2006"
            },
            {
              predicted: 5.2034,
              conf.low: 5.1342,
              conf.high: 5.2726,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.2034,
              name: "2008"
            },
            {
              predicted: 5.2213,
              conf.low: 5.1522,
              conf.high: 5.2904,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.2213,
              name: "2010"
            },
            {
              predicted: 5.1957,
              conf.low: 5.1264,
              conf.high: 5.265,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.1957,
              name: "2012"
            },
            {
              predicted: 5.2048,
              conf.low: 5.1352,
              conf.high: 5.2744,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.2048,
              name: "2014"
            },
            {
              predicted: 5.3343,
              conf.low: 5.2644,
              conf.high: 5.4042,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              y: 5.3343,
              name: "2016"
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
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.07,
              high: 5.21,
              name: "2002"
            },
            {
              predicted: 5.1738,
              conf.low: 5.1049,
              conf.high: 5.2428,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.1,
              high: 5.24,
              name: "2004"
            },
            {
              predicted: 5.1814,
              conf.low: 5.1121,
              conf.high: 5.2507,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.11,
              high: 5.25,
              name: "2006"
            },
            {
              predicted: 5.2034,
              conf.low: 5.1342,
              conf.high: 5.2726,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.13,
              high: 5.27,
              name: "2008"
            },
            {
              predicted: 5.2213,
              conf.low: 5.1522,
              conf.high: 5.2904,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.15,
              high: 5.29,
              name: "2010"
            },
            {
              predicted: 5.1957,
              conf.low: 5.1264,
              conf.high: 5.265,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.13,
              high: 5.26,
              name: "2012"
            },
            {
              predicted: 5.2048,
              conf.low: 5.1352,
              conf.high: 5.2744,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.14,
              high: 5.27,
              name: "2014"
            },
            {
              predicted: 5.3343,
              conf.low: 5.2644,
              conf.high: 5.4042,
              id: "year",
              var: "pplfair",
              displayName: "Year",
              low: 5.26,
              high: 5.4,
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
