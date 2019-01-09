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
              coefficients: 0.7212,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.7212,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3091,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.3091,
              name: "Politics: Missing"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.2376,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.2376,
              name: "Education: Low Education"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.1846,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.1846,
              name: "Age Group: 66+ years old"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1691,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1691,
              name: "Race: Non-Minority"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.1557,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.1557,
              name: "Income: Low Income"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.1492,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.1492,
              name: "Religion: Islamic"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.1257,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.1257,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.1129,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.1129,
              name: "Marital Status: Widowed"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.0944,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.0944,
              name: "Year: 2004"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.0927,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.0927,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.0844,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.0844,
              name: "Year: 2002"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0817,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0817,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.0657,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.0657,
              name: "Year: 2006"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0643,
              sign: "NEG",
              var: "imwbcnt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0643,
              name: "Religious Strength: Not at all religious"
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
        text: "Decreases Probability of Immigration Good for Country",
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
