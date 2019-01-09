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
              coefficients: 1.0598,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 1.0598,
              name: "Religion: Protestant"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.5126,
              sign: "POS",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.5126,
              name: "Year: 2016"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.4088,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.4088,
              name: "Union Member: Current Member"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.4026,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.4026,
              name: "Age Group: 66+ years old"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3897,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3897,
              name: "Income: High Income"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.3518,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.3518,
              name: "Religious Strength: Very religious"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.3319,
              sign: "POS",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.3319,
              name: "Year: 2014"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.3171,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.3171,
              name: "Politics: Political Right"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.2353,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.2353,
              name: "Religion: Islamic"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.2272,
              sign: "POS",
              var: "trstplc",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.2272,
              name: "Year: 2002"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1906,
              sign: "POS",
              var: "trstplc",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1906,
              name: "Race: Non-Minority"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1348,
              sign: "POS",
              var: "trstplc",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1348,
              name: "Marital Status: Never married"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.1297,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.1297,
              name: "Education: Low Education"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.1073,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.1073,
              name: "Religion: Other Religion"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.0998,
              sign: "POS",
              var: "trstplc",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.0998,
              name: "Income: Middle Income"
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
        text: "Increases Probability of Trust in Police",
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
