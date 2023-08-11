import RootLayout from "@/Layouts/RootLayout";

const Register = () => {
  return <div></div>;
};

export default Register;
Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};