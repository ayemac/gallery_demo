$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Politics\n  <br/>\n<\/h4>",
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
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              y: 6.0801,
              name: "Political Left"
            },
            {
              predicted: 6.2376,
              conf.low: 6.1718,
              conf.high: 6.3033,
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              y: 6.2376,
              name: "Political Center"
            },
            {
              predicted: 6.5212,
              conf.low: 6.4544,
              conf.high: 6.5881,
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              y: 6.5212,
              name: "Political Right"
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
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              low: 6.01,
              high: 6.15,
              name: "Political Left"
            },
            {
              predicted: 6.2376,
              conf.low: 6.1718,
              conf.high: 6.3033,
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              low: 6.17,
              high: 6.3,
              name: "Political Center"
            },
            {
              predicted: 6.5212,
              conf.low: 6.4544,
              conf.high: 6.5881,
              id: "Politics",
              var: "stflife",
              displayName: "Politics",
              low: 6.45,
              high: 6.59,
              name: "Political Right"
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
