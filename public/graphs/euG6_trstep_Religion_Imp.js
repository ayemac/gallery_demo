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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              y: 4.842,
              name: "Not at all religious"
            },
            {
              predicted: 4.937,
              conf.low: 4.8551,
              conf.high: 5.0189,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              y: 4.937,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.2553,
              conf.low: 5.1772,
              conf.high: 5.3334,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              y: 5.2553,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              low: 4.76,
              high: 4.92,
              name: "Not at all religious"
            },
            {
              predicted: 4.937,
              conf.low: 4.8551,
              conf.high: 5.0189,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              low: 4.86,
              high: 5.02,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.2553,
              conf.low: 5.1772,
              conf.high: 5.3334,
              id: "Religion_Imp",
              var: "trstep",
              displayName: "Religious Strength",
              low: 5.18,
              high: 5.33,
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
