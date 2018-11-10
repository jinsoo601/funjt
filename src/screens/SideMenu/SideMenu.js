import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class SideMenu extends Component {
	render() {
		return (
			<View 
				style={[
					styles.container,
					{ width: Dimensions.get("window").width * 0.8 }
				]}
			>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.drawerItem}>
						<Icon 
							name="arrow-back" 
							size={30} 
							color="#333"
							style={styles.drawerItemIcon}
						/>
						<Text>Sign out</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		backgroundColor: "white",
		flex: 1
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#eee"
	},
	drawerItemIcon: {
		marginRight: 10
	}
});

export default SideMenu;