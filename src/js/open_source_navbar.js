var React = require('react');

var OpenSourceNavbar = React.createClass({
  render: function(){
    return (
      <div>
        <nav>
          <div className="container-fluid navigation open-source-navbar-content">
            <div className="navbar-item right"><p className="navbar-item-text activatable">Home</p></div>
            <div className="navbar-item right"><p className="navbar-item-text activatable">Frontend</p></div>
            <div className="navbar-item right"><p className="navbar-item-text activatable">Backend</p></div>
            <div className="navbar-item right"><p className="navbar-item-text activatable">Database</p></div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = OpenSourceNavbar;