import React, { Component } from 'react';

class HitPoints extends Component {
    render() {
        return (
            <div>
                <input name="hpNum" value={this.props.hpData.num || ''} type="number" placeholder="Hit Dice" onChange={this.props.handleHpAndAttributeChange('hp', 'num')} />

                <input name="hpType" value={this.props.hpData.diceType || ''} type="number" placeholder="Hit Dice Type" onChange={this.props.handleHpAndAttributeChange('hp', 'diceType')} />

                <input name="hpMod" value={this.props.hpData.modifier || ''} type="number" placeholder="Modifier" onChange={this.props.handleHpAndAttributeChange('hp', 'modifier')} />

                <input name="hpAvg" value={this.props.hpData.average || ''} type="number" placeholder="HP Average" onChange={this.props.handleHpAndAttributeChange('hp', 'average')} />
            </div>
        );
    }
}



export default HitPoints;