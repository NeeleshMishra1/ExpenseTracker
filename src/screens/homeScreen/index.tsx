import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.homecontainer}>
                <View style={styles.ExpenseContainer}>
                    <Image style={styles.splaceImage} source={Icon.splace} />
                    <Text style={styles.ExpenseText}>{strings.ExpenseTracker}</Text>
                </View >
                {/* <ScrollView> */}
                <View style={styles.Transactions}>
                    <View style={styles.TodayTransactions}>
                        <Text style={styles.todayText}>Transcations</Text>
                        <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate('add')}>
                            <Image style={styles.addImage} source={Icon.ADD} />
                        </TouchableOpacity>
                        <Text style={styles.todayText}>See All</Text>
                    </View>
                    <View style={styles.tapOn}>
                        <Text style={styles.todayText}>Tap on'+' to add Transactions</Text>
                    </View>
                </View>

                <View style={styles.month}>
                    <View style={styles.monthText}>
                        <Text style={styles.thisText}>This Month</Text>
                        <TouchableOpacity style={styles.SavingText}>
                            <Text style={styles.savingText}>Savings</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.expenceContainer}>
                        <View style={styles.incomeContainer}>
                            <View style={styles.Value}>
                                <Text style={styles.ValueText}>$3000</Text>
                            </View>
                            <View style={styles.incomeText}>
                                <Text style={styles.ValueText1}>Income</Text>
                            </View>
                        </View>

                        <View style={styles.incomeContainer1}>
                            <View style={styles.Value}>
                                <Text style={styles.ValueText}>$3000</Text>
                            </View>
                            <View style={styles.incomeText}>
                                <Text style={styles.ValueText2}>Expense</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.yearly}>
                    <TouchableOpacity style={styles.yearlyIncome}>
                        <Text style={styles.yearlyText}>Yearly Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.yearlyExpense}>
                        <Text style={styles.yearlyText}>Yearly Expense</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.bottomText}>
                            <Image style={styles.splaceImage} source={Icon.wallet} />
                            <Text>Wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomText}>
                            <Image style={styles.splaceImage} source={Icon.split} />
                            <Text>Split</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* </ScrollView> */}
            </View>
        </SafeAreaView>
    )
}
export default Home;