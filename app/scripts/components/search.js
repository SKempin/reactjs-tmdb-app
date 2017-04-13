import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class SearchBox extends Component {

  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">

          <div className="col-xs-12 col-sm-6 col-lg-5">
            <a href="./" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <form className="searchbox">
              {/* <label> */}
                <input ref="search suggestion" onClick={this.handleChange} className="searchbox__input typeahead form-control" type="text" placeholder="Search Movie Title..." id="q" />
              {/* </label> */}
              </form>
          </div>
        </div>
      </div>
    )
  }
}
module.exports = SearchBox;
