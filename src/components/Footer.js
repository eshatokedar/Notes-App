import React from 'react';

var date=new Date();
var currentYear=date.getFullYear();
function Footer(){
    return <div className="footer">
       <p>Copyright {currentYear}</p>
    </div>
};
export default Footer;