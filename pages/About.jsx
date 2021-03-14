export class About extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <section className="about-page main-layout">
        <h1>Meet Our Great Team</h1>

        <div className="flex center">
          <div className="hilla member-card flex col space-between align-center">
            <img src="./assets/imgs/hilla.jpeg" />
            <h1>Hilla Meri</h1>
            <h2>Owner CEO And The undisputed Queen Of Ants </h2>
            <p>
              Solving problems and creating new visual languages is my biggest
              passion. My architecture background makes me think of design in a
              structural and humanistic way. Everything will need to make
              perfect sense and will need to be designed around the user since
              the place I’m designing might end up being the place where some
              people will spend their entire lives. I believe that passion is
              the key for everything.
            </p>
          </div>
        </div>

        <div className="team-section flex space-around">
          <div className="tair member-card flex col space-between">
            <img src="./assets/imgs/tair.jpg" />
            <h1>Tair Bitan</h1>
            <h2>Head of Keep and Design Department</h2>
            <p>
              Solving problems and creating new visual languages is my biggest
              passion. My architecture background makes me think of design in a
              structural and humanistic way. Everything will need to make
              perfect sense and will need to be designed around the user since
              the place I’m designing might end up being the place where some
              people will spend their entire lives. I believe that passion is
              the key for everything.
            </p>
          </div>

          <div className="moshiko member-card flex col space-between">
            <img src="./assets/imgs/moshiko.jpeg" />
            <h1>Moshiko Malka</h1>
            <h2>Head of Email and Functionality Department</h2>
            <p>
              Growing up in Amsterdam I was constantly surrounded by modernist
              design, which very heavily influenced my taste and sensibilities.
              To me, great design is practical and starts with breaking things
              down to its simplest form, the straightest line from A to B.
              Anything superfluous makes me uneasy. I frequently have heated
              debates on how things can be done better with less stuff.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
