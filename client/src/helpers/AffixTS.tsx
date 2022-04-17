import React, { FC } from 'react';
import { Button, Col, Popover, Row, Tooltip } from 'antd';
import { 
    SettingOutlined, 
    PictureOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    StrikethroughOutlined,
    TranslationOutlined,
    SaveOutlined
} from '@ant-design/icons';

const options = [
    {
        text: 'Show Image',
        icon: <PictureOutlined />
    },
    {
        text: 'Background',
        icon: <BgColorsOutlined />
    },
    {
        text: 'Text Settings',
        icon: <FontSizeOutlined />
    },
    {
        text: 'Split Text',
        icon: <StrikethroughOutlined />
    },
    {
        text: 'Language',
        icon: <TranslationOutlined />
    },
    {
        text: 'Add to Preview',
        icon: <SaveOutlined />
    }
]

const AffixTS: FC = () => {
    return(
        <div className="affix-helper">
            <Popover
                placement="topLeft"
                content={
                    <Row gutter={[0,8]}>
                        {
                            options.map((data: any, index: number) => {
                                return(
                                    <Col span={24} key={index}>
                                        <Tooltip title={data.text} color="purple" placement="right">
                                            <Button type="primary" ghost shape="circle" icon={data.icon}></Button>
                                        </Tooltip>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                }
                trigger="click"
            >
                <Button type="primary" shape="circle" icon={<SettingOutlined />}/>
            </Popover>
        </div>
    )
}

export default AffixTS;