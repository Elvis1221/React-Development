import React from "react";
import s from './ProfileCont.module.css'

export const ProfileCont = () => {
    return <div>
        <div>
            <img className={s.profileCont}
                 src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
                 alt=""
            />
        </div>
    </div>

};
