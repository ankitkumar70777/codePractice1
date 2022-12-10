import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectVsUseLayout = () => {
    const [data, setData] = useState([]);
    console.log("data", data);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const responseJson = await response.json();
            console.log({responseJson});
        })()

        return ()=>{}
    }, []);

    return (
        <div>UseEffectVsUseLayout</div>
    )
}

export default UseEffectVsUseLayout