import CategoryList from "@/Components/CategoryList";
import FeaturedProducts from "@/Components/FeaturedProducts";
import HeroSlider from "@/Components/HeroSlider";
import RootLayout from "@/Layouts/RootLayout";
import Head from "next/head";
const shuffleProducts = (productsData) => {
  for (let i = productsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [productsData[i], productsData[j]] = [productsData[j], productsData[i]];
  }
  return productsData;
};
const HomePage = ({ featuredProducts }) => {
  return (
    <>
      <Head>
        <title>PC PLANET</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSlider />
      <CategoryList />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-planet-backend.vercel.app/products");
  const data = await res.json();
  const shuffledProducts = shuffleProducts(data?.data);
  return {
    props: {
      featuredProducts: shuffledProducts.slice(0, 8),
    },
  };
};
