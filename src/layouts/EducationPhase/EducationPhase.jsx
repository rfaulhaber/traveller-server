import React, {Component} from "react";

export default class EducationPhase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRadio: ''
        };
    }

    handleRadioClick = event => {
        this.setState({
            selectedRadio: event.currentTarget.value
        });

        console.log(this.state);
    };

    render() {
        // TODO: make radio button component
        return (
            <div>

            </div>
        );
    }
}
