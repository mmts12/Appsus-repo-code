export class ColorCmp extends React.Component {

    render() {
        return (
            <section className='colors-container' style={{ opacity: `${this.props.opacity}` }}>
                <button
                    className='btn-color white' onClick={() => { this.props.onChangeBgcNote('white'), this.props.togglePallete() }}>
                </button>
                <button
                    className='btn-color yellow' onClick={() => { this.props.onChangeBgcNote('rgb(246, 221, 152)'), this.props.togglePallete() }}>
                </button>
                <button
                    className='btn-color pink' onClick={() => { this.props.onChangeBgcNote('pink'), this.props.togglePallete() }}>
                </button>
                <button
                    className='btn-color green' onClick={() => { this.props.onChangeBgcNote('rgb(164, 255, 164)'), this.props.togglePallete() }}>
                </button>
                <button
                    className='btn-color cyan' onClick={() => { this.props.onChangeBgcNote('rgb(167, 255, 235)'), this.props.togglePallete() }}>
                </button>
                <button
                    className='btn-color blue' onClick={() => { this.props.onChangeBgcNote('rgb(174, 203, 250)'), this.props.togglePallete() }}>
                </button>
            </section>
        )
    }
}