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
      this.handlePagination = this.handlePagination.bind(this)
      this.createChunk = this.createChunk.bind(this)
   }

   createChunk(array, size) {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i++) {
        const last = chunkedArray[chunkedArray.length - 1];
        if (!last || last.length === size) {
          chunkedArray.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
      return chunkedArray;
   }

   handlePagination(value) {
      this.setState({ currentIndex: value })
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
         const chunk = this.createChunk(data, 10)
         this.setState({ results: chunk })
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
               <PostListing items={this.state.results[this.state.currentIndex]} /> }
            {this.state.results && this.state.results.length > 0 ?
               <Pagination total={this.state.results.length} currentIndex={this.state.currentIndex} handlePagination={this.handlePagination} /> : null }
         </div>
      )
   }
};

export default IndexPage;