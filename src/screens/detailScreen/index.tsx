import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Detail = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const handleDone = () => {

    navigation.navigate('home', {
      name: name,
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <View >
        <Image style={styles.splaceImage} source={Icon.splace} />
      </View>
      <View style={styles.name}>
        <Text style={styles.enterText}>{strings.enter}</Text>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
            keyboardType="default"
            maxLength={50}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleDone}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Detail;
