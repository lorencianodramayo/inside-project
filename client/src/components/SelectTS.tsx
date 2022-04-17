import React, { FC } from 'react';

import { Select } from 'antd';
import { SelectProps } from '../interfaces';

const { Option } = Select;

const SelectTS:FC<SelectProps> = ({label, size, options}) => {
    return(
        <Select
            style={{width: "100%"}}
            size={size}
            showSearch
            disabled={options.length === 0? true : false}
            placeholder={`Select a ${label}`}
            optionFilterProp="children"
            allowClear
            filterOption={(input:any, option:any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                Object.keys(options).map((data:any, index: number) => {
                    return <Option value={options[data]._id} key={index}>{options[data].name}</Option>
                })
            }
        </Select>
    )
}

export default SelectTS;