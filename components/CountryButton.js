import React from "react"
import { Text, Pressable } from "react-native"

export const CountryButton = ({ item, name, style, ...rest }) => (
    <Pressable
        style={[styles.countryButton, style?.countryButtonStyles]}
        testID="countryCodesPickerCountryButton"
        {...rest}
    >
        <Text style={[{ flex: 0.2 }, style?.flag]} >
            {item?.flag}
        </Text>
        <Text style={[{ flex: 0.3 }, style?.dialCode]} >
            {item?.dial_code}
        </Text>
        <Text style={[{ flex: 1 }, style?.countryName]} >
            {name}
        </Text>
    </Pressable>
)

const styles = {
    countryButton: {
        paddingVertical: 10,
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: 50,
        paddingHorizontal: 25,
        alignItems: "center",
        marginVertical: 2,
        flexDirection: "row",
        borderRadius: 10
    }
}
