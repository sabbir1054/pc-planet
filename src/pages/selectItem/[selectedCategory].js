import ProductCard from "@/Components/ProductCard";
import { Col, Divider, Row, Typography } from "antd";
const { Title } = Typography;

const SelectedCategories = ({ products }) => {
  console.log("data", products);
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
        Select {products[0]?.category}
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
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                xl={6}
                key={product.name}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ProductCard product={product} />
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default SelectedCategories;
const categoryData = [
  {
    imgIcon: "/assets/images/cpu.png",
    id: 1,
    title: "Processor",
    link: "cpu",
  },
  {
    imgIcon: "/assets/images/motherboard1.png",
    id: 2,
    title: "Motherboard",
    link: "motherboard",
  },
  {
    imgIcon: "/assets/images/ram.png",
    id: 3,
    title: "RAM",
    link: "ram",
  },
  {
    imgIcon: "/assets/images/power1.png",
    id: 4,
    title: "Power Supply",
    link: "psu",
  },
  {
    imgIcon: "/assets/images/storage.png",
    id: 5,
    title: "Storage Device",
    link: "storage",
  },
  {
    imgIcon: "/assets/images/monitor1.png",
    id: 6,
    title: "Monitor",
    link: "monitor",
  },
  {
    imgIcon: "/assets/images/others1.png",
    id: 7,
    title: "Others",
    link: "others",
  },
  // ... add more data
];
export const getStaticPaths = async () => {
  const paths = categoryData.map((category) => ({
    params: { selectedCategory: category.link },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  let categoryName = params.selectedCategory;
  if (params.selectedCategory === "psu") {
    categoryName = "power supply";
  }
  const res = await fetch(
    `https://pc-planet-backend.vercel.app/products/${categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
