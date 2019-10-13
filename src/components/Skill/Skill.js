import React, { Component } from 'react';
import '../../css/my-css.css'
import Mock from '../../mock/Mocks';

class Skill extends Component {
    render() {
        const noidung=Mock
        return (                 
            <div className="col-sm-12">
                <h1>{noidung.Skills.title}</h1>
                <div className="skills">
                    <div className="skills-label">
                        <h3>{noidung.Skills.skill1}</h3>
                            <span className="percent">{noidung.Skills.percent1}</span>
                        <div style={{clear: 'both'}} />
                    </div>
                    <div className="bar">
                        <div className="progress" style={{width: noidung.Skills.percent1}} />
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-label">
                        <h3>{noidung.Skills.skill2}</h3>
                        <span className="percent">{noidung.Skills.percent2}</span>
                        <div style={{clear: 'both'}} />
                    </div>
                    <div className="bar">
                        <div className="progress" style={{width: noidung.Skills.percent2}} />
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-label">
                        <h3>{noidung.Skills.skill3}</h3>
                        <span className="percent">{noidung.Skills.percent3}</span>
                        <div style={{clear: 'both'}} />
                    </div>
                    <div className="bar">
                        <div className="progress" style={{width: noidung.Skills.percent3}} />
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-label">
                        <h3>{noidung.Skills.skill4}</h3>
                        <span className="percent">{noidung.Skills.percent4}</span>
                    <div style={{clear: 'both'}} />
                    </div>
                    <div className="bar">
                        <div className="progress" style={{width: noidung.Skills.percent4}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;