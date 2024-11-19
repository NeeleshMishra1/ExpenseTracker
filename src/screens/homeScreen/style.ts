import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#95dbf5",
    },
    homecontainer: {
        flex: 1,
        backgroundColor: "#95dbf5",
        padding: 20,
    },
    ExpenseContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    ExpenseText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#641FC9",
    },
    splaceImage: {
        width: vw(25),
        height: vh(25),
    },
    Transactions: {
        width: "100%",
        height: 200,
        backgroundColor: "#e0f6ff",
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
    },
    TodayTransactions: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    addIcon: {
        width: 25,
        height: 25,
        backgroundColor: "#641FC9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginLeft: 90,
    },
    addImage: {
        width: 15,
        height: 15,
    },
    todayText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#641FC9",
    },
    tapOn: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    month: {
        width: "100%",
        height: "40%",
        backgroundColor: "#e0f6ff",
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    monthText: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    SavingText: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
    thisText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#641FC9",
    },
    savingText: {
        fontSize: 14,
        fontWeight: "700"
    },
    incomeContainer: {
        backgroundColor: "green",
        width: "42%",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    incomeText: {
        backgroundColor: "white",
        width: "99%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        margin: 1,
    },

    Value: {
        padding: 10,
    },
    ValueText: {
        fontSize: 20,
        fontWeight: "700",
        color: "white"
    },
    ValueText1: {
        fontSize: 20,
        fontWeight: "700",
        color: "green"
    },
    ValueText2: {
        fontSize: 20,
        fontWeight: "700",
        color: "red"
    },
    expenceContainer: {
        flexDirection: "row"
    },
    incomeContainer1: {
        backgroundColor: "red",
        width: "42%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    yearlyIncome: {
        backgroundColor: "#641FC9",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        borderRadius: 10,
        padding: 10,
        width: "47%"
    },
    yearlyText: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    },
    yearlyExpense: {
        backgroundColor: "#641FC9",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        borderRadius: 10,
        padding: 10,
        width: "47%"
    },
    yearly: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 30,
        marginLeft: 20,
        paddingHorizontal: 60,
        backgroundColor: "#e0f6ff",
        borderRadius: 10,
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomText: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;