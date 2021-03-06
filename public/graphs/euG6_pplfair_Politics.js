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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              y: 5.1436,
              name: "Political Left"
            },
            {
              predicted: 5.0123,
              conf.low: 4.943,
              conf.high: 5.0816,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              y: 5.0123,
              name: "Political Center"
            },
            {
              predicted: 5.1725,
              conf.low: 5.1021,
              conf.high: 5.2429,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              y: 5.1725,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              low: 5.07,
              high: 5.21,
              name: "Political Left"
            },
            {
              predicted: 5.0123,
              conf.low: 4.943,
              conf.high: 5.0816,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              low: 4.94,
              high: 5.08,
              name: "Political Center"
            },
            {
              predicted: 5.1725,
              conf.low: 5.1021,
              conf.high: 5.2429,
              id: "Politics",
              var: "pplfair",
              displayName: "Politics",
              low: 5.1,
              high: 5.24,
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
