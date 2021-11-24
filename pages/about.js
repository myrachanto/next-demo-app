import Head from 'next/head'
import { useState } from 'react';
const About = () => {
    const [counter, setCounter] = useState(0)
    return ( 
        <>
        <Head>
        <title>The blog| about</title>
        <meta name="keywords" content="vamos a bailar"/>
    </Head>
        <div className="about">
            <p>{counter}</p>
            <button onClick={() => setCounter(counter +1)}>increment</button>
            <button onClick={() => setCounter(counter - 1)}>decrement</button>
            <p>about us</p>
        </div>
        </>
     );
}
 
export default About; 