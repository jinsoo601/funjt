import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { THEME_GREEN, THEME_WHITE, THEME_BACKGROUND } from '../../../components/UI/theme';
import { selectCategory } from '../../../store/actions/index';
import CategorySquare from '../../../components/CategorySquare/CategorySquare';
import { navigateAfterCategorySelection } from '../../CustomTopBarButtons/navigationActions';

const sideLength = Dimensions.get("window").width * 0.3;

class Subcategory extends Component {
	state = {
		selectedSubcategory: null
	};

	onClickSubcategory = subcategory => {
		this.setState({
			selectedSubcategory: subcategory
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.subcategoryContainer}>
					<CategorySquare 
						title="iPhone" 
						onPress={this.onClickSubcategory} 
						sideLength={sideLength}
						style={[
							{margin: 10},
							this.state.selectedSubcategory === 'iPhone' ? { backgroundColor: THEME_GREEN } : null
						]}
						textColor={this.state.selectedSubcategory === 'iPhone' ? { color: THEME_WHITE } : null}
					/>
					<CategorySquare 
						title="Smartphone" 
						onPress={this.onClickSubcategory} 
						sideLength={sideLength} 
						style={[
							{margin: 10},
							this.state.selectedSubcategory === 'Smartphone' ? { backgroundColor: THEME_GREEN } : null
						]}
						textColor={this.state.selectedSubcategory === 'Smartphone' ? { color: THEME_WHITE } : null}
					/>
					<CategorySquare 
						title="Laptop" 
						onPress={this.onClickSubcategory} 
						sideLength={sideLength} 
						style={[
							{margin: 10},
							this.state.selectedSubcategory === 'Laptop' ? { backgroundColor: THEME_GREEN } : null
						]}
						textColor={this.state.selectedSubcategory === 'Laptop' ? { color: THEME_WHITE } : null}
					/>
					<CategorySquare 
						title="Headphone" 
						onPress={this.onClickSubcategory} 
						sideLength={sideLength} 
						style={[
							{margin: 10},
							this.state.selectedSubcategory === 'Headphone' ? { backgroundColor: THEME_GREEN } : null
						]}
						textColor={this.state.selectedSubcategory === 'Headphone' ? { color: THEME_WHITE } : null}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME_BACKGROUND
	},
	subcategoryContainer: {
		flexDirection: 'row'
	}
});

export default Subcategory;

const options = {
	iPhone: [
		'iPhone XS',
		'iPhone XS Max',
		'iPhone XR',
		'iPhone X',
		'iPhone 8',
		'iPhone 8 Plus',
		'iPhone 7',
		'iPhone 7 Plus'
	],
	Smartphone: [
		'Samsung Galaxy S8',
		'LG G6',
		'Google Pixel 3',
		'LG G7 ThinQ™',
		'Sony Xperia XZ2',
		'Samsung Galaxy S9 | S9+',
		'Samsung Galaxy Note8',
		'Google Pixel 2'
	],
	Laptop: [
		'Huawei MateBook X Pro',
		'Dell XPS 13',
		'Asus ZenBoo Flip S UX370',
		'Apple MacBook Pro with Toch Bar 13-inch 2018',
		'MSI GS65 Stealth',
		'Microsoft Surfac Laptop 2',
		'Dell XPS 15 2-in-1'
	],
	Headphone: [
		'Sennheiser',
		'Audio-Technica',
		'Beyerdynamic',
		'Shure',
		'Grado',
		'Bose',
		'AKG',
		'Sony'
	]
}