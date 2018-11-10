import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_GREEN, THEME_TEXT, THEME_DISABLED } from '../../components/UI/theme';

class SideMenu extends Component {
	render() {
		return (
			<View 
				style={[
					styles.container,
					{ width: Dimensions.get("window").width * 0.8 }
				]}
			>
				<View style={styles.profileImageWrapper}>
					<View style={styles.profileImage}></View>
				</View>
				<View style={styles.balanceBar}>
					<Text style={styles.balanceBarText}>$232.93</Text>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.balanceBarLink}>Transfer to Bank</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.drawerItem}>
							<Icon 
								name="home" 
								size={30} 
								color={THEME_TEXT}
								style={styles.drawerItemIcon}
							/>
							<Text>Home</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.drawerItem}>
							<Icon 
								name="account-balance" 
								size={30} 
								color={THEME_TEXT}
								style={styles.drawerItemIcon}
							/>
							<Text>Bank Account</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.drawerItem}>
							<Icon 
								name="notifications" 
								size={30} 
								color={THEME_TEXT}
								style={styles.drawerItemIcon}
							/>
							<Text>Notifications</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.drawerItem}>
							<Icon 
								name="settings" 
								size={30} 
								color={THEME_TEXT}
								style={styles.drawerItemIcon}
							/>
							<Text>Settings</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.feedBackWrapper}>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.drawerItem}>
							<Icon 
								name="announcement" 
								size={30} 
								color={THEME_TEXT}
								style={styles.drawerItemIcon}
							/>
							<Text>Feedback</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
	},
	profileImageWrapper: {
		width: '100%',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: THEME_DISABLED,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: THEME_GREEN
	},
	balanceBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 10,
		paddingRight: '10%'
	},
	balanceBarText: {
		color: THEME_TEXT,
	},
	balanceBarLink: {
		color: THEME_GREEN,
	},
	buttonContainer: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: THEME_DISABLED,
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	drawerItemIcon: {
		marginRight: 10
	},
	feedBackWrapper: {
		height: '20%'
	}
});

export default SideMenu;