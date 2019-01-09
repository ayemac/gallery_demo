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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 5.0693,
              name: "2002"
            },
            {
              predicted: 4.9797,
              conf.low: 4.8977,
              conf.high: 5.0617,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.9797,
              name: "2004"
            },
            {
              predicted: 4.9158,
              conf.low: 4.8334,
              conf.high: 4.9983,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.9158,
              name: "2006"
            },
            {
              predicted: 4.924,
              conf.low: 4.8417,
              conf.high: 5.0062,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.924,
              name: "2008"
            },
            {
              predicted: 4.7275,
              conf.low: 4.6452,
              conf.high: 4.8097,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.7275,
              name: "2010"
            },
            {
              predicted: 4.771,
              conf.low: 4.6887,
              conf.high: 4.8534,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.771,
              name: "2012"
            },
            {
              predicted: 4.6812,
              conf.low: 4.5985,
              conf.high: 4.7638,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.6812,
              name: "2014"
            },
            {
              predicted: 4.7083,
              conf.low: 4.6253,
              conf.high: 4.7913,
              id: "year",
              var: "trstun",
              displayName: "Year",
              y: 4.7083,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.99,
              high: 5.15,
              name: "2002"
            },
            {
              predicted: 4.9797,
              conf.low: 4.8977,
              conf.high: 5.0617,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.9,
              high: 5.06,
              name: "2004"
            },
            {
              predicted: 4.9158,
              conf.low: 4.8334,
              conf.high: 4.9983,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.83,
              high: 5,
              name: "2006"
            },
            {
              predicted: 4.924,
              conf.low: 4.8417,
              conf.high: 5.0062,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.84,
              high: 5.01,
              name: "2008"
            },
            {
              predicted: 4.7275,
              conf.low: 4.6452,
              conf.high: 4.8097,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.65,
              high: 4.81,
              name: "2010"
            },
            {
              predicted: 4.771,
              conf.low: 4.6887,
              conf.high: 4.8534,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.69,
              high: 4.85,
              name: "2012"
            },
            {
              predicted: 4.6812,
              conf.low: 4.5985,
              conf.high: 4.7638,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.6,
              high: 4.76,
              name: "2014"
            },
            {
              predicted: 4.7083,
              conf.low: 4.6253,
              conf.high: 4.7913,
              id: "year",
              var: "trstun",
              displayName: "Year",
              low: 4.63,
              high: 4.79,
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
