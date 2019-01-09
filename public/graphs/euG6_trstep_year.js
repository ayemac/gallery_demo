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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.842,
              name: "2002"
            },
            {
              predicted: 4.7105,
              conf.low: 4.629,
              conf.high: 4.792,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.7105,
              name: "2004"
            },
            {
              predicted: 4.7179,
              conf.low: 4.6359,
              conf.high: 4.7998,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.7179,
              name: "2006"
            },
            {
              predicted: 4.6807,
              conf.low: 4.5989,
              conf.high: 4.7624,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.6807,
              name: "2008"
            },
            {
              predicted: 4.3889,
              conf.low: 4.3072,
              conf.high: 4.4706,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.3889,
              name: "2010"
            },
            {
              predicted: 4.3783,
              conf.low: 4.2965,
              conf.high: 4.4601,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.3783,
              name: "2012"
            },
            {
              predicted: 4.2805,
              conf.low: 4.1984,
              conf.high: 4.3626,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.2805,
              name: "2014"
            },
            {
              predicted: 4.3999,
              conf.low: 4.3174,
              conf.high: 4.4824,
              id: "year",
              var: "trstep",
              displayName: "Year",
              y: 4.3999,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.76,
              high: 4.92,
              name: "2002"
            },
            {
              predicted: 4.7105,
              conf.low: 4.629,
              conf.high: 4.792,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.63,
              high: 4.79,
              name: "2004"
            },
            {
              predicted: 4.7179,
              conf.low: 4.6359,
              conf.high: 4.7998,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.64,
              high: 4.8,
              name: "2006"
            },
            {
              predicted: 4.6807,
              conf.low: 4.5989,
              conf.high: 4.7624,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.6,
              high: 4.76,
              name: "2008"
            },
            {
              predicted: 4.3889,
              conf.low: 4.3072,
              conf.high: 4.4706,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.31,
              high: 4.47,
              name: "2010"
            },
            {
              predicted: 4.3783,
              conf.low: 4.2965,
              conf.high: 4.4601,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.3,
              high: 4.46,
              name: "2012"
            },
            {
              predicted: 4.2805,
              conf.low: 4.1984,
              conf.high: 4.3626,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.2,
              high: 4.36,
              name: "2014"
            },
            {
              predicted: 4.3999,
              conf.low: 4.3174,
              conf.high: 4.4824,
              id: "year",
              var: "trstep",
              displayName: "Year",
              low: 4.32,
              high: 4.48,
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
