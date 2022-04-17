import React, { FC } from "react";
import { Result } from 'antd';

const ResultSuccess:FC = () => {
    return(
        <Result
            status="success"
            title="Successfully saved to Database!"
            subTitle="Initializing Playground. Please wait."
        />
    )
}

export default ResultSuccess;