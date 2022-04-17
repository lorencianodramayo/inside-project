import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { Steps, Button, Card, Row, Col, Typography } from 'antd';
import { StepperProps } from '../interfaces';

const { Step } = Steps;

const { Text } = Typography;

const StepperTS: FC<StepperProps> = ({steps}) => {
    const navigate = useNavigate();
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const completed = () => {
        navigate(`/playground/1`);
    };

    return(
        <div>
            <Steps current={current}>
                {steps.map((item: any) => (
                <Step key={item.title} title={<Text strong type="secondary">{item.title}</Text>} />
                ))}
            </Steps>
            <Card  className="steps-content">{steps[current].content}</Card>
            <div className="steps-action"> 
                <Row>
                    <Col span={12}>
                        {current > 0 && (
                            <Button onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </Col>
                    <Col span={12} style={{display: "flex", justifyContent: "flex-end"}}>
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => completed()}>
                                Lets go!
                            </Button>
                        )}
                    </Col>
                </Row> 
            </div>
        </div>
    )
}

export default StepperTS;