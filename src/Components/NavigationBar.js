import styles from "@/styles/Home.module.css";
import {
  BarsOutlined,
  CaretDownOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Dropdown } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const NavigationBar = () => {
  const { data: session } = useSession();

  console.log(session);

  const items = [
    {
      key: "1",
      label: (
        <Link href="/categories/cpu">
          <items>Processor</items>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/categories/motherboard">
          <items>Motherboard</items>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/categories/ram">
          <items>RAM</items>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/categories/psu">
          <items>Power Supply</items>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/categories/storage">
          <items>Storage Device</items>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/categories/monitor">
          <items>Monitor</items>
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link href="/categories/others">
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
    <>
      <div
        style={{
          backgroundColor: "#001529",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 10px",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                textDecoration: "none !important",
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
          <Link href="/pcBuild" className={styles.authLink}>
            <items
              style={{
                margin: "0px 5px",
                color: "white",
                fontSize: "18px",
                fontFamily: "Roboto",
                textDecoration: "none !important",
              }}
            >
              <Button
                type="link"
                shape="round"
                icon={<EditOutlined />}
                size={"large"}
              >
                Build PC
              </Button>
            </items>
          </Link>
          {session?.user ? (
            <div style={{ display: "inline-block" }} className={styles.user}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <items
                  style={{
                    margin: "0px 5px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <img
                    src={`${session?.user?.image}`}
                    width={"30px"}
                    alt=""
                    srcset=""
                  />
                </items>
                <items
                  style={{
                    margin: "0px 5px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <Button
                    type="primary"
                    style={{ backgroundColor: "red" }}
                    size={"large"}
                    onClick={() =>
                      signOut({
                        callbackUrl: "https://pc-planet-frontend.vercel.app/",
                      })
                    }
                  >
                    Logout
                  </Button>
                </items>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className={styles.authLink}>
                <items
                  style={{
                    margin: "0px 5px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <Button type="primary" size={"large"}>
                    Login
                  </Button>
                </items>
              </Link>
            </>
          )}

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
            <Link href="/categories/cpu">Processor</Link>
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
            <Link href="/categories/motherboard">Motherboard</Link>
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
            <Link href="/categories/ram">RAM</Link>
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
            <Link href="/categories/psu">Power Supply</Link>
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
            <Link href="/categories/storage">Storage Device</Link>
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
            <Link href="/categories/monitor">Monitor</Link>
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
            <Link href="/categories/others">Others</Link>
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
            <Link href={"/pcBuild"}>
              <Button type="link" icon={<EditOutlined />} size={"large"}>
                Build PC
              </Button>
            </Link>
          </p>

          {session?.user ? (
            <p
              style={{
                color: "black",
                fontSize: "18px",
                padding: "10px 15px",
                borderBottom: "1px solid #e2e2e2",
                transition: "all 0.3s ease-in",
              }}
            >
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "https://pc-planet-frontend.vercel.app/",
                  })
                }
                style={{ width: "100%", backgroundColor: "red" }}
                type="primary"
                size={"large"}
              >
                Logout
              </Button>
            </p>
          ) : (
            <p
              style={{
                color: "black",
                fontSize: "18px",
                padding: "10px 15px",
                borderBottom: "1px solid #e2e2e2",
                transition: "all 0.3s ease-in",
              }}
            >
              <Link href="/login">
                <Button style={{ width: "100%" }} type="primary" size={"large"}>
                  Login
                </Button>
              </Link>
            </p>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default NavigationBar;
