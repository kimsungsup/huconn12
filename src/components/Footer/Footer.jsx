import React from "react";
import "./css/index.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src="/assets/header/logo.svg" alt="logo" />
          </div>

          <div className="footer-content">
            <div className="footer-left">
              <div className="text">
                (주)휴컨 | 대표 강대근 | 사업자등록번호 123-12-01234 <br />
                Copyright Huconn, All Rights Reserved
              </div>
            </div>

            <div className="footer-right">
              <div className="index">
                <img src="/assets/footer/footer-icon1.svg" alt="icon" />
                <div className="text">
                  대구광역시 동구 동대구로 465 대구스케일업허브
                </div>
              </div>

              <div className="index">
                <img src="/assets/footer/footer-icon2.svg" alt="icon" />
                <div className="text">053-1453-5492</div>
              </div>

              <div className="index">
                <img src="/assets/footer/footer-icon3.svg" alt="icon" />
                <div className="text">huconn@huconn.co.kr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
