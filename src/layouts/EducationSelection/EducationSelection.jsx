import React, {Component} from 'react';
import Roll from '../../components/Roll/Roll';

export default class EducationSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationChoice: 'None'
        }
    }

    handleEducationChange = (event) => {
        this.setState({
            educationChoice: event.target.value
        });
    };

    render() {
        return(
            <div>
                <label>
                    Select education:
                    <select value={this.state.educationChoice} onChange={this.handleEducationChange}>
                        <option value="None">None</option>
                        <option value="University">University</option>
                        <option value="Military Academy">Military Academy</option>
                    </select>
                </label>
            </div>
        );
    }
}

