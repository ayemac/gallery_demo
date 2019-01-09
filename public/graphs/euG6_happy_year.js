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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.6558,
              name: "2002"
            },
            {
              predicted: 6.7017,
              conf.low: 6.6431,
              conf.high: 6.7603,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.7017,
              name: "2004"
            },
            {
              predicted: 6.6671,
              conf.low: 6.6081,
              conf.high: 6.726,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.6671,
              name: "2006"
            },
            {
              predicted: 6.6611,
              conf.low: 6.6023,
              conf.high: 6.72,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.6611,
              name: "2008"
            },
            {
              predicted: 6.7144,
              conf.low: 6.6556,
              conf.high: 6.7732,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.7144,
              name: "2010"
            },
            {
              predicted: 6.8039,
              conf.low: 6.745,
              conf.high: 6.8628,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.8039,
              name: "2012"
            },
            {
              predicted: 6.8017,
              conf.low: 6.7426,
              conf.high: 6.8609,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.8017,
              name: "2014"
            },
            {
              predicted: 6.9658,
              conf.low: 6.9064,
              conf.high: 7.0252,
              id: "year",
              var: "happy",
              displayName: "Year",
              y: 6.9658,
              name: "2016"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.6,
              high: 6.71,
              name: "2002"
            },
            {
              predicted: 6.7017,
              conf.low: 6.6431,
              conf.high: 6.7603,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.64,
              high: 6.76,
              name: "2004"
            },
            {
              predicted: 6.6671,
              conf.low: 6.6081,
              conf.high: 6.726,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.61,
              high: 6.73,
              name: "2006"
            },
            {
              predicted: 6.6611,
              conf.low: 6.6023,
              conf.high: 6.72,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.6,
              high: 6.72,
              name: "2008"
            },
            {
              predicted: 6.7144,
              conf.low: 6.6556,
              conf.high: 6.7732,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.66,
              high: 6.77,
              name: "2010"
            },
            {
              predicted: 6.8039,
              conf.low: 6.745,
              conf.high: 6.8628,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.75,
              high: 6.86,
              name: "2012"
            },
            {
              predicted: 6.8017,
              conf.low: 6.7426,
              conf.high: 6.8609,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.74,
              high: 6.86,
              name: "2014"
            },
            {
              predicted: 6.9658,
              conf.low: 6.9064,
              conf.high: 7.0252,
              id: "year",
              var: "happy",
              displayName: "Year",
              low: 6.91,
              high: 7.03,
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
