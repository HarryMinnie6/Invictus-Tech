import React from "react";
import "./PartnersBar.css";

function PartnersBar() {
  return (
    <div className="partners__bar">
      <div className="partners__holder">
        <div className="partner one">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr8At6lERpN_jRP8AuUYQtHipNIhHPkcuPwg&usqp=CAU"
            }
          />
        </div>
        <div className="partner two">
          <img
            src={
              "https://media.glassdoor.com/sqll/1396844/kudelski-security-squarelogo-1497864694379.png"
            }
          />
        </div>
        <div className="partner three">
          <img
            src={
              "https://media.glassdoor.com/sqll/1396844/kudelski-security-squarelogo-1497864694379.png"
            }
          />
        </div>
        <div className="partner four">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr8At6lERpN_jRP8AuUYQtHipNIhHPkcuPwg&usqp=CAU"
            }
          />
        </div>
        <div className="partner five">
          <img
            src={
              "https://media.glassdoor.com/sqll/1396844/kudelski-security-squarelogo-1497864694379.png"
            }
          />
        </div>
        <div className="partner six">
          <img
            src={
              "https://media.glassdoor.com/sqll/1396844/kudelski-security-squarelogo-1497864694379.png"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PartnersBar;
