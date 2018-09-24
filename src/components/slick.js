import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const styles = {
	card: {
		maxWidth: 345,
	},
	image: {
		height: 200,
		widht: 800
	},
	media: {
		height: 140,
	},
};
class Slick extends React.Component {

	state = {
		slider: []
	}

	componentDidMount() {
		axios.get('http://192.168.100.60:9000/global/auth/slider1/detail')
			.then(res => {
				const slider = res.data;
				this.setState({ slider });
			})
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<Slider {...settings}>
				{this.state.slider.map(data =>
					<div key={data.id}>
						<img style={styles.image} src={data.gambar} />
					</div>
				)}
			</Slider>
		);
	}
}

export default Slick;
