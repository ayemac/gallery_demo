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
              coefficients: 1.1323,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 1.1323,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.4424,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.4424,
              name: "Religion: Islamic"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3091,
              sign: "NEG",
              var: "imueclt",
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
              coefficients: 0.2617,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.2617,
              name: "Education: Low Education"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.2287,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.2287,
              name: "Age Group: 66+ years old"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2079,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2079,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.1968,
              sign: "NEG",
              var: "imueclt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.1968,
              name: "Year: 2016"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1965,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1965,
              name: "Race: Non-Minority"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.1518,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.1518,
              name: "Marital Status: Widowed"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.1362,
              sign: "NEG",
              var: "imueclt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.1362,
              name: "Year: 2010"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.1166,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.1166,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.1035,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.1035,
              name: "Income: Missing"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0561,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0561,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.0467,
              sign: "NEG",
              var: "imueclt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.0467,
              name: "Year: 2006"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0404,
              sign: "NEG",
              var: "imueclt",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0404,
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
        text: "Decreases Probability of Immigration Good for Culture",
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
