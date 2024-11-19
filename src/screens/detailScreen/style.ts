import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#F5EADC",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 30,
    },
    textInput: {
        fontSize: 20,
        margin: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    nameInputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "65%",
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: "green",
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    splaceImage: {
        width: 100,
        height: 100,
    },
    mainView: {
        backgroundColor: "#F5EADC",
        justifyContent: "center",
        alignItems: "center",
    },
    enterText: {
        fontSize: 18,
        fontWeight: "500"

    },
    done: {
        fontSize: 20,
        color: "white",
        fontWeight: "600"
    }
});

export default styles;