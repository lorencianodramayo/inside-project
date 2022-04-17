import React, { FC } from "react";
import { Spin } from "antd";

//interface
import { SpinProps } from "../interfaces";

const LoaderTS:FC<SpinProps> = ({ isSpinning, delay, content }) => {
    return <Spin size="large" tip="Loading..." spinning={isSpinning} delay={delay} style={{maxHeight: "100%"}}> { content } </Spin>
}

export default LoaderTS;