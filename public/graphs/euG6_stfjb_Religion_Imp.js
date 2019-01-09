$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religious Strength\n  <br/>\n<\/h4>",
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
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              y: 5.9145,
              name: "Not at all religious"
            },
            {
              predicted: 6.0526,
              conf.low: 5.878,
              conf.high: 6.2272,
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              y: 6.0526,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.2449,
              conf.low: 6.0789,
              conf.high: 6.4108,
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              y: 6.2449,
              name: "Very religious"
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
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              low: 5.74,
              high: 6.09,
              name: "Not at all religious"
            },
            {
              predicted: 6.0526,
              conf.low: 5.878,
              conf.high: 6.2272,
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              low: 5.88,
              high: 6.23,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.2449,
              conf.low: 6.0789,
              conf.high: 6.4108,
              id: "Religion_Imp",
              var: "stfjb",
              displayName: "Religious Strength",
              low: 6.08,
              high: 6.41,
              name: "Very religious"
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
