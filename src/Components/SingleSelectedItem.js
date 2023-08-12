import { Button, Col, Divider, Row } from "antd";
import Link from "next/link";

const SingleSelectedItem = ({ icon, categoryName, link, product }) => {
  return (
    <>
      <Row>
        <Col xs={12} style={{ backgroundColor: "#f2f2f2", padding: "2vh 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${icon}`}
              width={30}
              alt="category-icon"
              srcset=""
              style={{ padding: "0 2vh" }}
            />{" "}
            <h3> {categoryName}</h3>
          </div>
        </Col>
        <Col xs={12} style={{ backgroundColor: "#f2f2f2", padding: "2vh 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              paddingRight: "10px",
            }}
          >
            {" "}
            {product ? (
              <Link href={`${link}`}>
                <Button type="primary" style={{ backgroundColor: "red" }}>
                  Change
                </Button>
              </Link>
            ) : (
              <Link href={`${link}`}>
                <Button type="primary">Select item</Button>
              </Link>
            )}
            {/* <Link href={`${link}`}>
              <Button type="primary">Select item</Button>
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Change
              </Button>
            </Link> */}
          </div>
        </Col>

        <Col xs={24}>
          <div
            style={{
              padding: "2vh 10vh",
              display: "flex",
              alignItems: "center",
              fontFamily: "Roboto",
            }}
          >
            <img src={`${product?.imgUrl}`} width={"50px"} alt="" />
            <h4 style={{ margin: "0 5px", fontSize: "16px" }}>
              {" "}
              {product?.product_name}{" "}
            </h4>
          </div>
        </Col>
        <Divider />
      </Row>
    </>
  );
};

export default SingleSelectedItem;
