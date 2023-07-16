import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Auth/Login';

export default function App() {
	return (
        // 0496ff
		<View style={styles.container}>
			<Login />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
	},
});
