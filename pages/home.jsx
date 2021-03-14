export class Home extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <section className="home-page">
        <div className="hero-section main-layout">
          <h1>Appsus</h1>
          <h2>We Make Everything Pashuty</h2>
          <img src="./assets/imgs/homepage.png" />
        </div>

        <div className="mail-bgc">
          <div className="mail-section main-layout">
            <h2>Meet Your New Mail Box</h2>
            <h3>
              Take back the control. <br />
              With simple design and powerful interface, you decide what to read
              and when
            </h3>
            <img src="./assets/imgs/desktop.png" />
          </div>
        </div>

        <div className="keep-section main-layout">
          <h2>New Place To Save Your Thoughts</h2>
          <h3>
            Add notes, lists, images, videos and GIFs to Keep. We will make sure
            to synchronize all the data across your devices so your important
            stuff is always at your lap
          </h3>
          <img src="./assets/imgs/tablet.png" />
        </div>

        <div className="more-bgc">
          <div className="more-section main-layout">
            <h2>Stay Tuned</h2>
            <h3>More apps coming soon..</h3>
            <img src="./assets/imgs/more.png" />
          </div>
        </div>
      </section>
    );
  }
}
