import React from 'react';
import { NavLink } from 'react-router-dom'

function Page_404() {
  return (

      <div id="Page_404" className="content-area">
        <main id="main" className="site-main">

          <section className="error-404 not-found">

            <div id="clouds">
              <div className="cloud x1"></div>
              <div className="cloud x1_5"></div>
              <div className="cloud x2"></div>
              <div className="cloud x3"></div>
              <div className="cloud x4"></div>
              <div className="cloud x5"></div>
            </div>
            <div className="c">
              <div className="_404">404</div>
              <div className="_1">PAGE</div>
              <div className="_2">WAS NOT FOUND</div>
              <p>
              <NavLink to="/">Come Back Home!</NavLink>
              </p>
            </div>

          </section>
        </main>
      </div>
    
  );
}

export default Page_404