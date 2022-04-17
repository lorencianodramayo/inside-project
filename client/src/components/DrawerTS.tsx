import React, { FC } from "react";
import {Drawer } from "antd";
import {
    CloseCircleTwoTone
} from '@ant-design/icons';

//interface
import { DrawerProps } from '../interfaces';

const DrawerTS: FC<DrawerProps> = ({isVisible, onClose, title, placement}) => {
    return(
        <Drawer
        title={title}
        placement={placement}
        closeIcon={<CloseCircleTwoTone twoToneColor="#eb2f96"/>}
        onClose={()=>onClose()}
        visible={isVisible}
        destroyOnClose={true}
        keyboard={true}
        mask={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
}

export default DrawerTS;