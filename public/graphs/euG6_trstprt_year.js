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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.7422,
              name: "2004"
            },
            {
              predicted: 3.7222,
              conf.low: 3.6488,
              conf.high: 3.7957,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.7222,
              name: "2006"
            },
            {
              predicted: 3.6831,
              conf.low: 3.6098,
              conf.high: 3.7565,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.6831,
              name: "2008"
            },
            {
              predicted: 3.5205,
              conf.low: 3.4472,
              conf.high: 3.5938,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.5205,
              name: "2010"
            },
            {
              predicted: 3.5687,
              conf.low: 3.4953,
              conf.high: 3.6421,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.5687,
              name: "2012"
            },
            {
              predicted: 3.629,
              conf.low: 3.5553,
              conf.high: 3.7027,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.629,
              name: "2014"
            },
            {
              predicted: 3.8716,
              conf.low: 3.7976,
              conf.high: 3.9457,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              y: 3.8716,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.67,
              high: 3.82,
              name: "2004"
            },
            {
              predicted: 3.7222,
              conf.low: 3.6488,
              conf.high: 3.7957,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.65,
              high: 3.8,
              name: "2006"
            },
            {
              predicted: 3.6831,
              conf.low: 3.6098,
              conf.high: 3.7565,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.61,
              high: 3.76,
              name: "2008"
            },
            {
              predicted: 3.5205,
              conf.low: 3.4472,
              conf.high: 3.5938,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.45,
              high: 3.59,
              name: "2010"
            },
            {
              predicted: 3.5687,
              conf.low: 3.4953,
              conf.high: 3.6421,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.5,
              high: 3.64,
              name: "2012"
            },
            {
              predicted: 3.629,
              conf.low: 3.5553,
              conf.high: 3.7027,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.56,
              high: 3.7,
              name: "2014"
            },
            {
              predicted: 3.8716,
              conf.low: 3.7976,
              conf.high: 3.9457,
              id: "year",
              var: "trstprt",
              displayName: "Year",
              low: 3.8,
              high: 3.95,
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
