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
              B: "Eastern Orthodox",
              coefficients: 0.959,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.959,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.5734,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.5734,
              name: "Income: Low Income"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3287,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.3287,
              name: "Politics: Missing"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.3028,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.3028,
              name: "Religion: Islamic"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.2628,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.2628,
              name: "Union Member: Former Member"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.2624,
              sign: "NEG",
              var: "stflife",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.2624,
              name: "Marital Status: Widowed"
            },
            {
              A: "Age_group",
              B: "41-53 years old",
              coefficients: 0.2258,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 41-53 years old",
              col: "#C4C4C4",
              y: 0.2258,
              name: "Age Group: 41-53 years old"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.2119,
              sign: "NEG",
              var: "stflife",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.2119,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1887,
              sign: "NEG",
              var: "stflife",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1887,
              name: "Year: 2008"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1849,
              sign: "NEG",
              var: "stflife",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1849,
              name: "Race: Minority"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.1382,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.1382,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1328,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1328,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.1136,
              sign: "NEG",
              var: "stflife",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.1136,
              name: "Year: 2006"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.0987,
              sign: "NEG",
              var: "stflife",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.0987,
              name: "Year: 2010"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.0913,
              sign: "NEG",
              var: "stflife",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.0913,
              name: "Politics: Political Left"
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
      colors: ["#8B1A1A", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      subtitle: {
        text: "Decreases Probability of Life Satisfaction",
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
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
