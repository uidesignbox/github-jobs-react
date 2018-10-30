import React, { Component } from 'react';
import jsonp from 'jsonp';
import IndexHeader from './IndexHeader';
import PostListing from '../PostListing';

class IndexPage extends Component {
   constructor() {
      super();
      this.state = {
         results: null
      }
   }

   componentDidMount() {
      const url = 'https://jobs.github.com/positions.json';
      jsonp(url, null, (err, data) => {
         if (err) {
            console.log(err);
            return;
         }
         this.setState({ results: data })
      })
   }

   render() {
      return (
         <div className="index__main">
            <IndexHeader />
            { this.state.results &&
               <PostListing items={this.state.results.slice(0,5)} /> }
         </div>
      )
   }
};

export default IndexPage;