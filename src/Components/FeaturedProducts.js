import { Col, Row, Typography } from "antd";
import ProductCard from "./ProductCard";

const { Title } = Typography;

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div
      style={{
        minHeight: "10vh",
        padding: "5vh 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title level={3} style={{ textAlign: "center" }}>
        {" "}
        Featured Products
      </Title>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Row gutter={[16, 24]}>
          {featuredProducts?.length > 0 &&
            featuredProducts?.map((product) => (
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                xl={6}
                key={product.name}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default FeaturedProducts;
