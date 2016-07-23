
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({
            time: new Date()
        }), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    _getXYForHand(length, interval, time){
        return {
            x: 50 + length * Math.cos(time/interval * 2 * Math.PI - (.5 * Math.PI)),
            y: 50 + length * Math.sin(time/interval * 2 * Math.PI - (.5 * Math.PI))
        }
    }

    render() {

        var seconds = this.state.time.getSeconds();
        var minutes = this.state.time.getMinutes();
        var hours = this.state.time.getHours();

        let secondHand = this._getXYForHand(45, 60, seconds);
        let minuteHand = this._getXYForHand(40, 60, minutes + seconds/60);
        let hourHand = this._getXYForHand(35, 12, (hours + minutes/60) % 12);

        return (
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#fff" stroke="#000">
                </circle>
                <line x1="50" y1="50" x2={secondHand.x} y2={secondHand.y} stroke="#000" />
                <line x1="50" y1="50" x2={minuteHand.x} y2={minuteHand.y} stroke="#000" />
                <line x1="50" y1="50" x2={hourHand.x} y2={hourHand.y} stroke="#000" />
            </svg>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById("clock"));