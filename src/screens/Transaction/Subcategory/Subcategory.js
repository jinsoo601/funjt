import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { THEME_GREEN, THEME_WHITE, THEME_BACKGROUND, THEME_DISABLED, THEME_TEXT } from '../../../components/UI/theme';
import { selectCategory } from '../../../store/actions/index';
import CategorySquare from '../../../components/CategorySquare/CategorySquare';
import { navigateAfterCategorySelection } from '../../CustomTopBarButtons/navigationActions';

const sideLength = Dimensions.get("window").width * 0.3;

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
					<ScrollView horizontal={true}>
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
					</ScrollView>
				</View>
				{
					this.state.selectedSubcategory && (
						<View style={styles.listContainer}>
							<Text style={styles.listTitle}>Device</Text>
							<ScrollView>
								{
									options[this.state.selectedSubcategory].map(itemName => (
										<TouchableWithoutFeedback onPress={() => alert('clicked. go to image picker')} key={itemName}>
											<View style={styles.listItem}>
												<Text style={styles.listItemText}>{itemName}</Text>
											</View>
										</TouchableWithoutFeedback>
									))
								}
							</ScrollView>
						</View>
					)
				}
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
		flexDirection: 'row',
		backgroundColor: THEME_WHITE,
		marginTop: 10,
		borderTopWidth: 1,
		borderTopColor: THEME_DISABLED,
	},
	listContainer: {
		flex: 1,
		marginTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: THEME_DISABLED
	},
	listTitle: {
		color: THEME_TEXT,
		marginLeft: 15
	},
	listItem: {
		width: '100%',
		backgroundColor: THEME_WHITE,
		paddingLeft: 15,
		paddingTop: 20,
		paddingBottom: 20,
		borderTopWidth: 1,
		borderTopColor: THEME_DISABLED,
	},
	listItemText: {
		color: THEME_TEXT,
		fontSize: 16
	}
});

export default Subcategory;