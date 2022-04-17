import { useState } from "react";

export default function useDynamicFields(initialValue){
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
}