import React, { useState } from 'react';
import { Input,Button,message } from "antd"
import { UserOutlined,KeyOutlined } from '@ant-design/icons'
import styles from "./index.module.less"
import { useHistory } from 'react-router-dom';

interface titleType {
  title:string
}

const Box = (props:any) => {
  return <div className={styles.anthBox}>
    {props.children}
  </div>
}

const Title = ({title}:titleType) => <div className={styles.title}>{title}</div>

export const Login:React.FC = () => {

  const [user,setUser] = useState<string>('');
  const [pwd,setPwd] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);
  const history = useHistory();

  const login = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
      if(user !== 'admin' || pwd !== 'admin'){
        message.error('登陆失败！请尝试输入账户："admin",密码："admin"!')
        return 
      }
      history.push('/');
      message.success("登陆成功!");
    },500);
  }

  const handleChangeUser = (e:any) => {
    setUser(e.target.value)
  }

  const handleChangePwd = (e:any) => {
    setPwd(e.target.value)
  }

  return (
    <div className={styles.auth}>
      <Box>
        <Title title="React Admin" />
        <Input onChange={handleChangeUser} placeholder="请输入用户名" size="large" style={{
          width:'20vw',
          marginBottom:20
        }} prefix={<UserOutlined />}></Input>
        <br />
        <Input onChange={handleChangePwd} placeholder="请输入密码" type="password" size="large" style={{
          width:'20vw',
          marginBottom:20
        }} prefix={<KeyOutlined />}></Input>
        <br />
        <Button type="primary" size="large" style={{
          width:"20vw"
        }} onClick={login} loading={loading}>登录</Button>
      </Box>
    </div>
  )
}