export class InfoCmp extends React.Component {

    render() {
        const { height, opacity, zIndex } = this.props.display;
        return (
            <section className="info" style={{ height: `${height}` + 'px', opacity: `${opacity}` , zIndex: `${zIndex}` }}>
                <h1>Here Are Some Links For Quick And Easy Use</h1>
                <hr />
                <h1>Images:</h1>
                <p>https://cutt.ly/Mh9Uh62</p>
                <p>https://cutt.ly/Vh9UlEt</p>
                <p>https://cutt.ly/Gh9Uzie</p>
                <br />
                <h1>GIFs:</h1>
                <p>https://cutt.ly/wh9Um4P</p>
                <p>https://cutt.ly/gh9UTse</p>
                <p>https://cutt.ly/rh9UIvr</p>
                <br />
                <h1>Videos:</h1>
                <p>https://www.youtube.com/embed/hz8iwhc_SJQ</p>
                <p>https://www.youtube.com/watch?v=_6moAZgsVYs</p>
                <p>https://www.youtube.com/embed/JkafqBj6dsk</p>
            </section>
        )
    }
}