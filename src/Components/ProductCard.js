import { addToBuilder } from "@/redux/features/builderSlice";
import { Button, Card, Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;
const ProductCard = ({ product }) => {
  const router = useRouter();
  const { pathname } = router;
  const checkPathName = pathname.includes("/selectItem/[selectedCategory]");
  const dispatch = useDispatch();
  const builderState = useSelector((state) => state.builder.selectedProducts);
  let categoryKey = router.query.selectedCategory;

  const handleAddProduct = (product) => {
    dispatch(
      addToBuilder({
        key: categoryKey === "psu" ? "powerSupply" : categoryKey,
        data: product,
      })
    );
    router.push("/pcBuild");
  };

  return (
    <>
      <Card
        hoverable
        style={{
          width: 300,
          fontFamily: "Roboto",
        }}
        cover={
          <Link href={`/product/${product._id}`}>
            <img alt="example" src={`${product?.imgUrl}`} width={"100%"} />
          </Link>
        }
      >
        <Divider />
        <Meta
          title={`${product?.product_name}`}
          style={{ textAlign: "center" }}
        />
        <p style={{ margin: "2px 0" }}>
          <span style={{ fontWeight: "bold" }}>Category : </span>{" "}
          {`${product?.category}`}{" "}
        </p>
        <p style={{ margin: "2px 0" }}>
          <span style={{ fontWeight: "bold" }}>Price :</span>{" "}
          {`${product?.price}`} $
        </p>
        <p style={{ margin: "2px 0" }}>
          <span style={{ fontWeight: "bold" }}> Status: </span>{" "}
          {`${product?.status}`}{" "}
        </p>
        <p style={{ margin: "2px 0" }}>
          <span style={{ fontWeight: "bold" }}>Rating :</span>{" "}
          {`${product?.average_rating}`}{" "}
        </p>
        {checkPathName ? (
          <Button
            type="primary"
            style={{ width: "100%",backgroundColor:"green" }}
            onClick={() => handleAddProduct(product)}
          >
            {" "}
            Add To Builder{" "}
          </Button>
        ) : (
          <Link href={`/product/${product._id}`}>
            <Button type="primary" style={{ width: "100%" }}>
              {" "}
              Show details
            </Button>
          </Link>
        )}
      </Card>
    </>
  );
};

export default ProductCard;
