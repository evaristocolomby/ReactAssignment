import React from 'react';
import {render} from 'react-dom';

var App = React.createClass({
  getInitialState: function () {
    return {
      main: "vertical-main",
      image:"vertical-image",
      text:"vertical-text",
      text_description:"vertical-text-description",
      links:"vertical-links",
      switch:"vertical-switch",
      color_switch:"vertical-color-switch",
      theme: "light-theme"
    };
  },
  switchToHorizontal: function () {
    this.setState({
      main: "horizontal-main",
      image:"horizontal-image",
      text:"horizontal-text",
      text_description:"horizontal-text-description",
      links:"horizontal-links",
      switch:"horizontal-switch",
      color_switch:"horizontal-color-switch",
    });
  },
  switchToVertical: function () {
    this.setState({
      main: "vertical-main",
      image:"vertical-image",
      text:"vertical-text",
      text_description:"vertical-text-description",
      links:"vertical-links",
      switch:"vertical-switch",
      color_switch:"vertical-color-switch",
    });
  },
  switchToDarker: function () {
    this.setState({
      theme: "dark-theme",
    });
  },
  switchToLighter: function () {
    this.setState({
      theme: "light-theme",
    });
  },

  render: function() {
    return (
      <div className={this.state.main + " " + this.state.theme}>
        <div className={this.state.image}>
        </div>
        <div className={this.state.text}>
          <div className={this.state.text_description}>
            {this.state.main == "horizontal-main" ? <h3>Title here</h3>  : null}
            {this.props.main_text}
          </div>
          <div className={this.state.links}>
            {this.state.main == "horizontal-main" ?
            <span className={this.state.switch} onClick={this.switchToVertical}>
              Horizontal
            </span> :
            <span className={this.state.switch} onClick={this.switchToHorizontal}>
              Vertical
            </span>}
            {this.state.theme == "light-theme" ?
            <span className={this.state.color_switch} onClick={this.switchToDarker}>
              Darker
            </span> :
            <span className={this.state.color_switch} onClick={this.switchToLighter}>
              Lighter
            </span>}
          </div>
        </div>
      </div>
    );
  }
});
render(
  <App main_text="Greyhound divisively hello coldly wonderfully marginally far upon excluding"/>,
  document.getElementById('app')
);
