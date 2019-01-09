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
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.1117,
              name: "2002"
            },
            {
              predicted: 4.1867,
              conf.low: 4.1143,
              conf.high: 4.2591,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.1867,
              name: "2004"
            },
            {
              predicted: 4.22,
              conf.low: 4.1473,
              conf.high: 4.2928,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.22,
              name: "2006"
            },
            {
              predicted: 4.2068,
              conf.low: 4.1341,
              conf.high: 4.2794,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.2068,
              name: "2008"
            },
            {
              predicted: 4.2528,
              conf.low: 4.1802,
              conf.high: 4.3254,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.2528,
              name: "2010"
            },
            {
              predicted: 4.2413,
              conf.low: 4.1686,
              conf.high: 4.314,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.2413,
              name: "2012"
            },
            {
              predicted: 4.209,
              conf.low: 4.1359,
              conf.high: 4.2821,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.209,
              name: "2014"
            },
            {
              predicted: 4.3977,
              conf.low: 4.3243,
              conf.high: 4.4711,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              y: 4.3977,
              name: "2016"
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
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.04,
              high: 4.18,
              name: "2002"
            },
            {
              predicted: 4.1867,
              conf.low: 4.1143,
              conf.high: 4.2591,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.11,
              high: 4.26,
              name: "2004"
            },
            {
              predicted: 4.22,
              conf.low: 4.1473,
              conf.high: 4.2928,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.15,
              high: 4.29,
              name: "2006"
            },
            {
              predicted: 4.2068,
              conf.low: 4.1341,
              conf.high: 4.2794,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.13,
              high: 4.28,
              name: "2008"
            },
            {
              predicted: 4.2528,
              conf.low: 4.1802,
              conf.high: 4.3254,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.18,
              high: 4.33,
              name: "2010"
            },
            {
              predicted: 4.2413,
              conf.low: 4.1686,
              conf.high: 4.314,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.17,
              high: 4.31,
              name: "2012"
            },
            {
              predicted: 4.209,
              conf.low: 4.1359,
              conf.high: 4.2821,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.14,
              high: 4.28,
              name: "2014"
            },
            {
              predicted: 4.3977,
              conf.low: 4.3243,
              conf.high: 4.4711,
              id: "year",
              var: "ppltrst",
              displayName: "Year",
              low: 4.32,
              high: 4.47,
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
