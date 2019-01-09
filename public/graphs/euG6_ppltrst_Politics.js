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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              y: 4.1117,
              name: "Political Left"
            },
            {
              predicted: 3.9039,
              conf.low: 3.8311,
              conf.high: 3.9766,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              y: 3.9039,
              name: "Political Center"
            },
            {
              predicted: 4.074,
              conf.low: 4.0001,
              conf.high: 4.1479,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              y: 4.074,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              low: 4.04,
              high: 4.18,
              name: "Political Left"
            },
            {
              predicted: 3.9039,
              conf.low: 3.8311,
              conf.high: 3.9766,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              low: 3.83,
              high: 3.98,
              name: "Political Center"
            },
            {
              predicted: 4.074,
              conf.low: 4.0001,
              conf.high: 4.1479,
              id: "Politics",
              var: "ppltrst",
              displayName: "Politics",
              low: 4,
              high: 4.15,
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
