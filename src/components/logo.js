import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

  export default class Logo extends React.Component {
  	render(){
  		return(
  			<View style={styles.container}>	
		  		<Image  style={{width: 45, height: 45, marginRight: 10}}
		          	source={require('../images/ilmfit.png')}/>
		    </View>
		)
  	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1
	}
});