$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Marital Status\n  <br/>\n<\/h4>",
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
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              y: 4.9648,
              name: "Never married"
            },
            {
              predicted: 4.8896,
              conf.low: 4.8178,
              conf.high: 4.9615,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              y: 4.8896,
              name: "Married"
            },
            {
              predicted: 4.7955,
              conf.low: 4.72,
              conf.high: 4.8709,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              y: 4.7955,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.8313,
              conf.low: 4.7556,
              conf.high: 4.907,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              y: 4.8313,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              low: 4.89,
              high: 5.04,
              name: "Never married"
            },
            {
              predicted: 4.8896,
              conf.low: 4.8178,
              conf.high: 4.9615,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              low: 4.82,
              high: 4.96,
              name: "Married"
            },
            {
              predicted: 4.7955,
              conf.low: 4.72,
              conf.high: 4.8709,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              low: 4.72,
              high: 4.87,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.8313,
              conf.low: 4.7556,
              conf.high: 4.907,
              id: "Marital_Status",
              var: "imwbcnt",
              displayName: "Marital Status",
              low: 4.76,
              high: 4.91,
              name: "Widowed"
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
