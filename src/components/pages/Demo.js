import React from 'react';

import Donut from '../Donut';

export default class Demo extends React.Component{

    render() {
        return (
            <div className="demopage">
                <div>
                    <h1>Previous Projects</h1>
                    <p>- This site - built with react (html, css, javascript). Published on <a href="https://github.com/lijitin/landing/">Github pages</a>.</p>
                    <p>- Raspberry Pi 4 Distributed storage system - built with Apache Hadoop.</p>
                    <p>- <a href="https://github.com/lijitin/Streambot">Audio streaming discord bot</a>
                    - built on .NET framework, with RESTful API consumer library
                     <a href="https://discord.foxbot.me/stable/">discord.net</a>.
                    </p>
                </div>
                
                <Donut></Donut>
                <p>Spinny ASCII Donut refactored - original created by <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">Andy Sloane</a></p>
            </div>
        )
    }

}