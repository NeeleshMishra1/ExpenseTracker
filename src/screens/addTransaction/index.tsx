import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "../../component/modalExpense";
import { DropdownTravel } from "../../component/modalSalary";


const AddTransaction = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedTap, setSelectedTap] = useState(0);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.addContainer}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <Image style={styles.splaceImage} source={Icon.arrow} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 90 }}>
                        <Text style={styles.addText}>Add Transaction</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.Date} onPress={() => setOpen(true)}>
                    <Text style={styles.legend}>Date</Text>
                    <Text style={styles.dateText}>{dayjs(date).format('MM/DD/YYYY')}</Text>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Date} onPress={() => setOpen(true)}>
                    <Text style={styles.legend}>Amount</Text>
                    <TextInput
                        style={styles.dateText}
                        placeholder="Enter Amount" />
                </TouchableOpacity>

                <View style={styles.switchView}>
                    <TouchableOpacity style={[
                        styles.switch1,
                        { backgroundColor: selectedTap === 0 ? "white" : "#641FC9" }
                    ]} onPress={() => setSelectedTap(0)}>
                        <Text style={[styles.incomeText, { color: selectedTap === 0 ? "#641FC9" : "#dbdad7" }]}>Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[
                        styles.switch2,
                        { backgroundColor: selectedTap === 1 ? "white" : "#641FC9" }
                    ]} onPress={() => setSelectedTap(1)}>
                        <Text style={[styles.incomeText, { color: selectedTap === 0 ? "#dbdad7" : "#641FC9" }]}>Expense</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.Date} >
                <Dropdown/>
                {/* <DropdownTravel/> */}
                </TouchableOpacity>
               

                <TouchableOpacity style={styles.Date} >
                    <Text style={styles.legend}>Note</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.addAmount}>
                    <Text style={styles.addButton}>Add Transaction</Text>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    )
}

export default AddTransaction;