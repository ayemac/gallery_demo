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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.4109,
              name: "2002"
            },
            {
              predicted: 4.4991,
              conf.low: 4.429,
              conf.high: 4.5692,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.4991,
              name: "2004"
            },
            {
              predicted: 4.5631,
              conf.low: 4.4926,
              conf.high: 4.6336,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.5631,
              name: "2006"
            },
            {
              predicted: 4.5848,
              conf.low: 4.5145,
              conf.high: 4.6552,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.5848,
              name: "2008"
            },
            {
              predicted: 4.6777,
              conf.low: 4.6074,
              conf.high: 4.748,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.6777,
              name: "2010"
            },
            {
              predicted: 4.7158,
              conf.low: 4.6454,
              conf.high: 4.7862,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.7158,
              name: "2012"
            },
            {
              predicted: 4.6828,
              conf.low: 4.612,
              conf.high: 4.7536,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.6828,
              name: "2014"
            },
            {
              predicted: 4.904,
              conf.low: 4.8329,
              conf.high: 4.9751,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              y: 4.904,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.34,
              high: 4.48,
              name: "2002"
            },
            {
              predicted: 4.4991,
              conf.low: 4.429,
              conf.high: 4.5692,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.43,
              high: 4.57,
              name: "2004"
            },
            {
              predicted: 4.5631,
              conf.low: 4.4926,
              conf.high: 4.6336,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.49,
              high: 4.63,
              name: "2006"
            },
            {
              predicted: 4.5848,
              conf.low: 4.5145,
              conf.high: 4.6552,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.51,
              high: 4.66,
              name: "2008"
            },
            {
              predicted: 4.6777,
              conf.low: 4.6074,
              conf.high: 4.748,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.61,
              high: 4.75,
              name: "2010"
            },
            {
              predicted: 4.7158,
              conf.low: 4.6454,
              conf.high: 4.7862,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.65,
              high: 4.79,
              name: "2012"
            },
            {
              predicted: 4.6828,
              conf.low: 4.612,
              conf.high: 4.7536,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.61,
              high: 4.75,
              name: "2014"
            },
            {
              predicted: 4.904,
              conf.low: 4.8329,
              conf.high: 4.9751,
              id: "year",
              var: "pplhlp",
              displayName: "Year",
              low: 4.83,
              high: 4.98,
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
