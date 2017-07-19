import React, {Component} from 'react';

export default class CharacterCreationFooter extends Component {
    render() {
        return(
            <footer>
                <button onClick={this.props.onBack} disabled={this.props.onBackDisabled}>Back</button>
                <button onClick={this.props.onNext} disabled={this.props.onNextDisabled}>Next</button>
            </footer>
        );
    }
}
