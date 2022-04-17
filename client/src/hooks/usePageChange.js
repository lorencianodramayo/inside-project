import { useState } from "react";

export default function usePageChange(initialValue){
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
}