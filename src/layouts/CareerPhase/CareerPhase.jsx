import React, {Component} from 'react';
import Roll from '../../components/Roll/Roll';
import EducationSelection from "../EducationSelection/EducationSelection";

export default class CareerPhase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: 0,
            educationSelected: false,
            education: 'None'
        };
    }

    onNextTerm = () => {
        const term = this.state.term + 1;

        this.setState({term});

        if (this.props.save) {
            // save relevant fields
        }
    };

    render() {
        return(
            <div>
                <div>
                    Term: {this.state.term}
                </div>
                <button onClick={this.onNextTerm}>Next term</button>
                <div>
                    {this.state.term < 4 && !this.state.educationSelected &&
                        <EducationSelection/>
                    }
                </div>
                <div>
                    <Roll type="2D"/>
                </div>
            </div>
        );
    }
}
