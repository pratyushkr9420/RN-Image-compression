import React, { FC} from "react";
import { View, Text, StyleSheet} from "react-native";
import EditingButton from "./EditingButton";
import Slider from "@react-native-community/slider";

type editortoolsprop = {
    captureImage: () => void
    getGalleryImage: () => void
}

const EditorTools : FC <editortoolsprop>  = ({ captureImage, getGalleryImage}) : JSX.Element => {
    return (
        <View style={styles.editingToolContainer}>
            <View style={styles.editingBtnContainer}>
                <EditingButton
                    family='feather'
                    title='Capture again'
                    name='camera'
                    size={40}
                    iconColor="white"
                    onPress={captureImage}
                />
                <EditingButton
                    family='ant-design'
                    title='Select again'
                    name='folderopen'
                    size={40}
                    iconColor="white"
                    onPress={getGalleryImage}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text>Compressed to: 50%</Text>
                <Text>Image size: 50KB</Text>
            </View>
            <View style={{justifyContent: "center",alignItems: 'center'}}>
                <Slider
                    style={{width: 360, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#6C9ADE"
                    maximumTrackTintColor="#d2e2fa"
                    thumbTintColor="#6C9ADE"
                />
            </View>
        </View>
    )
}

export default EditorTools;

const styles = StyleSheet.create({
    editingToolContainer: {
        position: 'absolute',
        bottom:80,
        backgroundColor:'white'
    },
    editingBtnContainer: {
        flexDirection:'row',
        width:"100%",
        padding: 20,
        justifyContent:'space-between',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical:20
    }
})