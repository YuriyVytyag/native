import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
// import * as Font from 'expo-font';
// import { Apploading } from 'expo';

const initialState = {
  login: '',
  email: '',
  password: '',
};

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
//   });
// };

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 16 * 2);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2;
      console.log('🚀 ~ width:', width);
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.addEventListener('change', onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // if (!isReady) {
  //   return (
  //     <Apploading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/background.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View
              style={{
                ...Platform.select({
                  ios: {
                    ...styles.form,
                    marginBottom: isShowKeyboard ? 180 : 0,
                  },
                  android: {
                    ...styles.form,
                    paddingBottom: isShowKeyboard ? 0 : 78,
                  },
                }),
              }}
            >
              <Camera style={styles.avatar}>
                <View style={styles.avatarInfo}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </View>
              </Camera>
              <View style={styles.formHeader}>
                <Text style={styles.formHeaderText}>Регистрация</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Логин"
                  textAlign={'left'}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Адрес электронной почты"
                  textAlign={'left'}
                  style={styles.input}
                  marginBottom={16}
                  marginTop={16}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Пароль"
                  textAlign={'left'}
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                />
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={keyboardHide}>
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.login}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // ...Platform.select({
    //   ios: {
    //     justifyContent: 'flex-start',
    //   },
    //   android: {
    //     justifyContent: 'center',
    //   },
    // }),
    // justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'center',
    // alignItems: 'center',
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  formHeaderText: {
    marginBottom: 32,
    marginTop: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    // fontFamily: 'Roboto-Regular',
    // letterSpacing: 0.01,

    color: '#212121',
  },
  avatar: {
    flex: 1,
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    left: 135,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    overflow: 'hidden',
  },
  avatarInfo: {
    position: 'absolute',
    bottom: 15,
    right: -10,
  },
  input: {
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 16,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  btn: {
    marginHorizontal: 16,

    height: 40,
    marginTop: 40,
    marginBottom: 16,

    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
  },
  btnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
  },
  login: {
    marginBottom: 45,
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
