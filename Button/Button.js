import React from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

function _handlePress(callback){
    requestAnimationFrame(callback)
}

const Button = ({
    onPress = () => {},
    disabled,
    style,
    children
}) => {
    return (
        Platform.OS === 'ios'
        ? <TouchableOpacity disabled={disabled} style={style} onPress={() => _handlePress(onPress)}>{children}</TouchableOpacity>
        : <TouchableNativeFeedback disabled={disabled} onPress={() => _handlePress(onPress)}><View style={style}>{children}</View></TouchableNativeFeedback>
    )
}

export default Button;