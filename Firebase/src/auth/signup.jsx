import React, { useState } from "react";
import { Button, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { auth,createUserWithEmailAndPassword,app,uploadBytes, storage, ref } from "../utills/auth";
const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

 function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [img, setimg] = useState();
  const { token } = useToken();
  const screens = useBreakpoint();

  


  const signup = () => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const imagesRef = ref(storage,`users/${user.uid}`);
    const uploadTask = uploadBytes(imagesRef,img);
    uploadTask.then( (snapshot) => {
    snapshot ?  window.location.href='/' : null;
    }).catch( (err) => {
      alert(err)
    } )
    setName('');
    setEmail('');
    setPassword('');
    setimg('')
   
    })
  .catch((error) => {
    const errorMessage = error.message;
   alert(errorMessage)
  });
 
  }
  const [form] = Form.useForm();
  const onFinish = (values) => {
    signup();
    form.resetFields();
};

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
      width: "380px"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center"
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text>
        </div>
        <Form
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
          form={form}
        >
        <Form.Item
            name="image"
            rules={[
              {
                required: true,
                message: "Please upload your Image!",
              },
            ]}
          >
            <Input type="file" onChange={(e) => {setimg(e.target.files[0]);}}  placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input value={name} onChange={(e)=>{setName(e.target.value)}} prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            extra="Password needs to be at least 8 characters."
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit" >
              Sign up
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="/signin">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}


export default SignUpPage