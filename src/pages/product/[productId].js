import RootLayout from "@/Layouts/RootLayout";
import { CommentOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Rate, Row, Typography } from "antd";

const { Title } = Typography;
const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <div style={{ padding: "5vh 10vh" }}>
      <Row>
        <Col xs={24} sm={8}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {" "}
            <img
              src={`${product?.imgUrl}`}
              alt="product-img"
              srcset=""
              width={"100%"}
              style={{ maxWidth: "500px", border: "1px solid #e2e2e2" }}
            />
          </div>
        </Col>
        <Col xs={24} sm={16} style={{ fontFamily: "Roboto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginLeft: "10px",
            }}
          >
            <Title level={2} style={{ fontWeight: "bold" }}>
              {product?.product_name}
            </Title>
          </div>
          <p
            style={{
              marginLeft: "10px",
              fontSize: "16px",
              marginBottom: "5vh",
            }}
          >
            {product?.description}{" "}
          </p>
          <div style={{ margin: "5vh 10px", fontSize: "16px" }}>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}> Category:</span>{" "}
              {product?.category}{" "}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}> Price:</span>{" "}
              {product?.price}{" "}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}> Status:</span>{" "}
              {product?.status}{" "}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}> Average Rating:</span>{" "}
              {product?.average_rating}{" "}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Individual Rating:
              </span>{" "}
              {product?.individual_rating}{" "}
            </p>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Title
              level={4}
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Key Feature :
            </Title>
            <ul style={{ marginLeft: "20px", fontSize: "16px" }}>
              {Object.entries(product?.key_features).map(([key, value]) => (
                <li key={key} style={{ margin: "10px 0" }}>
                  <strong
                    style={{ textTransform: "capitalize", marginRight: "10px" }}
                  >
                    {key.replace(/_/g, " ")}
                  </strong>
                  : {value}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              margin: "10vh ",
              marginBottom: "2vh",
            }}
          >
            <Title
              level={3}
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              Customers Review & Feedbacks
            </Title>
          </div>
          <Divider />
          <Row gutter={[16, 16]}>
            {product?.reviews?.map((feedback, index) => (
              <Col key={index} xs={24}>
                <Card style={{ maxWidth: 700, margin: "16px" }} hoverable>
                  <p style={{ fontSize: "18px", fontFamily: "Roboto" }}>
                    {" "}
                    <UserOutlined /> {feedback.username}
                  </p>
                  <p>
                    <Rate disabled defaultValue={feedback.rating} />
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <CommentOutlined style={{ fontWeight: "bolder" }} /> :
                    <i> {feedback.comment}</i>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-planet-backend.vercel.app/products");
  const products = await res.json();
  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  params;
  const res = await fetch(
    `https://pc-planet-backend.vercel.app/product/${params.productId}`
  );
  const data = await res.json();
  data;
  return {
    props: {
      product: data.data[0],
    },
  };
};
