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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              y: 4.6353,
              name: "Political Left"
            },
            {
              predicted: 4.4686,
              conf.low: 4.3923,
              conf.high: 4.5449,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              y: 4.4686,
              name: "Political Center"
            },
            {
              predicted: 4.8994,
              conf.low: 4.8219,
              conf.high: 4.9769,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              y: 4.8994,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              low: 4.56,
              high: 4.71,
              name: "Political Left"
            },
            {
              predicted: 4.4686,
              conf.low: 4.3923,
              conf.high: 4.5449,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              low: 4.39,
              high: 4.54,
              name: "Political Center"
            },
            {
              predicted: 4.8994,
              conf.low: 4.8219,
              conf.high: 4.9769,
              id: "Politics",
              var: "trstprl",
              displayName: "Politics",
              low: 4.82,
              high: 4.98,
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
