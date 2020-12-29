import React from 'react';
import { RNCamera } from 'react-native-camera';


const Camera = () => {
    return (
        <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={{
                flex: 1,
                width: '100%'
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            onBarCodeRead={this.barcodeRecognized}
        />
    )
}
export default Camera;