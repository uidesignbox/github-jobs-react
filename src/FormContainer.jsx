import React, { Component } from 'react';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationSearch from './Index/LocationSearch';
import FilterItems from './Index/FilterItems';

class FormContainer extends Component {
   constructor() {
      super();
      this.state = {
         query: '',
         isLocationOpen: null,
         locationQuery: ''
      }
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggleLocation = this.toggleLocation.bind(this)
      this.handleLocation = this.handleLocation.bind(this)
   }

   toggleLocation() {
      this.setState( prevState => ({
         isLocationOpen: !prevState.isLocationOpen
      }))
   }

   handleLocation(event) {
      this.setState({ locationQuery : event.target.value }, function() {
         this.props.location(this.state.locationQuery.split(' ').join('+'))
      })
   }

   handleSearch(event) {
      this.setState({ query: event.target.value }, function() {
         this.props.query(this.state.query.split(' ').join('+'))
      })
   }

   handleSubmit(e) {
      // Submit query to parent func
      e.preventDefault();
      this.props.search()
   }

   render() {
      return (
         <form id="search-form" onSubmit={ this.handleSubmit }>
            <FontAwesomeIcon icon="search" className="search-icon" />
            <Input 
               label='search'
               text='Search'
               type='text'
               value={this.state.query}
               placeholder="Search Github jobs"
               handleSearch={this.handleSearch}
            />
            { this.state.isLocationOpen &&
               <LocationSearch toggle={this.handleLocation} placeholder={this.state.locationQuery} /> }
            <FilterItems toggle={this.toggleLocation} />
         </form>
      )
   }
};

export default FormContainer;