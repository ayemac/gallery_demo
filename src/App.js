import React, {Component} from "react";
import {
  ReactiveBase,
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange,
  SelectedFilters,
  ResultCard
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }
  render() {
    return (
      <div className="container">
        <ReactiveBase 
          app="ess_gallery"
          credentials="jXtAaSmVS:25c02ee1-adcd-4a63-a05a-b7bb51d0ede2"
          theme={{
            colors: {
              backgroundColor: "#212121"
            }
          }}
        >
<DataSearch            
    componentId="mainSearch"            
    dataField={["var", "graphID", "Questions", "Topic_1", "Topic_2"]}                      
    className="search-bar"            
    queryFormat="and"            
    placeholder="Search for info..."                  
/>

<MultiList     
    componentId="list-2"
    dataField="Topic_1.keyword"
    className="Topic_1-filter"
    size={20}
    sortBy="asc"
    queryFormat="or"
    selectAllLabel="All Topics"
    showCheckbox={true}
    showCount={true}
    showSearch={true}
    placeholder="Search for a Topic"
    react={{          
        and: [
            "mainSearch",
            "results",
            "date-filter",
            "RangeSlider",
            "language-list",
            "revenue-list"
        ]
    }}          
    showFilter={true}
    filterLabel="Topic_1"
    URLParams={false} 
    innerClass={{ 
        label: "list-item",
        input: "list-input"
    }}
/>


{/* <MultiList
  componentId="list-2"
  dataField="Topic_1.keyword"
  size={100}
  style={{
    marginBottom: 20
  }}
  title="Topic"
/> */}
<ResultCard   
  componentId="results"
  dataField="graphID"
  pagination={true}
  paginationAt="bottom"
  pages={5}
	size={6}
  Loader="Loading..."
  showResultStats={true}
  noResults="No results were found..."
  className="Result_card"
  innerClass={{
    title: "result-title",
    listItem: "result-item",
    list: "list-container",
    sortOptions: "sort-options",
    resultStats: "result-stats",
    resultsInfo: "result-list-info",
    poweredBy: "powered-by"
  }}
  react={{
    and: [
      "mainSearch",
      "RangeSlider",
      "language-list",
      "date-filter",
      "list-2",
      "revenue-list"
    ]
  }}
  onData={function(res) {
    return {
      description: (
        <div className="main-description">
            <iframe  src={"./graphs/" + res.html} height= '600px' width= '100%' frameBorder="0" ></iframe>
              <div className="info colored">
                <h3 className="overlay-title">{res.var}</h3>
          </div>
        </div>
      ),
      url: "./graphs/" + res.html
    };
  }}
/>

        </ReactiveBase>
      </div>
    );
  }
}

export default App;
