import React, { FC } from 'react';
import { Button, Checkbox, Col, Divider, Row, Typography } from 'antd';
import {
    EyeOutlined
  } from '@ant-design/icons';
import SelectTS from '../../../components/SelectTS';

const { Text } = Typography;


const SelectTemplate: FC = () => {
    return(
        <div>
            <Row gutter={[16,8]}>

                <Col span={6}><Checkbox></Checkbox></Col>
                <Col span={8}><Text strong>Template Name</Text></Col>
                <Col span={8}><Text strong>Variations</Text></Col>
                <Col span={2}></Col>
                
                <Divider dashed style={{margin: "4px 0 10px"}}/>

                <Col span={6}><Checkbox>300x600</Checkbox></Col>
                <Col span={8}>Specsavers Global</Col>
                <Col span={8}><SelectTS label="Variation" size="middle" options={{name: "aw"}}/></Col>
                <Col span={2}><Button style={{width: "100%"}} icon={<EyeOutlined />} /></Col>

                <Col span={6}><Checkbox>300x600</Checkbox></Col>
                <Col span={8}>Specsavers Global</Col>
                <Col span={8}><SelectTS label="Variation" size="middle" options={{name: "aw"}}/></Col>
                <Col span={2}><Button style={{width: "100%"}} icon={<EyeOutlined />} /></Col>
            </Row>
            
        </div>
    )
}

export default SelectTemplate;