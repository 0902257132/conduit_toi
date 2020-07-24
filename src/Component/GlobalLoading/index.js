import React from 'react';
import {useSelector} from "react-redux";
import loadingImage from './../../assets/images/loading.gif';


const backgoundLoanding = 
    {  
    position: "fixed",
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    'z-index': 99,
    'background-color': 'rbga(0, 0, 0, 0.4)'
    }
const icon = {
    position: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
    top: "30%",
    left: "30%",
    width: 200
}
function GlobalLoading(props) {
    const statusLoading = useSelector(state => state.statusLoading.statusLoading)
    let xhtml = null;
    if(statusLoading)
    xhtml =(
            <div className="backgorund-loading">
                <img src={loadingImage} className="icon-loading " alt="loadingImage" />
            </div>
        )
    return xhtml
}

export default GlobalLoading
