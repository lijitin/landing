import React from 'react';

import './Demo.css';
import Donut from '../Donut';

export default class Demo extends React.Component{

    render() {
        return (
            <div className="demopage">
                <div>
                    <h1>Previous Projects</h1>
                    <p>> This site - powered by ReactJS. </p>
                    <p><a href="https://github.com/lijitin/landing/">Source here</a></p>
                    <p>> <a href="https://github.com/lijitin/picluster">Raspberry Pi 4 distributed storage system</a></p>
                    <p>built with Apache Hadoop</p>
                    <p>> <a href="https://github.com/lijitin/Streambot">Audio streaming discord bot</a></p>
                    <p> built on .NET framework, with RESTful API consumer library <a href="https://discord.foxbot.me/stable/">discord.net</a></p>
                </div>
                <Donut></Donut>
                <p>donut.c refactored - original by <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">Andy Sloane</a></p>
            </div>
        )
    }

}