$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Age Group\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              y: 4.9488,
              name: "13-29 years old"
            },
            {
              predicted: 4.8247,
              conf.low: 4.7482,
              conf.high: 4.9011,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              y: 4.8247,
              name: "29-41 years old"
            },
            {
              predicted: 4.8416,
              conf.low: 4.7649,
              conf.high: 4.9184,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              y: 4.8416,
              name: "41-53 years old"
            },
            {
              predicted: 4.7797,
              conf.low: 4.7008,
              conf.high: 4.8585,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              y: 4.7797,
              name: "53-66 years old"
            },
            {
              predicted: 4.7433,
              conf.low: 4.6622,
              conf.high: 4.8244,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              y: 4.7433,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              low: 4.87,
              high: 5.03,
              name: "13-29 years old"
            },
            {
              predicted: 4.8247,
              conf.low: 4.7482,
              conf.high: 4.9011,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              low: 4.75,
              high: 4.9,
              name: "29-41 years old"
            },
            {
              predicted: 4.8416,
              conf.low: 4.7649,
              conf.high: 4.9184,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              low: 4.76,
              high: 4.92,
              name: "41-53 years old"
            },
            {
              predicted: 4.7797,
              conf.low: 4.7008,
              conf.high: 4.8585,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              low: 4.7,
              high: 4.86,
              name: "53-66 years old"
            },
            {
              predicted: 4.7433,
              conf.low: 4.6622,
              conf.high: 4.8244,
              id: "Age_group",
              var: "imbgeco",
              displayName: "Age Group",
              low: 4.66,
              high: 4.82,
              name: "66+ years old"
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
