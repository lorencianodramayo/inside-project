import { useState } from "react";

export default function useBackground(initialValue){
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
}