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
         currentIndex: 0,
         query: '',
         location: ''
      }
      this.fetchData = this.fetchData.bind(this)
      this.handleQuery = this.handleQuery.bind(this)
      this.handleLocation = this.handleLocation.bind(this)
   }

   handleQuery(value) {
      this.setState({ query : value })
   }

   handleLocation(value) {
      this.setState({ location : value })
   }

   fetchData(query) {
      const searchString = this.state.query ? `&search=${this.state.query}` : '';
      const searchLocation = this.state.location ? `&location=${this.state.location}` : ''
      query = searchString || searchLocation ? searchString + searchLocation : '';
      const url = `https://jobs.github.com/positions.json?${query}`;
      jsonp(url, null, (err, data) => {
         if (err) {
            console.log(err);
            return;
         }
         this.setState({ results: data })
      })
   }

   componentWillMount() {
      const dataAvailable = localStorage.getItem('githubJobs');
      if (dataAvailable) {
         this.setState({ results: JSON.parse(dataAvailable) })
      }
   }

   componentDidMount() {
      // If not in local storage then fetch data
      if (!localStorage.getItem('githubJobs')) {
         this.fetchData()
      }
   }

   componentDidUpdate() {
      console.log('I did UPDATE')
      localStorage.setItem('githubJobs', JSON.stringify(this.state.results))
   }

   componentWillUnmount() {
      localStorage.removeItem('githubJobs')
   }

   render() {
      return (
         <div className="index__main">
            <IndexHeader search={this.fetchData} location={this.handleLocation} query={this.handleQuery} />
            { this.state.results &&
               <PostListing items={this.state.results.slice(0,10)} /> }
            {this.state.results && this.state.results.length >= 50 ?
               <Pagination /> : null }
         </div>
      )
   }
};

export default IndexPage;