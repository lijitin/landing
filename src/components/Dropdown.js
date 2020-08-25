import React from 'react'
import { SlideDown } from 'react-slidedown'

export default class Dropdown extends React.Component {
    render() {
        let className = 'dropdown-slidedown'
        let caption = this.props.open ? 'Down' : 'Up'
        let render = this.props.open;
        let closed = false;

        if (this.props.overlay) {
            className = 'dropdown-slidedown overlay'
            caption = this.props.open ? 'Open' : 'Closed'
        }

        if (this.props.alwaysRender) {
            render = true;
            closed = !this.props.open;
        }

        return (
            <div className={'dropdown-container'}>
                <span className={'narrative'}>{caption}</span>
                <SlideDown className={'pure-menu pure-menu-scrollable ' + className} closed={closed}>
                        <p>content1</p>
                        <p>content2</p>
                </SlideDown>
            </div>
        )
    }


}