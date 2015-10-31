import * as types from '../constants/ActionTypes';
let Image = Image;
if ('undefined' === typeof Image){
   Image = function(width, height){}
   // import { Image } from 'canvas';
   // img                                                                                                                                           
// http://dev.w3.org/html5/spec/Overview.html#the-img-element                                                                                    
// Image = function(width, height) {
//     // Image can free form create nodes                                                                                                          
//     //var tmp= window.document.createElement('img');                                                                                             
//     this._dom = tmp._dom;
//     this.width = width;
//     this.height = height;
//     this.src = null;
// };
// Image.prototype = HTMLImageElement.prototype;
}

export function getInitialDate() {
    return { type: types.GET_INITIAL_DATE };
}

export function updateImagePath(path) {
	return { type: types.UPDATE_IMAGE_PATH, path: path };
}

export function readImage(event, reader){
    console.log('in readImage',arguments);
    let f = (dispatch, getState) => {
        console.log('in readImage return');
        var file = event.target.files[0];

        dispatch(updateImagePath(file))

        reader.onload = function(upload){
            console.log('in reader.onload', dispatch,upload,getState)
            dispatch(imageRead(dispatch,getState, upload))
        };
        return reader.readAsDataURL(file); 
    }
    console.log(f);
    return f;
        // return function(dispatch,getState){

    //     console.log('in readImage return');
    //     var file = event.target.files[0];

    //     dispatch(updateImagePath(file))

    //     reader.onload = function(upload){
    //         console.log('in reader.onload', dispatch,upload,getState)
    //     	dispatch(imageRead(dispatch,getState, upload))
    //     };
    //     return reader.readAsDataURL(file);
    // }
}

export function imageRead(dispatch, getState, upload){
    console.log('in imageRead',dispatch,arguments)
	return function(dispatch,getState){
		var img = new Image();

        console.log ('img is ',img)
        img.onload = function(){
            console.log('in img.onload')
        	dispatch(imageLoaded(img, getState));
        }
        img.src = upload.target.result;
        return img;
    }
}

export function imageLoaded(img, getState){
	var currentState = getState().assholeGenerator;
	var zoomRatio = null;

    if(img.naturalHeight >= img.naturalWidth) {
        zoomRatio = currentState.heroStyle.height / img.naturalHeight;
    } else {
        zoomRatio = currentState.heroStyle.width / img.naturalWidth;
    }

    return { type: types.IMAGE_LOAD_SUCCESS,
    	dataUri: img.src,
    	zoomRatio: zoomRatio,
    	origZoomRatio: zoomRatio,
    	naturalImageDimensions: {
    		height: img.naturalHeight,
    		width: img.naturalWidth
    	}
    };
}

export function rotateImage(direction) {
	return { type: types.ROTATE_IMAGE, direction: direction };
}

export function zoomInImage(){
	return { type: types.ZOOM_IN_IMAGE };
}

export function zoomInImage(){
	return { type: types.ZOOM_OUT_IMAGE };
}

export function panImage(deltaX,deltaY){
	return { type: types.PAN_IMAGE, deltaX: deltaX, deltaY: deltaY };
}

export function updateCaption(text){
	return { type: types.UPDATE_CAPTION, text:text };
}

export function updateDate(text){
	return { type: types.UPDATE_DATE, text:text };
}

export function updateAssholeName(text){
	return { type: types.UPDATE_ASSHOLE_NAME, text:text };
}

export function updateOwnerName(text){
	return { type: types.UPDATE_OWNER_NAME, text:text };
}

export function updateLocation(text){
	return { type: types.UPDATE_LOCATION, text:text };
}

export function updateEmail(text){
	return { type: types.UPDATE_EMAIL, text:text };
}

export function updateTerms(text){
	return { type: types.UPDATE_TERMS };
}

export function submitForm(){
	return { type: types.SUBMIT_INFO }
}