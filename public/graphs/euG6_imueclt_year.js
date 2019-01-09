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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 6.1338,
              name: "2002"
            },
            {
              predicted: 5.9019,
              conf.low: 5.8257,
              conf.high: 5.9782,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.9019,
              name: "2004"
            },
            {
              predicted: 5.8701,
              conf.low: 5.7934,
              conf.high: 5.9468,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.8701,
              name: "2006"
            },
            {
              predicted: 5.9901,
              conf.low: 5.9135,
              conf.high: 6.0666,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.9901,
              name: "2008"
            },
            {
              predicted: 5.8463,
              conf.low: 5.7699,
              conf.high: 5.9228,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.8463,
              name: "2010"
            },
            {
              predicted: 5.9542,
              conf.low: 5.8777,
              conf.high: 6.0308,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.9542,
              name: "2012"
            },
            {
              predicted: 5.8732,
              conf.low: 5.7963,
              conf.high: 5.9501,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.8732,
              name: "2014"
            },
            {
              predicted: 5.7555,
              conf.low: 5.6783,
              conf.high: 5.8328,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              y: 5.7555,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 6.06,
              high: 6.21,
              name: "2002"
            },
            {
              predicted: 5.9019,
              conf.low: 5.8257,
              conf.high: 5.9782,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.83,
              high: 5.98,
              name: "2004"
            },
            {
              predicted: 5.8701,
              conf.low: 5.7934,
              conf.high: 5.9468,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.79,
              high: 5.95,
              name: "2006"
            },
            {
              predicted: 5.9901,
              conf.low: 5.9135,
              conf.high: 6.0666,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.91,
              high: 6.07,
              name: "2008"
            },
            {
              predicted: 5.8463,
              conf.low: 5.7699,
              conf.high: 5.9228,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.77,
              high: 5.92,
              name: "2010"
            },
            {
              predicted: 5.9542,
              conf.low: 5.8777,
              conf.high: 6.0308,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.88,
              high: 6.03,
              name: "2012"
            },
            {
              predicted: 5.8732,
              conf.low: 5.7963,
              conf.high: 5.9501,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.8,
              high: 5.95,
              name: "2014"
            },
            {
              predicted: 5.7555,
              conf.low: 5.6783,
              conf.high: 5.8328,
              id: "year",
              var: "imueclt",
              displayName: "Year",
              low: 5.68,
              high: 5.83,
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
