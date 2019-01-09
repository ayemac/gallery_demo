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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              y: 6.0801,
              name: "Not at all religious"
            },
            {
              predicted: 6.2114,
              conf.low: 6.1457,
              conf.high: 6.277,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              y: 6.2114,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.4712,
              conf.low: 6.4086,
              conf.high: 6.5338,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              y: 6.4712,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              low: 6.01,
              high: 6.15,
              name: "Not at all religious"
            },
            {
              predicted: 6.2114,
              conf.low: 6.1457,
              conf.high: 6.277,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              low: 6.15,
              high: 6.28,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.4712,
              conf.low: 6.4086,
              conf.high: 6.5338,
              id: "Religion_Imp",
              var: "stflife",
              displayName: "Religious Strength",
              low: 6.41,
              high: 6.53,
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
