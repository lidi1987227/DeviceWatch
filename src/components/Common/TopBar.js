
import React from 'react';

export default class TopBar extends React.Component{
    render() {
        let {test} = this.props;
        return <div>
            {test}
        </div>
    }
}