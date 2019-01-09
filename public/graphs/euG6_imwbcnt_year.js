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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 4.9648,
              name: "2002"
            },
            {
              predicted: 4.9268,
              conf.low: 4.856,
              conf.high: 4.9976,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 4.9268,
              name: "2004"
            },
            {
              predicted: 4.9535,
              conf.low: 4.8823,
              conf.high: 5.0247,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 4.9535,
              name: "2006"
            },
            {
              predicted: 5.0865,
              conf.low: 5.0155,
              conf.high: 5.1576,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 5.0865,
              name: "2008"
            },
            {
              predicted: 5.0067,
              conf.low: 4.9357,
              conf.high: 5.0777,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 5.0067,
              name: "2010"
            },
            {
              predicted: 5.0891,
              conf.low: 5.018,
              conf.high: 5.1602,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 5.0891,
              name: "2012"
            },
            {
              predicted: 5.0993,
              conf.low: 5.0279,
              conf.high: 5.1707,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 5.0993,
              name: "2014"
            },
            {
              predicted: 5.0801,
              conf.low: 5.0083,
              conf.high: 5.1518,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              y: 5.0801,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 4.89,
              high: 5.04,
              name: "2002"
            },
            {
              predicted: 4.9268,
              conf.low: 4.856,
              conf.high: 4.9976,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 4.86,
              high: 5,
              name: "2004"
            },
            {
              predicted: 4.9535,
              conf.low: 4.8823,
              conf.high: 5.0247,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 4.88,
              high: 5.02,
              name: "2006"
            },
            {
              predicted: 5.0865,
              conf.low: 5.0155,
              conf.high: 5.1576,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 5.02,
              high: 5.16,
              name: "2008"
            },
            {
              predicted: 5.0067,
              conf.low: 4.9357,
              conf.high: 5.0777,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 4.94,
              high: 5.08,
              name: "2010"
            },
            {
              predicted: 5.0891,
              conf.low: 5.018,
              conf.high: 5.1602,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 5.02,
              high: 5.16,
              name: "2012"
            },
            {
              predicted: 5.0993,
              conf.low: 5.0279,
              conf.high: 5.1707,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 5.03,
              high: 5.17,
              name: "2014"
            },
            {
              predicted: 5.0801,
              conf.low: 5.0083,
              conf.high: 5.1518,
              id: "year",
              var: "imwbcnt",
              displayName: "Year",
              low: 5.01,
              high: 5.15,
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
