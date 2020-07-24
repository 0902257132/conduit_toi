import React from "react";

function NavPillChild(props) {
return(
    <li class="nav-item" role="presentation">
        <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#menu2"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
        >
            {
                props.tagNav
            }
        </a>
    </li>
)
}
export default NavPillChild