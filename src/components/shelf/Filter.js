import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateFilters } from '../../store/actions/filterActions';

import Checkbox from '../Checkbox';
import StarButton from '../github/StarButton';

const availableSizes = [
  'XS',
  'S',
  'M',
  'ML',
  'L',
  'XL',
  'XXL',
];

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
  } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = (label) => (
    <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
  )

  createCheckboxes = () => (
    availableSizes.map(this.createCheckbox)
  )

  // render() {
  //   return (
  //     <div className="filters">
  //       <h4 className="title">Sizes:</h4>
  //       {this.createCheckboxes()}
  //       <StarButton />
  //     </div>
  //   );
  // }


  render() {
    return (
         <aside className="s-12 m-4 l-3 xl-2 aside" >
                  <h4 className="margin-bottom">Tutorials</h4>
                  <div className="aside-nav minimize-on-small">
                     <p className="aside-nav-text">Angular Tutorials</p>
                     <ul>
                        <li>
                           <a>AngularJs</a>
                           <ul>
                              <li><a>Angular 1.5</a></li>
                              <li><a>Angular 2.0</a></li>
                              <li>
                                 <a>Angular 5.0</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a>MongoDB</a>
                           <ul>
                              <li><a>Basics</a></li>
                              <li><a>Schema design</a></li>
                              <li>
                                 <a>Sharding</a>
                                 <ul>
                                    <li><a>Basics</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a>Replication</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                               <li>
                                 <a>MongoDb - NodeJs</a>
                                 <ul>
                                    <li><a>Mongos library</a></li>
                                    <li><a>ORM</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                    
                        <li>
                           <a>NodeJs</a>
                           <ul>
                              <li><a>Basics</a></li>
                              <li><a>clusters</a></li>
                              <li>
                                 <a>Middlewares</a>
                                 <ul>
                                    <li><a>Routes</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a>ReactJS</a>
                           <ul>
                              <li><a>Sub Category 1</a></li>
                              <li><a>Sub Category 2</a></li>
                              <li>
                                 <a>Sub Category 3</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a>VueJS</a>
                           <ul>
                              <li><a>Sub Category 1</a></li>
                              <li><a>Sub Category 2</a></li>
                              <li>
                                 <a>Sub Category 3</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                         <li>
                           <a>D3 JS</a>
                           <ul>
                              <li><a>Angular - D3</a></li>
                              <li>
                                 <a>Sub Category 3</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                             <li><a>Issues with resolution</a></li>
                           </ul>
                        </li>
                         <li>
                           <a>Chart JS</a>
                           <ul>
                              <li><a>Angular - chartjs</a></li>
                              <li>
                                 <a>Sub Category 3</a>
                                 <ul>
                                    <li><a>Sub Sub Category 1</a></li>
                                    <li><a>Sub Sub Category 2</a></li>
                                    <li><a>Sub Sub Category 3</a></li>
                                 </ul>
                              </li>
                             <li><a>Issues with resolution</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </aside>
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array,
}

const mapStateToProps = state => ({
  filters: state.filters.items,
})

export default connect(mapStateToProps, { updateFilters })(Filter);