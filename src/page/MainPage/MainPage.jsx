import React from "react";
import "./css/index.css";
function MainPage() {
  return (
    <main className="main-page">
      <div className="section1">
        <img
          src="/assets/main/section1-back.png"
          srcSet="/assets/main/section1-back@2x.png 2x, /assets/main/section1-back@3x.png 3x"
          alt="img"
        />
        <div className="section1-title">
          <div className="title font-type">
            EMBRACING HUMANITY
            <br />
            <span className="font-type">WITH TECHNOLOGY</span>
          </div>
          <div className="sub">기술로 인류를 포용합니다, 휴컨</div>
        </div>
      </div>

      <div className="section2 wrapper">
        <div className="section2-wrapper">
          <div className="section2-title">
            <div className="title font-type">ABOUT</div>
            <div className="sub">
              우리는 명실상부한 <br />
              기술 기업으로써의 자부심을 가지고
              <br /> 모두 단결해 나아갈 것입니다
            </div>
            <div className="text">
              안녕하십니까? 휴컨 대표이사 강대근입니다. <br />
              휴컨은 자동차 전장 사업과 이차전지를 활용한 에너지 기술 개발하는
              기업입니다. <br />
              휴컨은 높은 기술력을 강점으로 고객에게 신뢰받는 회사로 성장하고
              있습니다. <br />
              휴컨은 2015년에 임베디드 엔지니어인 저, 강대근 대표가 창업한
              회사입니다. <br />
              높은 기술력으로 세상을 이롭게 하겠다는 신념으로 시작했지만, <br />
              그 시작은 그리 순탄하지 않았습니다. <br />
              하지만, 새로운 기술과 끈질긴 노력으로 많은 성과를 이루어냈습니다.{" "}
              <br />
              우리는 이러한 어려움을 이겨낸 DNA가 있습니다. <br />
              이제는 명실상부한 기술 기업으로써 자부심을 가지고 단결해 나아갈
              것입니다. <br />
              <br />
              우리 회사는 지속 성장 가능한 미래를 위해 전 임직원이 함께 하고
              있으며, <br />
              기업과 가정 모두 행복할 수 있도록 노력하겠습니다. <br />
              앞으로 휴컨의 지속적인 발전과 성취에 많은 관심과 격려 부탁
              드립니다. <br />
              <br />
              감사합니다.
            </div>
          </div>

          <div className="section2-img">
            <img
              src="/assets/main/section2-human.png"
              srcSet="/assets/main/section2-human@2x.png 2x, /assets/main/section2-human@3x.png 3x"
              alt="img"
            />

            <div className="back-icon">
              <img src="/assets/main/section2-back.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3-back"></div>

        <div className="section3-wrapper">
          <div className="section3-title font-type">R&D</div>
          <div className="section3-title-wrapper">
            <div className="left">
              <div className="title font-type">
                FOR PEOPLE AND THE FUTURE <br />
                RESEARCH TECHNOLOGY.
              </div>
              <div className="sub font-type">
                우리는 사람과 미래를 위해 기술을 연구합니다.
              </div>
            </div>
            <div className="right">
              <div className="title font-type">
                Huconn is a company that researches energy and automotive
                electric fields. <br />
                Energy and automobiles are important growth fields in the era of
                technological <br /> convergence. We want to pursue better
                future value through continuous research <br />
                and development.
              </div>
              <div className="sub font-type">
                휴컨은 에너지와 자동차 전장 분야를 연구하는 기업입니다. <br />
                에너지와 자동차는 기술 융합 시대에 있어 중요한 성장 분야이기에{" "}
                <br />
                지속적인 연구와 개발을 통해 더 나은 미래 가치를 추구하고자
                합니다.
              </div>
            </div>
          </div>

          <div className="section3-content">
            {section3.map((item, index) => {
              return (
                <div key={index} className="box">
                  <div className="box-wrapper">
                    <div className="title font-type2">{item.title}</div>
                    <div className="text font-type">{item.text}</div>
                    <div className="sub font-type">{item.sub}</div>
                    <div className="english font-type2">{item.english}</div>
                    <div className="bottom">{item.bottom}</div>
                  </div>

                  <img src={item.img} srcSet={item.srcSet} alt="img" />
                </div>
              );
            })}
          </div>

          <div className="section3_2">
            <div className="title">BUSINESS</div>
            <div className="sub font-type">
              HUCONN IS THE TECHNOLOGY OF THE FUTURE
              <br />
              PREPARE TOGETHER
            </div>
            <div className="text font-type">
              휴컨은 미래의 기술을 함께 준비합니다
            </div>

            <div className="section3-content">
              {section3_2.map((item, index) => {
                return (
                  <>
                    <div key={index} className="box">
                      <div className="box-wrapper">
                        <div className="title font-type">{item.title}</div>
                        <div className="text font-type">{item.text}</div>
                        <div className="english">{item.english}</div>
                        <div className="bottom">{item.bottom}</div>
                      </div>
                    </div>

                    <img
                      className="img-1"
                      src="/assets/main/section3-2-1.png"
                      srcSet="/assets/main/section3-2-1@2x.png 2x, /assets/main/section3-2-1@3x.png 3x"
                      alt="img"
                    />
                    <img
                      className="img-2"
                      src="/assets/main/section3-2-2.png"
                      srcSet="/assets/main/section3-2-2@2x.png 2x, /assets/main/section3-2-2@3x.png 3x"
                      alt="img"
                    />
                    <img
                      className="img-3"
                      src="/assets/main/section3-2-3.png"
                      srcSet="/assets/main/section3-2-3@2x.png 2x, /assets/main/section3-2-3@3x.png 3x"
                      alt="img"
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="section4-wrapper">
          <div className="title font-type">
            SAFER, MORE CONVENIENT,
            <br />
            AND MORE INNOVATIVE TECHNOLOGY
          </div>
          <div className="sub">
            보다 안전한, 보다 편리한, 그리고 보다 혁신적인 기술
          </div>
          <div className="english">
            Hucon pursues safer technology, more convenient technology, and more
            innovative technology. <br />
            Our goal is to impress people by placing our technology in everyday
            life.
          </div>
          <div className="text">
            휴컨은 보다 안전한 기술, 보다 편리한 기술, 보다 혁신적인 기술을 추구
            합니다. <br />
            우리의 기술이 생활속에 자리 매김하여 사람들에게 감동을 주는 것이
            목표입니다.
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="section5-wrapper">
          <div className="section5-back"></div>

          <div className="section5-title">
            <div className="title font-type">CONTACT US</div>
            <div className="sub">궁금하신 점이 있나요?</div>

            <div className="mail-box">
              <div className="mail">
                <img src="/assets/main/mail.svg" alt="icon" />
                <div className="text font-type">MAIL</div>
              </div>

              <div className="email font-type2">huconn@huconn.co.kr</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

const section3 = [
  {
    title: "R&D 01",

    text: (
      <>
        ENERGY <br /> DEVELOPMENT
      </>
    ),
    sub: "에너지 개발",

    english: (
      <>
        ESS using safety design and wireless communication technology <br />
        We develop portable rechargeable batteries.
      </>
    ),

    bottom: (
      <>
        안전 설계 및 무선 통신 기술을 이용한 ESS와 <br />
        이동형 충전 배터리 개발을 수행합니다.
      </>
    ),
    img: "/assets/main/section3-img1.png",
    srcSet:
      "/assets/main/section3-img1@2x.png 2x, /assets/main/section3-img1@3x.png 3x",
  },

  {
    title: "R&D 02",

    text: (
      <>
        CAR INFOTAINMENT <br /> DEVELOPMENT
      </>
    ),
    sub: "자동차 전장개발",

    english: (
      <>
        Automotive electronics, especially infotainment and <br />
        We develop in-vehicle network technology.
      </>
    ),

    bottom: (
      <>
        자동차 전장, 특히 인포테인먼트와 <br />
        차량내 네트워크 기술 개발을 수행합니다.
      </>
    ),
    img: "/assets/main/section3-img2.png",
    srcSet:
      "/assets/main/section3-img2@2x.png 2x, /assets/main/section3-img2@3x.png 3x",
  },
];

const section3_2 = [
  {
    title: "BUSINESS 01",

    text: <>SMART SOLUTION</>,

    english: (
      <>
        For efficient smart factories and smart farms
        <br />
        Automation equipment development and ISP, MES, ERP, SCM planning
      </>
    ),

    bottom: (
      <>
        효율적인 스마트공장 및 스마트팜을 위한 <br />
        자동화 장비 개발 및 ISP, MES, ERP, SCM 기획
      </>
    ),
  },
  {
    title: "BUSINESS 02",

    text: <>EDUCATION SOLUTION</>,

    english: (
      <>
        New department and department reorganization consulting,
        <br />
        Education and training equipment planning and manufacturing, education
        support
      </>
    ),

    bottom: (
      <>
        신설학과 및 학과개편 컨설팅, <br />
        교육훈련 장비 기획 및 제조, 교육지원
      </>
    ),
  },
  {
    title: "BUSINESS 03",

    text: <>ODM</>,

    english: <>idea product shape, Prototyping support</>,

    bottom: <>아이디어 제품 형상화, 시제품 제작 지원</>,
  },
];
