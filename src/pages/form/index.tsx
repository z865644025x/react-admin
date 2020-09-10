import React from 'react';
import { Row, Col, Checkbox} from "antd";
import logo1 from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/4.png";
import logo5 from "../../assets/5.png";
import logo6 from "../../assets/6.png";

const list = [
  {
    image:logo6,
    position:false,
    headlines:false,
    day:'2020-08-17',
    number:2
  },
  {
    image:logo5,
    position:false,
    headlines:true,
    day:'2020-08-17',
    number:2
  },
  {
    image:logo4,
    position:false,
    headlines:true,
    day:'2020-08-17',
    number:2
  },
  {
    image:logo2,
    position:true,
    headlines:false,
    day:'2020-08-17',
    number:2
  },
  {
    image:logo3,
    position:true,
    headlines:true,
    day:'2020-08-17',
    number:2
  },
  {
    image:logo1,
    position:false,
    headlines:false,
    day:'2020-08-17',
    number:2
  }
]

const ListItem = (prop:any,index:number) => {
  return <Row gutter={12} align="middle" style={{marginBottom:20}}>
    <Col span="6">
      {<img style={{height:'10vh'}} src={prop.image} alt="left-img"></img>} 
    </Col>
    <Col span="4">
      <Checkbox checked={prop.position}>
        {index === 0 && '左'}
        {index === 1 && '中'}
        {index === 2 && '右'}
        {index === 3 && '梯内中景'}
        {index === 4 && '梯外中景'}
        {index === 5 && '全景'}
      </Checkbox>
    </Col>
    <Col span="4">
      <Checkbox checked={prop.headlines}>带报头</Checkbox>
    </Col>
  </Row>
}

export const FormBox: React.FC = () => {
  return <div style={{padding:"0 40px"}}>
    <Row gutter={12} align="middle" style={{marginBottom:20}}>
    <Col span="6">指定场景要求</Col>
    <Col span="4">
      <Checkbox
        indeterminate={!!list.filter((item:any) => item.position === true)}
      ></Checkbox>
    </Col>
    <Col span="4">
      <Checkbox>带报头</Checkbox>
    </Col>
  </Row>
    {
      list.map((item:any,index:number) => {
        return ListItem(item,index)
      })
    }
  </div>
}