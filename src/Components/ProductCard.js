import { Card, Divider } from "antd";
import Link from "next/link";
const { Meta } = Card;
const ProductCard = ({ product }) => {
  return (
    <>
      <Link href={`/product/${product._id}`}>
        <Card
          hoverable
          style={{
            width: 300,
            fontFamily: "Roboto",
          }}
          cover={<img alt="example" src={`${product?.imgUrl}`} />}
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
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
