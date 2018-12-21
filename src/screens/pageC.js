import React, { Component } from 'react';
import { StyleSheet, 
	Text, 
	View, 
	Button 
} from 'react-native';

class PageC extends Component {
	handlePress = () => {
		this.props.navigation.navigate('PageA')
	}

	render () {
		return(
			<View style={styles.container}>
				<Text>C</Text>
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

export default PageC;

/*
<Button 
	title="ir al login"
	onPress={this.handlePress}
/>
 */