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
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.0801,
              name: "2002"
            },
            {
              predicted: 6.157,
              conf.low: 6.0915,
              conf.high: 6.2224,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.157,
              name: "2004"
            },
            {
              predicted: 6.1382,
              conf.low: 6.0724,
              conf.high: 6.204,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.1382,
              name: "2006"
            },
            {
              predicted: 6.1181,
              conf.low: 6.0524,
              conf.high: 6.1838,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.1181,
              name: "2008"
            },
            {
              predicted: 6.2434,
              conf.low: 6.1777,
              conf.high: 6.309,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.2434,
              name: "2010"
            },
            {
              predicted: 6.3599,
              conf.low: 6.2942,
              conf.high: 6.4257,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.3599,
              name: "2012"
            },
            {
              predicted: 6.2925,
              conf.low: 6.2264,
              conf.high: 6.3586,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.2925,
              name: "2014"
            },
            {
              predicted: 6.4809,
              conf.low: 6.4146,
              conf.high: 6.5473,
              id: "year",
              var: "stflife",
              displayName: "Year",
              y: 6.4809,
              name: "2016"
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
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.01,
              high: 6.15,
              name: "2002"
            },
            {
              predicted: 6.157,
              conf.low: 6.0915,
              conf.high: 6.2224,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.09,
              high: 6.22,
              name: "2004"
            },
            {
              predicted: 6.1382,
              conf.low: 6.0724,
              conf.high: 6.204,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.07,
              high: 6.2,
              name: "2006"
            },
            {
              predicted: 6.1181,
              conf.low: 6.0524,
              conf.high: 6.1838,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.05,
              high: 6.18,
              name: "2008"
            },
            {
              predicted: 6.2434,
              conf.low: 6.1777,
              conf.high: 6.309,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.18,
              high: 6.31,
              name: "2010"
            },
            {
              predicted: 6.3599,
              conf.low: 6.2942,
              conf.high: 6.4257,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.29,
              high: 6.43,
              name: "2012"
            },
            {
              predicted: 6.2925,
              conf.low: 6.2264,
              conf.high: 6.3586,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.23,
              high: 6.36,
              name: "2014"
            },
            {
              predicted: 6.4809,
              conf.low: 6.4146,
              conf.high: 6.5473,
              id: "year",
              var: "stflife",
              displayName: "Year",
              low: 6.41,
              high: 6.55,
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
