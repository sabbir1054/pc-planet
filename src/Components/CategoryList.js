import { Card, Col, Row } from "antd";
import Link from "next/link";

const CategoryList = () => {
  const data = [
    {
      imgIcon: "/assets/images/cpu.png",
      id: 1,
      title: "Processor",
      link: "/categories/cpu",
    },
    {
      imgIcon: "/assets/images/motherboard1.png",
      id: 2,
      title: "Motherboard",
      link: "/categories/motherboard",
    },
    {
      imgIcon: "/assets/images/ram.png",
      id: 3,
      title: "RAM",
      link: "/categories/ram",
    },
    {
      imgIcon: "/assets/images/power1.png",
      id: 4,
      title: "Power Supply",
      link: "/categories/psu",
    },
    {
      imgIcon: "/assets/images/storage.png",
      id: 5,
      title: "Storage Device",
      link: "/categories/storage",
    },
    {
      imgIcon: "/assets/images/monitor1.png",
      id: 6,
      title: "Monitor",
      link: "/categories/monitors",
    },
    {
      imgIcon: "/assets/images/others1.png",
      id: 7,
      title: "Others",
      link: "/categories/others",
    },
    // ... add more data
  ];
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center", padding: "5vh 0" }}>Category</h1>
      <Row gutter={[16, 16]} style={{ paddingLeft: "5vh", width: "100%" }}>
        {data.map((item) => (
          <Col lg={3} md={6} sm={12} key={item.id}>
            <Link href={item.link}>
              <Card hoverable>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={`${item.imgIcon}`}
                    width={30}
                    alt="category-icon"
                    srcset=""
                  />{" "}
                  <span
                    style={{
                      marginLeft: "5px",
                      fontFamily: "Roboto",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryList;
