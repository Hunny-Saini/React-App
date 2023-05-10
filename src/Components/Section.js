import React from "react";

const Section = ({sectionTitle,sectionContent,children}) =>(
    <div className="section">
        <h2>{sectionTitle}</h2>
        <p>{sectionContent}</p>
        {children}
    </div>
)

export default Section;