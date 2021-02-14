import React, { Component } from 'react'
import {View, Image, FlatList} from 'react-native'
import styles from './styles'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker'
import { RNCamera } from 'react-native-camera';





export default class Laporan extends Component {
  constructor(){
		super();
		this.state={
			PickerValue:'',
      
			
		}
		
	};

  takePhoto = async () => {
    const { onTakePhoto } = this.props;
    const options = {
      quality: 0.5,
      base64: true,
      width: 300,
      height: 300,
    };
    const data = await this.camera.takePictureAsync(options);
    onTakePhoto(data.base64);
  };


    render() {
     
        return (
            
            <View style={styles.container}>
            <KeyboardAwareScrollView
              style={{flex: 1, width: '100%'}}
              keyboardShouldPersistTaps="always">
             
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#aaaaaa"
               
               
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <Picker
                selectedValue={this.state.PickerValue}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ PickerValue: itemValue })
                }
                underlineColorAndroid="transparent"
                autoCapitalize="none">
                <Picker.Item label="Pilih Kejadian" value=" " color="#aaaaaa"/>
                <Picker.Item label="Kebakaran" value="kebakaran" />
                <Picker.Item label="Bencana" value="bencana" />
                <Picker.Item label="Pembunuhan" value="pembunuhan" />
                <Picker.Item label="Perampokan" value="perampokan" />
                <Picker.Item label="Pemerkosaan" value="pemerkosaan" />
                <Picker.Item label="Pelecehan" value="pelecehan" />
                
              </Picker>
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Address"
               
               
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.area}
                multiline={true}
                numberOfLines={10}
                
                placeholderTextColor="#aaaaaa"
                placeholder="Keterangan"


                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
             
             <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
                  
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={() => this.takePhoto} style={styles.capture}>
                      <Image style={styles.logo}
                        source={require('../../assets/camera.png')}/>
                      </TouchableOpacity>
                    </View>
              
                
           
            
                    
             
             
              <TouchableOpacity
                
                style={styles.button}
              /*  onPress={() =>this.props.navigation.navigate("Dashboard")} */ >
                <Text style={styles.buttonTitle}>Lapor</Text>
              </TouchableOpacity>
              
              </KeyboardAwareScrollView>
              </View>
        )
    }
   
  
}
