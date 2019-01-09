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
              coefficients: 0.613,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.613,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3268,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.3268,
              name: "Politics: Missing"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.2798,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.2798,
              name: "Education: Low Education"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.2534,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.2534,
              name: "Religion: Islamic"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2321,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2321,
              name: "Income: Low Income"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1949,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1949,
              name: "Race: Non-Minority"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.1731,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.1731,
              name: "Year: 2010"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.1427,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.1427,
              name: "Union Member: Former Member"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.1163,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.1163,
              name: "Marital Status: Widowed"
            },
            {
              A: "Gender",
              B: "Female",
              coefficients: 0.1004,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Female",
              col: "#C4C4C4",
              y: 0.1004,
              name: "Gender: Female"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.0808,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.0808,
              name: "Year: 2004"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.0719,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.0719,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0573,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0573,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0548,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0548,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "kidsAtHome",
              B: "Kids at Home",
              coefficients: 0.0546,
              sign: "NEG",
              var: "imbgeco",
              groupIcon: "fas fa-child",
              displayName: "Kids at Home",
              levelIcon: null,
              level: "Kids at Home: Kids at Home",
              col: "#C4C4C4",
              y: 0.0546,
              name: "Kids at Home: Kids at Home"
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
        text: "Decreases Probability of Immigration Good for Economy",
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
