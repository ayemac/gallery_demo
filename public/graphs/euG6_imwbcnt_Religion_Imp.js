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
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              y: 4.9648,
              name: "Not at all religious"
            },
            {
              predicted: 5.0403,
              conf.low: 4.9692,
              conf.high: 5.1113,
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              y: 5.0403,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.294,
              conf.low: 5.2262,
              conf.high: 5.3618,
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              y: 5.294,
              name: "Very religious"
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
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              low: 4.89,
              high: 5.04,
              name: "Not at all religious"
            },
            {
              predicted: 5.0403,
              conf.low: 4.9692,
              conf.high: 5.1113,
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              low: 4.97,
              high: 5.11,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.294,
              conf.low: 5.2262,
              conf.high: 5.3618,
              id: "Religion_Imp",
              var: "imwbcnt",
              displayName: "Religious Strength",
              low: 5.23,
              high: 5.36,
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
