import React, { Component } from 'react';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormContainer extends Component {
   constructor() {
      super();
      this.state = {
         query: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ query: event.target.value })
   }

   handleSubmit(e) {
      // Submit query to parent func
      e.preventDefault();
   }

   render() {
      return (
         <form id="search-form" onSubmit={this.handleSubmit}>
            <FontAwesomeIcon icon="search" className="icon" />
            <Input 
               label='search'
               text='Search'
               type='text'
               value={this.state.query}
               placeholder="UI / Frontend Developer"
               handleChange={this.handleChange}
            />
         </form>
      )
   }
};

export default FormContainer;