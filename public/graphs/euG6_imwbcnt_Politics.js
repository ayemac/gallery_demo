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
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              y: 4.9648,
              name: "Political Left"
            },
            {
              predicted: 4.5851,
              conf.low: 4.5139,
              conf.high: 4.6563,
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              y: 4.5851,
              name: "Political Center"
            },
            {
              predicted: 4.5455,
              conf.low: 4.4733,
              conf.high: 4.6178,
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              y: 4.5455,
              name: "Political Right"
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
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              low: 4.89,
              high: 5.04,
              name: "Political Left"
            },
            {
              predicted: 4.5851,
              conf.low: 4.5139,
              conf.high: 4.6563,
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              low: 4.51,
              high: 4.66,
              name: "Political Center"
            },
            {
              predicted: 4.5455,
              conf.low: 4.4733,
              conf.high: 4.6178,
              id: "Politics",
              var: "imwbcnt",
              displayName: "Politics",
              low: 4.47,
              high: 4.62,
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
