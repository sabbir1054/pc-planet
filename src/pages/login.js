import RootLayout from "@/Layouts/RootLayout";
import { GithubOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Typography } from "antd";
import { signIn } from "next-auth/react";
const { Title } = Typography;

const Login = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            minWidth: 300,
            width: 500,
            textAlign: "center",
            fontFamily: "Roboto",
            //   fontSize: "",
          }}
        >
          <Title
            level={3}
            style={{
              fontFamily: "Roboto",
              //   fontSize: "",
            }}
          >
            Login Here
          </Title>
          <Divider />
          <Button
            type="primary"
            style={{
              backgroundColor: "black",
              width: "100%",
              padding: "20px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
            }}
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-planet-frontend.vercel.app/",
              })
            }
          >
            <GithubOutlined />
            Login with GitHub
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
