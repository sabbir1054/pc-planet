import SingleSelectedItem from "@/Components/SingleSelectedItem";
import RootLayout from "@/Layouts/RootLayout";
import { removeFromBuilder } from "@/redux/features/builderSlice";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const { Title } = Typography;
const BuildPC = () => {
  const session = useSession();
  const dispatch = useDispatch();
  const [activeSave, setActiveSave] = useState(false);
  const builderState = useSelector((state) => state.builder.selectedProducts);
  console.log(builderState);
  useEffect(() => {
    if (
      builderState.cpu &&
      builderState.motherboard &&
      builderState.ram &&
      builderState.powerSupply &&
      builderState.monitor &&
      builderState.storage
    ) {
      setActiveSave(true);
    }
  }, []);

  const categoryData = [
    {
      imgIcon: "/assets/images/cpu.png",
      id: 1,
      title: "Processor",
      link: "/selectItem/cpu",
      productData: builderState.cpu,
    },
    {
      imgIcon: "/assets/images/motherboard1.png",
      id: 2,
      title: "Motherboard",
      link: "/selectItem/motherboard",
      productData: builderState.motherboard,
    },
    {
      imgIcon: "/assets/images/ram.png",
      id: 3,
      title: "RAM",
      link: "/selectItem/ram",
      productData: builderState.ram,
    },
    {
      imgIcon: "/assets/images/power1.png",
      id: 4,
      title: "Power Supply",
      link: "/selectItem/psu",
      productData: builderState.powerSupply,
    },
    {
      imgIcon: "/assets/images/storage.png",
      id: 5,
      title: "Storage Device",
      link: "/selectItem/storage",
      productData: builderState.storage,
    },
    {
      imgIcon: "/assets/images/monitor1.png",
      id: 6,
      title: "Monitor",
      link: "/selectItem/monitor",
      productData: builderState.monitor,
    },
    {
      imgIcon: "/assets/images/others1.png",
      id: 7,
      title: "Others",
      link: "/selectItem/others",
      productData: builderState.others,
    },
  ];

  const handleCompleteBtn = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Build Complete",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(
      removeFromBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        powerSupply: null,
        others: null,
      })
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Row justify="center">
        <Col xs={24} md={20}>
          <Title
            level={3}
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              textTransform: "uppercase",
              padding: "5vh 0",
            }}
          >
            {" "}
            Build your Dream PC{" "}
          </Title>
          <Row
            style={{
              padding: "0 2vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Col xs={24} sm={24} md={8}
              style={{
                padding:"10px 0",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Name: {session?.data?.user?.name}{" "}
            </Col>
            <Col xs={24} sm={24} md={8}
              style={{
                padding:"10px 0",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Email: {session?.data?.user?.email}{" "}
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Button
                type="primary"
                disabled={activeSave ? false : true}
                onClick={handleCompleteBtn}
              >
                {" "}
                Complete Build
              </Button>{" "}
            </Col>
          </Row>
          <Divider />
          {/* Selected Items For pc build */}
          <div>
            <div>
              <Row>
                {categoryData?.map((category) => (
                  <Col xs={24} key={category.id}>
                    {" "}
                    <SingleSelectedItem
                      icon={category?.imgIcon}
                      categoryName={category?.title}
                      link={category?.link}
                      product={category?.productData}
                    />{" "}
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BuildPC;

BuildPC.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
