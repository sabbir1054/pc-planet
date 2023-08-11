import ProductCard from "@/Components/ProductCard";
import RootLayout from "@/Layouts/RootLayout";
import { Col, Divider, Row, Typography } from "antd";

const { Title } = Typography;

const CPU = ({ products }) => {
  console.log(products);
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
      <Title
        level={3}
        style={{ fontFamily: "Roboto", textTransform: "uppercase" }}
      >
        {" "}
        Processor
      </Title>
      <Divider />
      <div
        style={{
          border: "1px solid #f2f2f2",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Row gutter={[16, 24]}>
          {products?.length > 0 &&
            products?.map((product) => (
              <Col className="gutter-row" span={6} key={product.name}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default CPU;
CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(`https://pc-planet-backend.vercel.app/products/cpu`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};