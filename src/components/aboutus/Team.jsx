import React from 'react';

class Team extends React.Component {
  render() {
    return (
      <div className="team margin-vertical-2rem">
        <div className="wrapper rwrapper">
          <p className="team-heading">Team</p>
          <div className="team-cont margin-vertical-2rem r-d-block">
            {[
              {
                pic: 'teamitem1.jpeg',
                name: 'DR. RAMESH C. BISWAL',
                role: 'Co-Founder & CEO',
                link: 'https://twitter.com/rchbiswal'
              },
              {
                pic: 'teamitem2.jpeg',
                name: 'Chaduvula Prasanth',
                role: 'Co-Founder & Tech Head',
                link: 'https://twitter.com/chaduvula98'
              }
            ].map((memb, index) => (
              <a
                className="team-mem-cont rpd-vertical-1rem"
                href={memb.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img className="team-mem-pic" src={memb.pic} alt="" />
                <p className="team-mem-name">{memb.name}</p>
                <p className="team-mem-role">{memb.role}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
