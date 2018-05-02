import React, { Component } from 'react';

class Attributes extends Component {
    render() {
        return (
            <div>
                <input name="str" value={this.props.attributes.str || ''} type="text" placeholder="STR" onChange={this.props.handleHpAndAttributeChange('attributes', 'str')} onBlur={this.props.getAttributeBonus} />

                <input name="dex" value={this.props.attributes.dex || ''} type="text" placeholder="DEX" onChange={this.props.handleHpAndAttributeChange('attributes', 'dex')} onBlur={this.props.getAttributeBonus} />

                <input name="con" value={this.props.attributes.con || ''} type="text" placeholder="CON" onChange={this.props.handleHpAndAttributeChange('attributes', 'con')} onBlur={this.props.getAttributeBonus} />

                <input name="int" value={this.props.attributes.int || ''} type="text" placeholder="INT" onChange={this.props.handleHpAndAttributeChange('attributes', 'int')} onBlur={this.props.getAttributeBonus} />

                <input name="wis" value={this.props.attributes.wis || ''} type="text" placeholder="WIS" onChange={this.props.handleHpAndAttributeChange('attributes', 'wis')} onBlur={this.props.getAttributeBonus} />

                <input name="cha" value={this.props.attributes.cha || ''} type="text" placeholder="CHA" onChange={this.props.handleHpAndAttributeChange('attributes', 'cha')} onBlur={this.props.getAttributeBonus} />
            </div>
        )
    }
}

export default Attributes;