import { useState, useEffect} from 'react';



export default function useColorCheck(sum: number): boolean {
    const [color, setColor] = useState(true);

    useEffect(() => {
        setColor(sum >= 0);
    }, [sum]); //  only update when sum changes

    return color;
}

