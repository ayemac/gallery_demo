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
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              y: 5.9145,
              name: "Political Left"
            },
            {
              predicted: 6.108,
              conf.low: 5.9332,
              conf.high: 6.2828,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              y: 6.108,
              name: "Political Center"
            },
            {
              predicted: 6.1811,
              conf.low: 6.0033,
              conf.high: 6.3589,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              y: 6.1811,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              low: 5.74,
              high: 6.09,
              name: "Political Left"
            },
            {
              predicted: 6.108,
              conf.low: 5.9332,
              conf.high: 6.2828,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              low: 5.93,
              high: 6.28,
              name: "Political Center"
            },
            {
              predicted: 6.1811,
              conf.low: 6.0033,
              conf.high: 6.3589,
              id: "Politics",
              var: "stfjb",
              displayName: "Politics",
              low: 6,
              high: 6.36,
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
