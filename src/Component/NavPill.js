import React from "react";
import {useSelector} from "react-redux";
import NavPillChild from "./NavPillChild";

function NavPill() {
    const state = useSelector(state => state.Articles.tagNav.item)
    return (
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#menu1"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Global Feed
            </a>
                </li>
                {
                    <NavPillChild tagNav={state}/>
                }
               
            </ul>
        </div>
    )
}
export default NavPill