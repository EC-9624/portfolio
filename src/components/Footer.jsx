import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="flex items-center justify-center">
        <div>
          <a href="#">Github</a>
        </div>
        <div>
          <a href="#">LinkedIn</a>
        </div>
        <div>
          <a href="#">Instargram</a>
        </div>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Eakudompong Chanoknan All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
