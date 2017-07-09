import React, {Component} from "react";

export default class SkillSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            selectedSkills: [],
            checkboxDisabled: false
        };
    }

    handleSkillSelect = (event) => {
        const selected = this.state.selectedSkills;
        const checkedSkill = event.target.id;

        if (!selected.includes(checkedSkill) && event.target.checked) {
            selected.push(checkedSkill);
        } else {
            selected.splice(selected.indexOf(selected), 1);
        }

        console.log(selected);

        if (selected.length === this.props.count) {
            this.setState({selectedSkills: selected, count: selected.length, checkboxDisabled: true});
        } else {
            this.setState({selectedSkills: selected, count: selected.length});
        }

    };

    render() {
        const skills = [
            'Admin',
            'Animals',
            'Art',
            'Athletics',
            'Carouse',
            'Drive',
            'Electronics',
            'Flyer',
            'Language',
            'Mechanic',
            'Medic',
            'Profession',
            'Science',
            'Seafarer',
            'Streetwise',
            'Survival',
            'Vacc Suit',
        ].map(skill => {return {name: skill, assigned: false}});

        return(
            <div>
                <h2>Select {this.props.count - this.state.count} skills</h2>
                <table>
                    <tbody>
                    {skills.map(skill =>
                        <tr colSpan={skills.indexOf(skill)}>
                            <td>
                                {skill.name}
                            </td>
                            <td>
                                <input type="checkbox" id={skill.name} disabled={this.state.checkboxDisabled} onClick={this.handleSkillSelect}/>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
