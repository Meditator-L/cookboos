import React, { Component } from 'react';
import { Container } from './StyledSearch';

class Search extends Component {
  render() {
    return (
      <Container>
        <div>
          <svg t="1643275382918" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2030" width="200" height="200"><path d="M685.6 660.336l155.152 155.168a16 16 0 0 1 0 22.624l-11.312 11.328a16 16 0 0 1-22.624 0l-158.528-158.544a289.792 289.792 0 0 1-165.152 51.36C322.336 742.256 192 611.904 192 451.12 192 290.336 322.336 160 483.136 160c160.784 0 291.12 130.336 291.12 291.136 0 82.112-33.984 156.272-88.672 209.2z m-202.464 33.92c134.272 0 243.12-108.848 243.12-243.12C726.256 316.848 617.408 208 483.136 208 348.848 208 240 316.848 240 451.136c0 134.272 108.848 243.12 243.136 243.12z" p-id="2031"></path></svg>
          <span>想吃什么搜这里，如川菜</span>
        </div>
      </Container>
    );
  }
}

export default Search;