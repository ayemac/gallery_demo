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
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              y: 5.0693,
              name: "Political Left"
            },
            {
              predicted: 4.8942,
              conf.low: 4.8117,
              conf.high: 4.9766,
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              y: 4.8942,
              name: "Political Center"
            },
            {
              predicted: 5.1885,
              conf.low: 5.1047,
              conf.high: 5.2722,
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              y: 5.1885,
              name: "Political Right"
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
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              low: 4.99,
              high: 5.15,
              name: "Political Left"
            },
            {
              predicted: 4.8942,
              conf.low: 4.8117,
              conf.high: 4.9766,
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              low: 4.81,
              high: 4.98,
              name: "Political Center"
            },
            {
              predicted: 5.1885,
              conf.low: 5.1047,
              conf.high: 5.2722,
              id: "Politics",
              var: "trstun",
              displayName: "Politics",
              low: 5.1,
              high: 5.27,
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
