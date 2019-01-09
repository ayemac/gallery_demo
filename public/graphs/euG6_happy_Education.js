$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
              id: "Education",
              var: "happy",
              displayName: "Education",
              y: 6.6558,
              name: "Low Education"
            },
            {
              predicted: 6.7629,
              conf.low: 6.7048,
              conf.high: 6.821,
              id: "Education",
              var: "happy",
              displayName: "Education",
              y: 6.7629,
              name: "Middle Education"
            },
            {
              predicted: 6.9431,
              conf.low: 6.8842,
              conf.high: 7.0021,
              id: "Education",
              var: "happy",
              displayName: "Education",
              y: 6.9431,
              name: "High Education"
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
              id: "Education",
              var: "happy",
              displayName: "Education",
              low: 6.6,
              high: 6.71,
              name: "Low Education"
            },
            {
              predicted: 6.7629,
              conf.low: 6.7048,
              conf.high: 6.821,
              id: "Education",
              var: "happy",
              displayName: "Education",
              low: 6.7,
              high: 6.82,
              name: "Middle Education"
            },
            {
              predicted: 6.9431,
              conf.low: 6.8842,
              conf.high: 7.0021,
              id: "Education",
              var: "happy",
              displayName: "Education",
              low: 6.88,
              high: 7,
              name: "High Education"
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
