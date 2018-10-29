import React, { Component } from 'react';
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
      let url = 'https://jobs.github.com/positions.json';

      fetch(url, {
         mode: 'cors',
         headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Access-Control-Allow-Origin':'*'
         }
      })
      .then(function(res) {
         console.log(res.json())
      })
      .catch(err => console.log(err))

   }

   render() {
      return(
         <div className="index__main">
            <IndexHeader />
            { this.state.results &&
               <PostListing items={this.state.results} /> }
         </div>
      )
   }
};

export default IndexPage;