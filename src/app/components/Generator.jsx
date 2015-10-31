'use strict';

import React from 'react';
import Preview from './Preview'
import MemeForm from './MemeForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GeneratorActions from '../actions/generator';

var BootstrapCSS = require('bootstrap/dist/css/bootstrap.css');
var FontAwesome = require("font-awesome-webpack");

var Generator = React.createClass({
    render: function () {
        console.log('generator this props',this.props)
        return (

            <div className="AssholeGenerator container">
               <div className="row">
                    <div className="col-lg-7">
                        <Preview {...this.props} />
                    </div>
                    <div className="col-lg-5">
                        <MemeForm {...this.props}/>
                    </div>
                </div>
           </div>
        );
    }
});

function mapStateToProps(state) {
  return {
    generator: state.generator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GeneratorActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generator);
                           
  