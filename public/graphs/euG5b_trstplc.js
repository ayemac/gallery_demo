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
              coefficients: 1.1686,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 1.1686,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.7993,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.7993,
              name: "Religion: Jewish"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.5289,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.5289,
              name: "Politics: Missing"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.3,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.3,
              name: "Union Member: Former Member"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2557,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2557,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.2146,
              sign: "NEG",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.2146,
              name: "Year: 2008"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.1828,
              sign: "NEG",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.1828,
              name: "Year: 2006"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.1733,
              sign: "NEG",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.1733,
              name: "Year: 2010"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1632,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1632,
              name: "Race: Minority"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.154,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.154,
              name: "Income: Missing"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.1104,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.1104,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Education",
              B: "Middle Education",
              coefficients: 0.107,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Middle Education",
              col: "#C4C4C4",
              y: 0.107,
              name: "Education: Middle Education"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0929,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0929,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.083,
              sign: "NEG",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.083,
              name: "Year: 2012"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0488,
              sign: "NEG",
              var: "trstplc",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0488,
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
        text: "Decreases Probability of Trust in Police",
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
