import { useState } from 'react';

export default function useUserAuth(initialValue){
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
}