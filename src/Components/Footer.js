import { Col, Row } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          padding: "5vh 10vh",
          backgroundColor: "#001529",
          color: "white",
        }}
      >
        <Row>
          <Col xs={24} md={8} style={{ fontFamily: "Roboto" }}>
            <h1>
              <Link
                href="/"
                style={{
                  color: "white",
                  // padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                PC PLANET
              </Link>
            </h1>

            <p style={{ fontWeight: "bold", marginTop: "2vh" }}>Branch -1</p>
            <p
              style={{
                maxWidth: "400px",
                fontSize: "14px",
                padding: "0 2vh",
              }}
            >
              Shop 248,249,250 #Level 2, Computer City Center (Multiplan) New
              Elephant Road, Dhaka-1205, Bangladesh.
            </p>
            <h3 style={{ marginTop: "10px" }}>HelpLine</h3>
            <p style={{ padding: "10px" }}>For PC: 01785236547</p>
            <p style={{ padding: "10px" }}>For Laptop: 01785236547</p>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{ fontSize: "18px", fontFamily: "Roboto" }}
          >
            <h3>Take Your Component</h3>

            <ul style={{ listStyle: "unstyled", marginLeft: "20px" }}>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>CPU</li>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>
                Motherboard
              </li>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>Ram</li>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>
                Storage Device
              </li>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>
                Monitor
              </li>
              <li style={{ padding: "10px 0px", fontWeight: "bold" }}>
                Power Supply
              </li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <img src="/assets/pc-build.gif" alt="" width={"100%"} />
          </Col>{" "}
          <br />
        </Row>
        <br />
        <hr />
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          {" "}
          Copyright © 2023, PC Planet, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
