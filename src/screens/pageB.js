import React, { Component } from 'react';
import { StyleSheet, 
	Text, 
	View, 
	Button 
} from 'react-native';

class PageB extends Component {
	handlePress = () => {
		this.props.navigation.navigate('PageB')
	}

	render () {
		return(
			<View style={styles.container}>
				<Text>B</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',	//alineado en el centro tanto horizontal, como vertical
    justifyContent: 'center',
  },
});

export default PageB;
