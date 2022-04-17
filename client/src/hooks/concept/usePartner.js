import { useState } from 'react';

export default function usePartner(initialValue){
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
}