import React, {Component} from "react";

export default class EducationPhase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: ''
        };
    }

    handleRadioClick = event => {
        this.setState({
            path: event.currentTarget.value
        });

        console.log(this.state);
    };

    render() {
        return (
            <div>
                <label>
                    <input type="radio" value="university" onClick={this.handleRadioClick}/>
                    University
                </label>
                <label>
                    <input type="radio" value="military" onClick={this.handleRadioClick}/>
                    Military academy
                </label>
            </div>
        );
    }
}
