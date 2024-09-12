import React from 'react';
import {
	SafeAreaView,
} from 'react-native';

import BikeStore from './src/screens/BikeStore';
import { COLORS } from './src/constants/colors';


function App(): React.JSX.Element {

	return (
		<>
			<SafeAreaView style={{ flex: 0, backgroundColor: COLORS.PRIMARY }} />
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<BikeStore />
			</SafeAreaView>
		</>
	);

}
export default App;
