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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              y: 3.7098,
              name: "13-29 years old"
            },
            {
              predicted: 3.4929,
              conf.low: 3.4225,
              conf.high: 3.5633,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              y: 3.4929,
              name: "29-41 years old"
            },
            {
              predicted: 3.498,
              conf.low: 3.4274,
              conf.high: 3.5686,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              y: 3.498,
              name: "41-53 years old"
            },
            {
              predicted: 3.5359,
              conf.low: 3.4634,
              conf.high: 3.6085,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              y: 3.5359,
              name: "53-66 years old"
            },
            {
              predicted: 3.732,
              conf.low: 3.6575,
              conf.high: 3.8065,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              y: 3.732,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              low: 3.64,
              high: 3.78,
              name: "13-29 years old"
            },
            {
              predicted: 3.4929,
              conf.low: 3.4225,
              conf.high: 3.5633,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              low: 3.42,
              high: 3.56,
              name: "29-41 years old"
            },
            {
              predicted: 3.498,
              conf.low: 3.4274,
              conf.high: 3.5686,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              low: 3.43,
              high: 3.57,
              name: "41-53 years old"
            },
            {
              predicted: 3.5359,
              conf.low: 3.4634,
              conf.high: 3.6085,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              low: 3.46,
              high: 3.61,
              name: "53-66 years old"
            },
            {
              predicted: 3.732,
              conf.low: 3.6575,
              conf.high: 3.8065,
              id: "Age_group",
              var: "trstplt",
              displayName: "Age Group",
              low: 3.66,
              high: 3.81,
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
