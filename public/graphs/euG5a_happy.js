$(function () {
  $('#container').highcharts({
      title: {
        text: ""
      },
      yAxis: {
        title: {
          text: "Importance"
        },
        type: "linear",
        min: 0,
        max: 1
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
          showInLegend: false,
          marker: {
            enabled: true
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
        bar: {
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            format: "{point.y:.2f}"
          },
          enableMouseTracking: true
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        crosshairs: {
          enabled: true,
          color: "rgba(43,144,143,0.15)"
        },
        backgroundColor: "#f0f0f0",
        pointFormat: "{point.y:.2f}",
        shared: true,
        borderWidth: 1
      },
      series: [
        {
          group: "group",
          data: [
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.5482,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.5482,
              name: "Religion: Protestant"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.5116,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.5116,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "Marital_Status",
              B: "Married",
              coefficients: 0.4399,
              sign: "POS",
              var: "happy",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Married",
              col: "#C4C4C4",
              y: 0.4399,
              name: "Marital Status: Married"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3706,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3706,
              name: "Income: High Income"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.2944,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.2944,
              name: "Religion: Jewish"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.2898,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.2898,
              name: "Union Member: Current Member"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2472,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2472,
              name: "Religious Strength: Very religious"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.2288,
              sign: "POS",
              var: "happy",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.2288,
              name: "Year: 2016"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.2282,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.2282,
              name: "Politics: Political Right"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.1881,
              sign: "POS",
              var: "happy",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.1881,
              name: "Education: High Education"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.1673,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.1673,
              name: "Prayer Frequency: Never Prays"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.1548,
              sign: "POS",
              var: "happy",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.1548,
              name: "Year: 2014"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1266,
              sign: "POS",
              var: "happy",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1266,
              name: "Race: Non-Minority"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.1034,
              sign: "POS",
              var: "happy",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.1034,
              name: "Income: Middle Income"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1021,
              sign: "POS",
              var: "happy",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1021,
              name: "Marital Status: Never married"
            }
          ],
          type: "bar",
          name: "Importance"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      subtitle: {
        text: "Increases Probability of Happiness",
        style: {
          color: "#2b908f",
          fontWeight: "normal",
          fontSize: "16px"
        }
      },
      legend: {
        enabled: false,
        layout: "horizontal",
        verticalAlign: "bottom",
        floating: false,
        align: "center",
        style: {
          fontsize: "14px"
        }
      },
      colors: ["#458B74", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
