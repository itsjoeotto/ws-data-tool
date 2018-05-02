import React, { Component } from 'react';

class Actions extends Component {
    render() {
        return(
            <div>
                {/* TO DO: add validation to these fields, disable them unless the previous field has been entered */}
            <input name="actions1" value={this.props.actions[0] || ''} type="text" placeholder="Actions 1" onChange={this.props.handleTraitsAndActionsChange('actions')} />
            <input name="actions2" value={this.props.actions[1] || ''} type="text" placeholder="Actions 2" onChange={this.props.handleTraitsAndActionsChange('actions')} />
            <input name="actions3" value={this.props.actions[2] || ''} type="text" placeholder="Actions 3" onChange={this.props.handleTraitsAndActionsChange('actions')} />
            </div>
        );
    }
}

export default Actions;