import React, { Component } from "react";
import ReactDOM from "react-dom";
const TMDBLogo = "./images/tmdb.svg";

class SearchBox extends Component {
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-5">
            <a
              href="./"
              title="ReactJS TMDb Movie Search"
              onclick="ga('send', 'event', 'link', 'internal', 'TMDB logo')"
            >
              <img src={TMDBLogo} className="logo" alt="The Movie Database" />
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <form className="searchbox">
              {/* <label> */}
              <input
                ref="search suggestion"
                onClick={this.handleChange}
                className="searchbox__input typeahead form-control"
                type="text"
                placeholder="Search Movie Title..."
                id="q"
              />
              {/* </label> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = SearchBox;
