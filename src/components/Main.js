import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <input name="name" value={this.props.newShape.name || ''} type="text" placeholder="Name" onChange={this.props.handleChangeFor('name')} />
                <input name="size" value={this.props.newShape.size || ''} type="text" placeholder="Size" onChange={this.props.handleChangeFor('size')} />
                <input name="ac" value={this.props.newShape.ac || ''} type="number" placeholder="AC" onChange={this.props.handleChangeFor('ac')} />
                <input name="speed" value={this.props.newShape.speed || ''} type="text" placeholder="Speed" onChange={this.props.handleChangeFor('speed')} />
                <input name="skills" value={this.props.newShape.skills || ''} type="text" placeholder="Skills" onChange={this.props.handleChangeFor('skills')} />
                <input name="senses" value={this.props.newShape.senses || ''} type="text" placeholder="Senses" onChange={this.props.handleChangeFor('senses')} />
                <input name="languages" value={this.props.newShape.languages || ''} type="text" placeholder="Languages" onChange={this.props.handleChangeFor('languages')} />
                <input name="challenge" value={this.props.newShape.challenge || ''} type="text" placeholder="Challenge Rating" onChange={this.props.handleChangeFor('challenge')} />
            </div>
        )
    }
}

export default Main;