import { UPDATE_IMAGE_PATH, ROTATE_IMAGE, ZOOM_IN_IMAGE,
ZOOM_OUT_IMAGE,
 PAN_IMAGE,
 UPDATE_CAPTION,
 UPDATE_DATE,
 UPDATE_ASSHOLE_NAME,
 UPDATE_OWNER_NAME,
 UPDATE_LOCATION,
 UPDATE_EMAIL,
 UPDATE_TERMS,
 SUBMIT_INFO,
 IMAGE_LOAD_SUCCESS,
 GET_INITIAL_DATE
} from '../constants/ActionTypes';

import moment from 'moment';
            
const initialState = {
	charLimit: 530,
	filePath: '',
    assholeName: '', 
    email: '',
    ownerName: '',
    ownerLocation: '',
    caption: '',
    date: null,
    acceptTerms: false,
    image: {
    	path: '',
    	dataUri: '',
	    height: null,
	    width: null,
	    posX: 0,
	    posY: 0,
	    rotation: 0,
	    zoomRatio: 1,
	    origZoomRatio:1
    },
    heroStyle: {
    	background:''
    	// background:'',
    	// height:400,
     //    width:600,
     //    borderBottom:'2px solid #FFAF2B',
     //    overflow:'hidden',
     //    position: 'relative',
     //    backgroundSize: '100% 100%'
     
    },
    naturalImageDimensions: {
        height: null,
        width: null
    }
}

function calculateZoomIn(state){ return 1;}
function calculateZoomOut(state){ return 1;}

export default function generator(state = initialState, action){

	switch (action.type){

		case GET_INITIAL_DATE: 
			return Object.assign({}, state, {
				date: new moment()
			});

		case UPDATE_IMAGE_PATH: 
			return Object.assign({}, state, {
				image: {
					path: action.path
				}
			});


		case IMAGE_LOAD_SUCCESS:
			return Object.assign({}, state, {
				image: {
					dataUri: action.dataUri,
					zoomRatio: action.zoomRatio,
					origZoomRatio: action.origZoomRatio
				},
				naturalImageDimensions: action.naturalImageDimensions
			});

		case ROTATE_IMAGE:
			return Object.assign({}, state, {
				image: {
					rotation: (action.direction === 'CW')? state.image.rotation+90:state.image.rotation-90
				}
			});
		case ZOOM_IN_IMAGE:
			return Object.assign({}, state, {
				image: {
					zoomRatio: calculateZoomIn(state)
				}
			});	
		case ZOOM_OUT_IMAGE:
			return Object.assign({}, state, {
				image: {
					zoomRatio: calculateZoomOut(state)
				}
			});			
		case PAN_IMAGE:
			return Object.assign({}, state, {
				image: {
					posX: action.deltaX + state.image.posX,
					posY: action.deltaY + state.image.posY
				}
			});

		case UPDATE_CAPTION:
			return Object.assign({}, state, {
				caption: action.text
			})
		case UPDATE_DATE:
			return Object.assign({}, state, {
				date: action.text
			})
		case UPDATE_ASSHOLE_NAME:
			return Object.assign({}, state, {
				assholeName: action.text
			})

		case UPDATE_OWNER_NAME:
			return Object.assign({}, state, {
				ownerName: action.text
			})

		case UPDATE_LOCATION:
			return Object.assign({}, state, {
				location: action.text
			})
		case UPDATE_EMAIL:
			return Object.assign({}, state, {
				email: action.text
			})
		case UPDATE_TERMS:
			return Object.assign({}, state, {
				acceptTerms: !state.acceptTerms 
			})

		// case SUBMIT_INFO:


		default:
			return state;
	}
}