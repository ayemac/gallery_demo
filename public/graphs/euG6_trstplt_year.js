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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.7098,
              name: "2002"
            },
            {
              predicted: 3.5228,
              conf.low: 3.4525,
              conf.high: 3.593,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.5228,
              name: "2004"
            },
            {
              predicted: 3.4882,
              conf.low: 3.4176,
              conf.high: 3.5588,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.4882,
              name: "2006"
            },
            {
              predicted: 3.4499,
              conf.low: 3.3794,
              conf.high: 3.5203,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.4499,
              name: "2008"
            },
            {
              predicted: 3.3016,
              conf.low: 3.2311,
              conf.high: 3.372,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.3016,
              name: "2010"
            },
            {
              predicted: 3.3492,
              conf.low: 3.2786,
              conf.high: 3.4197,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.3492,
              name: "2012"
            },
            {
              predicted: 3.4003,
              conf.low: 3.3294,
              conf.high: 3.4711,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.4003,
              name: "2014"
            },
            {
              predicted: 3.6375,
              conf.low: 3.5663,
              conf.high: 3.7087,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              y: 3.6375,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.64,
              high: 3.78,
              name: "2002"
            },
            {
              predicted: 3.5228,
              conf.low: 3.4525,
              conf.high: 3.593,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.45,
              high: 3.59,
              name: "2004"
            },
            {
              predicted: 3.4882,
              conf.low: 3.4176,
              conf.high: 3.5588,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.42,
              high: 3.56,
              name: "2006"
            },
            {
              predicted: 3.4499,
              conf.low: 3.3794,
              conf.high: 3.5203,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.38,
              high: 3.52,
              name: "2008"
            },
            {
              predicted: 3.3016,
              conf.low: 3.2311,
              conf.high: 3.372,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.23,
              high: 3.37,
              name: "2010"
            },
            {
              predicted: 3.3492,
              conf.low: 3.2786,
              conf.high: 3.4197,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.28,
              high: 3.42,
              name: "2012"
            },
            {
              predicted: 3.4003,
              conf.low: 3.3294,
              conf.high: 3.4711,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.33,
              high: 3.47,
              name: "2014"
            },
            {
              predicted: 3.6375,
              conf.low: 3.5663,
              conf.high: 3.7087,
              id: "year",
              var: "trstplt",
              displayName: "Year",
              low: 3.57,
              high: 3.71,
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
