import React from "react";

class MemeGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'https://i.imgflip.com/3kbyd1.jpg',
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => {
                const { memes } = res.data;
                this.setState({ allMemeImg: memes })
            });
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit(event) {
        event.preventDefault();
        const random = Math.floor(Math.random() * this.state.allMemeImg.length);
        this.setState({
            randomImg: this.state.allMemeImg[random].url
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="memeForm">
                    <input type="text" name="topText" onChange={this.handleChange} value={this.state.topText} placeholder="Top Text" />
                    <input type="text" name="bottomText" onChange={this.handleChange} value={this.state.bottomText} placeholder="Bottom Text" />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img className="memeImg" alt="Meme" src={this.state.randomImg} />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;