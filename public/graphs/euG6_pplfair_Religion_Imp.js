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
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              y: 5.1436,
              name: "Not at all religious"
            },
            {
              predicted: 5.2201,
              conf.low: 5.151,
              conf.high: 5.2893,
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              y: 5.2201,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.4069,
              conf.low: 5.3409,
              conf.high: 5.4729,
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              y: 5.4069,
              name: "Very religious"
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
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              low: 5.07,
              high: 5.21,
              name: "Not at all religious"
            },
            {
              predicted: 5.2201,
              conf.low: 5.151,
              conf.high: 5.2893,
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              low: 5.15,
              high: 5.29,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.4069,
              conf.low: 5.3409,
              conf.high: 5.4729,
              id: "Religion_Imp",
              var: "pplfair",
              displayName: "Religious Strength",
              low: 5.34,
              high: 5.47,
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
