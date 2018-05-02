import React, { Component } from 'react';

class Traits extends Component {

    render() {
        return(
            <div>
                {/* TO DO: add validation to these fields, disable them unless the previous field has been entered */}
                <input name="traits1" value={this.props.traits[0] || ''} type="text" placeholder="Traits 1" onChange={this.props.handleTraitsAndActionsChange('traits')} />
                <input name="traits2" value={this.props.traits[1] || ''} type="text" placeholder="Traits 2" onChange={this.props.handleTraitsAndActionsChange('traits')} />
                <input name="traits3" value={this.props.traits[2] || ''} type="text" placeholder="Traits 3" onChange={this.props.handleTraitsAndActionsChange('traits')} />
            </div>
        )
    }
}

export default Traits;