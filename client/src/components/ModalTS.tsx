import React, {FC} from 'react';
import { Modal, Typography } from 'antd';

//interface
import { ModalProps } from '../interfaces';

const { Title } = Typography;

const ModalTS: FC<ModalProps> = ({isVisible, component, hasFooter, isClosable, title}) => {
    return (
        <Modal
          title={<Title level={3} style={{margin:0}}>{title}</Title>}
          closable={isClosable}
          visible={isVisible}
          footer={hasFooter}
          width={1000}
          maskStyle={{backgroundColor: "#3c005a73"}}
          centered
        >
          {component}
        </Modal>
    )
}

export default ModalTS;