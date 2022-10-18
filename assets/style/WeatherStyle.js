import React from 'react';
import {
    StyleSheet
} from 'react-native';
 
export default StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignitems: 'center',
            paddingVertical: 70,
        },

        halfContainer: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },

        main_content: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%',
        },

        temp: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '30%',
        },

        temp_text: {
            color: '#fff',
            fontWeight: 'medium',
            fontSize: 24,
        },

        desc_text: {
            color: '#fff',
            fontWeight: 'medium',
            fontSize: 17,
        },

        scroll_container: {
            width: '8%',
            alignItems: 'center',
            paddingVertical: 10,
        },

        hour_item: {
            marginBottom: 10,
            fontWeight: 'bold',
            color: '#fff',
        },

        hour_header: {
            marginLeft: 10,
        },

        info_container: {
            backgroundColor: 'rgba(62,95,138,0.2)',
            borderRadius: 10,
            flex: 2,
            justifyContent: 'center',
            width: '95%',
            marginTop: 25,
            paddingVertical: 10,
        },

        days_item: {
            margin: 5,
            paddingBottom: 10,
            display:'flex',
            flexDirection: 'row',
        },

        days_item_content: {
            color: '#fff',
            marginLeft: 5,
            marginVertical: 5,
            width: '30%',
        },

        indicator: {
            width: '40%',
            height: 9,
            marginHorizontal: '5%',
            marginVertical: 10,
            borderRadius: '50%',

        },
        text: {
            color: '#fff',
        }
    }
);