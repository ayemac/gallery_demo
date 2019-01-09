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
              coefficients: 0.7665,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.7665,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.4507,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.4507,
              name: "Income: Low Income"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.3886,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.3886,
              name: "Religion: Islamic"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.3856,
              sign: "NEG",
              var: "happy",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.3856,
              name: "Marital Status: Widowed"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.2853,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.2853,
              name: "Politics: Missing"
            },
            {
              A: "Age_group",
              B: "41-53 years old",
              coefficients: 0.2051,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 41-53 years old",
              col: "#C4C4C4",
              y: 0.2051,
              name: "Age Group: 41-53 years old"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.1852,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.1852,
              name: "Union Member: Former Member"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.1796,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.1796,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1733,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1733,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.1689,
              sign: "NEG",
              var: "happy",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.1689,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1512,
              sign: "NEG",
              var: "happy",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1512,
              name: "Year: 2008"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1232,
              sign: "NEG",
              var: "happy",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1232,
              name: "Race: Minority"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.0856,
              sign: "NEG",
              var: "happy",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.0856,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.0764,
              sign: "NEG",
              var: "happy",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.0764,
              name: "Year: 2006"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0502,
              sign: "NEG",
              var: "happy",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0502,
              name: "Gender: Male"
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
        text: "Decreases Probability of Happiness",
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
