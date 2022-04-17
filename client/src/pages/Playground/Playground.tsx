import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SketchPicker } from 'react-color';
import { Button, Layout, Menu, PageHeader, Select  } from 'antd';
import {
    ExperimentOutlined,
    BlockOutlined,
    BarsOutlined
} from '@ant-design/icons';

//components
import DrawerTS from "../../components/DrawerTS";

//helper
import AffixTS from "../../helpers/AffixTS";

import './Playground.less';
import IframeTS from "../../components/IframeTS";
import usePageChange from "../../hooks/usePageChange";
import useDynamicFields from "../../hooks/useDynamicFields";
import useBackground from "../../hooks/useBackground";

const { Header, Content } = Layout;
const { Option } = Select;

const Playground: FC = () => {
    const [page, setPage] = usePageChange('playground');
    const [visible, setVisible] = useDynamicFields(false);
    const [background, setBackground] = useBackground({
        r: 236,
        g: 236,
        b: 236,
        a: 100
    });
    
    const onPageChange = (e:any) => {
        setPage(e.key)
    }

    const onShowDynamic = () => {
        setVisible(!visible);
    }

    const onBackgroundChange = (color:any) => {
        setBackground(color.rgb)
    }

    return(
        <Layout className="Playground">
            <Header>
                <Link to="/">
                    <div className="logo" />
                </Link>
                <Menu 
                    theme="dark" 
                    mode="horizontal" 
                    defaultSelectedKeys={[page]}
                    onClick={(e)=>onPageChange(e)}
                >
                    <Menu.Item key="playground" icon={<ExperimentOutlined />} style={{marginRight: "0.3em", borderRadius: "0.2em 0.2em 0 0"}}>Playground</Menu.Item>
                    <Menu.Item key="preview" icon={<BlockOutlined />} style={{borderRadius: "0.2em 0.2em 0 0"}}>Preview</Menu.Item>
                </Menu>
            </Header>
            {
                page === 'playground'? 
                <>
                    <PageHeader
                        ghost={false}
                        //avatar={{src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png'}}
                        avatar={{src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'}}
                        title="Specsavers Global"
                        subTitle="UK Variant"
                        extra={[
                            <Select key="dimension" defaultValue="lucy" style={{ width: 150 }}>
                                <Option value="jack">300x600</Option>
                                <Option value="lucy">1980x1450</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>,
                            <Button onClick={onShowDynamic} key="dynamicElement" type="primary" icon={<BarsOutlined />}/>,
                        ]}
                    >
                        <Content style={{backgroundColor: `rgb(${background.r}, ${background.g}, ${background.b}, ${background.a})`}}>
                            <IframeTS/>
                        </Content>
                        <SketchPicker color={background} onChangeComplete={(e)=>onBackgroundChange(e)}/>
                        <AffixTS />
                    </PageHeader>
                    <DrawerTS isVisible={visible} onClose={onShowDynamic} title="15 Dynamic Element" placement="right"/>
                </> 
                :
                <>Preview</>
            }
        </Layout>
    );
}

export default Playground;