import React from 'react';
import { sprintf } from 'sprintf-js';
import moment from 'moment';

var css = require('./preview.css');

var Preview = React.createClass({
    displayName: 'Preview',

    // getDefaultProps: function() {
    // 	return {
    // 		assholeName: '',
    // 		assholeBreed: 'TwatFlalalala',
    // 		ownerLocation: '',
    // 		caption: '',
    // 		date: null,
    // 		image: {
    // 			dataUri:''
    // 		},
    // 		ownerName: '',
    // 		imageStyle: {
    // 			position: 'absolute',
    // 			left:0,
    // 			top:0,
    // 			height: '100%',
    // 			width: '100%'
    // 		}
    // 	};
    // },

    getMeta: function(){
        const { generator } = this.props;
        return sprintf("%s (%s) - %s", generator.assholeName, generator.assholeBreed , generator.ownerName);
    },
	getDay: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('D');
    },
    getDayName: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('dddd');
    },
    getMonth: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('MMMM');
    },
    getYear: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('YYYY');
    },

    render: function () {
    	console.log('preview props', this.props.generator);
        const { generator } = this.props;

       return (

        <div className="AssholeGenerator preview-container" >
            <div className="hero-container">
                <img src={generator.image.dataUri} style={generator.imageStyle}/>
            </div>
            <div className="text-container" >
                <div className="meta-text" >{this.getMeta()}</div>
                <div className="caption-container" >
                    <div className="caption-text">{generator.caption}</div>

                    <div className="date-container" >
                        <span className="day" >{this.getDay()}</span>
                        <span className="day-name before-dot" >{this.getDayName()}</span>
                        <span className="month-name before-dot" >{this.getMonth()}</span>
                        <span className="year" >{this.getYear()}</span>
                        <span className="logo" ></span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

export default Preview;