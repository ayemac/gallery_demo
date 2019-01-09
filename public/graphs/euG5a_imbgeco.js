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
              A: "Education",
              B: "High Education",
              coefficients: 0.7518,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#458B74",
              y: 0.7518,
              name: "Education: High Education"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.3645,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.3645,
              name: "Politics: Political Left"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3142,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3142,
              name: "Income: High Income"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2199,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2199,
              name: "Religious Strength: Very religious"
            },
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.1937,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#C4C4C4",
              y: 0.1937,
              name: "Religion: Protestant"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.1877,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.1877,
              name: "Religion: Jewish"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.186,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.186,
              name: "Race: Minority"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1816,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1816,
              name: "Marital Status: Never married"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.1098,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.1098,
              name: "Gender: Male"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.0889,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.0889,
              name: "Union Member: Current Member"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.0841,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.0841,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.0826,
              sign: "POS",
              var: "imbgeco",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.0826,
              name: "Year: 2002"
            },
            {
              A: "kidsAtHome",
              B: "No Kids at Home",
              coefficients: 0.0568,
              sign: "POS",
              var: "imbgeco",
              groupIcon: "fas fa-child",
              displayName: "Kids at Home",
              levelIcon: null,
              level: "Kids at Home: No Kids at Home",
              col: "#C4C4C4",
              y: 0.0568,
              name: "Kids at Home: No Kids at Home"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.0562,
              sign: "POS",
              var: "imbgeco",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.0562,
              name: "Year: 2006"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.0503,
              sign: "POS",
              var: "imbgeco",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.0503,
              name: "Year: 2016"
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
        text: "Increases Probability of Immigration Good for Economy",
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
