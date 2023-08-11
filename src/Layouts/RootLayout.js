import styles from "@/styles/Home.module.css";
import { BarsOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Dropdown, Layout, Row } from "antd";
import Link from "next/link";
import { useState } from "react";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <Link href="/cpu">
          <items>Processor</items>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/motherboard">
          <items>Motherboard</items>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/ram">
          <items>RAM</items>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/psu">
          <items>Power Supply</items>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/storage">
          <items>Storage Device</items>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/monitor">
          <items>Monitor</items>
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link href="/others">
          <items>Others</items>
        </Link>
      ),
    },
  ];

  const [mobileNav, setMobileNav] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC PLANET
            </Link>
          </h1>
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <Button
              style={{ backgroundColor: "unset", borderColor: "unset" }}
              className={styles.componentsBtn}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Select Your Components <CaretDownOutlined />
              </span>
            </Button>
          </Dropdown>
        </div>

        <div className="user-info" style={{ color: "white" }}>
          <Link href="/login" className={styles.authLink}>
            <items
              style={{
                margin: "0px 5px",
                color: "white",
                fontSize: "16px",
              }}
            >
              Login/
            </items>
          </Link>

          <Link href="/signup" className={styles.authLink}>
            <items
              style={{
                margin: "0px 5px",
                color: "white",
                fontSize: "16px",
              }}
            >
              SignUp
            </items>
          </Link>
          <Button
            type="primary"
            onClick={showDrawer}
            className={styles.mobileNav}
          >
            <BarsOutlined style={{ color: "white", fontSize: "18px" }} />
          </Button>
        </div>

        <Drawer title="" placement="right" onClose={onClose} open={open}>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/cpu">Processor</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/motherboard">Motherboard</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/ram">RAM</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/psu">Power Supply</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/storage">Storage Device</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/monitor">Monitor</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/others">Others</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/login">Login</Link>
          </p>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              padding: "10px 15px",
              borderBottom: "1px solid #e2e2e2",
              transition: "all 0.3s ease-in",
            }}
          >
            <Link href="/signUp">SignUp</Link>
          </p>
        </Drawer>
      </Header>

      <Content
        style={{
       
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          padding: "5vh 10vh",
          backgroundColor: "#001529",
          color: "white",
        }}
      >
        <Row>
          <Col xs={24} md={8}>
            <h1>
              <Link
                href="/"
                style={{
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                PC PLANET
              </Link>
            </h1>

            <p style={{ fontWeight: "bold", marginTop: "2vh" }}>Branch -1</p>
            <p style={{ width: "400px", fontSize: "14px" }}>
              Shop 248,249,250 #Level 2, Computer City Center (Multiplan) New
              Elephant Road, Dhaka-1205, Bangladesh.
            </p>
          </Col>
          <Col xs={24} md={8}>
            <h3>Stay Connected</h3>
            <ul style={{ listStyle: "unstyled" }}>
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
            <h3>HelpLine</h3>
            <p style={{ padding: "10px" }}>For PC: 01785236547</p>
            <p style={{ padding: "10px" }}>For Laptop: 01785236547</p>
          </Col>{" "}
          <br />
        </Row>
        <br />
        <hr />
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          {" "}
          Copyright © 2023, PC Planet, All Rights Reserved
        </p>
      </Footer>
    </Layout>
  );
};

export default RootLayout;
