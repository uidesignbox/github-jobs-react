import React, { Component } from 'react';
import jsonp from 'jsonp';
import IndexHeader from './IndexHeader';
import PostListing from '../PostListing';
import Pagination from '../Paginate/Pagination';

class IndexPage extends Component {
   constructor() {
      super();
      this.state = {
         results: null,
         currentIndex: 0
      }
   }

   componentWillMount() {
      const dataAvailable = localStorage.getItem('githubJobs');
      if (dataAvailable) {
         console.log('data is available for githubjobs');
         this.setState({ results: JSON.parse(dataAvailable) })
      }
   }

   componentDidMount() {
      // If not in local storage then fetch data
      if (!localStorage.getItem('githubJobs')) {
         const url = 'https://jobs.github.com/positions.json?&page=1';
         jsonp(url, null, (err, data) => {
            if (err) {
               console.log(err);
               return;
            }
            console.log('NOT AVAIL');
            localStorage.setItem('githubJobs', JSON.stringify(data))
            this.setState({ results: data })
         })
      }
   }

   componentWillUnmount() {
      localStorage.removeItem('githubJobs')
   }

   render() {
      return (
         <div className="index__main">
            <IndexHeader />
            { this.state.results &&
               <PostListing items={this.state.results.slice(0,10)} /> }
            {this.state.results && this.state.results.length >= 50 ?
               <Pagination /> : null }
         </div>
      )
   }
};

export default IndexPage;