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
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.6117,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#458B74",
              y: 0.6117,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.356,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.356,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.3474,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.3474,
              name: "Politics: Political Right"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.3253,
              sign: "POS",
              var: "trstep",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.3253,
              name: "Education: High Education"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.2679,
              sign: "POS",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.2679,
              name: "Year: 2002"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1824,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1824,
              name: "Politics: Political Left"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.1712,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.1712,
              name: "Income: High Income"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.134,
              sign: "POS",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.134,
              name: "Year: 2006"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1334,
              sign: "POS",
              var: "trstep",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1334,
              name: "Marital Status: Never married"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.1283,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.1283,
              name: "Religion: Islamic"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.1256,
              sign: "POS",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.1256,
              name: "Year: 2004"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.1037,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.1037,
              name: "Union Member: Current Member"
            },
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.0996,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#C4C4C4",
              y: 0.0996,
              name: "Religion: Protestant"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0908,
              sign: "POS",
              var: "trstep",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0908,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.072,
              sign: "POS",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.072,
              name: "Year: 2008"
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
        text: "Increases Probability of Trust in European Parliament",
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
