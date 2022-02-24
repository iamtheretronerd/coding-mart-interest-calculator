import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import './i18n/i18n.js';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (langCode) => {
    console.log("Language code")
    i18n
      .changeLanguage(langCode)
      .then(() => console.log("language changed successfully"))
      .catch(err => console.log("Error msg", err))
  }

  return (
    <>
    <SafeAreaView style={{
      paddingTop: 190,
      paddingHorizontal: 16
    }}>
      
      <View>
        <Text style={{
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
         Select Language
        </Text>
        <TouchableOpacity onPress={() => changeLanguage('en')}
          style={{
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600',
            textAlign: 'center',
          }}>
            English
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => changeLanguage('tn')}
          style={{
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600',
            textAlign: 'center'
          }}>
            தமிழ்
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => changeLanguage('fn')}
          style={{
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600',
            textAlign: 'center'
          }}>
            Français
          </Text>
        </TouchableOpacity>
      </View>


      <View>
        <TouchableOpacity onPress={() => changeLanguage('hn')}
          style={{
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600',
            textAlign: 'center'
          }}>
            हिन्दी
          </Text>
        </TouchableOpacity>
        <Text style={{
          color: '#8252B1',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {t('translations:Data')}
        </Text>
      </View>


    </SafeAreaView>
    </>
  );
};


