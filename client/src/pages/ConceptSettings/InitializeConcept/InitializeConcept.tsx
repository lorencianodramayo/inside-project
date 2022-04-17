import React, { FC, useEffect, useRef } from 'react';
import { Col, Form, Row, Typography } from 'antd';
import axios from 'axios';

//components
import SelectTS from '../../../components/SelectTS';
import usePartner from '../../../hooks/concept/usePartner';

const selection = ["Partner", "Concept", "Channel"];

const { Text } = Typography;

const InitializeConcept: FC = () => {
    const [form] = Form.useForm();
    const formRef = useRef(null);
    const token = sessionStorage.getItem('adlib-token');
    const [partner, setPartner] = usePartner([]);

    useEffect(() => {
        axios.get('/adlib/getData', { params: { url: 'https://api-app.ad-lib.io/api/v2/partners', token }})
            .then((response) => setPartner(response.data))
    }, [setPartner, token]);

    return(
        <div>
            <Row>
                <Col span={24}>
                    <Form 
                        form={form}
                        layout="vertical"
                        ref={formRef}
                    >
                        {
                            selection.map((data: string, index: number) => 
                                {
                                    return (
                                        <Form.Item label={<Text strong>{data}</Text>} key={index}>
                                            <SelectTS label={data} size="large" options={data === "Partner"? partner : []}/>
                                        </Form.Item>
                                    )
                                }
                            )
                        }
                        
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default InitializeConcept;