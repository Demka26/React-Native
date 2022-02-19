import React, { useState } from "react";
import {Text,View} from 'react-native';
import { TextButton ,Header,IconButton,FormInput,FormInputCheck} from "../components";
import {validationCheck} from "../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import icons, {icon} from "../constants/icons";
import {FONTS,SIZES,COLORS} from "../constants/theme";
import styles from "../assets/Style";

const Payment =({navigation})=>{

    const [fullName,setFullName]=useState('');
    const [fullNameError,setFullNameError]=useState('');
    const [email,setEmail]=useState('');
    const [emailError,setEmailError]=useState('');
    const [phone,setPhone]=useState(0);
    const [phoneError,setPhoneError]=useState(0);
    const [state,setState]=useState('');
    const [stateError,setStateError]=useState('');
    const [city,setCity]=useState('');
    const [cityError,setCityError]=useState('');
    const [address,setAddress]=useState('');
    const [addressError,setAddressError]=useState('');

    const [customerId,setCustomerId]=useState('');
    const [customerIdError,setCustomerIdError]=useState('');

    const [cardNumber,setCardNumber]=useState('');
    const [cardNumberError,setCardNumberError]=useState('');

    const [cardHolder,setCardHolder]=useState('');
    const [cardHolderError,setCardHolderError]=useState('');

    const [valid,setValid]=useState('');
    const [validError,setValidError]=useState('');

    const [cvv,setCVV]=useState('');
    const [cvvError,setCVVError]=useState('');

    function isEnable(){
        return cardNumber!="" && cardHolder!="" && valid!="" && cvv!="" &&
        fullName!="" && email!="" && phone!="" && state!="" &&city!="" && address!=""&&
        cardNumberError=="" && cardHolderError=="" && validError=="" && cvvError==""&&
        fullNameError=="" && emailError=="" && phoneError=="" && stateError==""
        && cityError=="" && addressError==""
    }

    function renderHeader(){
        return(
          <Header
          title="CheckOut"
          containerStyle={styles.headerCartStyle}
          leftComponent={
            <IconButton
            icon={icons.back}
            containerStyle={styles.cartIconHeader}
            iconStyle={{width: 20,height: 20,tintColor: COLORS.gray2}}
            onPress={()=>navigation.goBack()}
            />
          }
          />
        )
      }
      function renderForm(){
          return(
              <View
                style={{marginTop:SIZES.padding}}
              >
                  <Text style={{...FONTS.h4,marginBottom:10}}>Information Details:</Text>
                  <FormInput
                    label="Full Name"
                    value={fullName}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,1,setFullNameError)
                        setFullName(value)
                    }}
                        errorMsg={setFullNameError}
                        appendComponent={
                            <FormInputCheck
                                value={fullName}
                                error={fullNameError}
                            />
                    }     
                  />
                  <FormInput
                    label="Email:"
                    value={email}
                    onChange={(value)=>{
                        validationCheck.validateEmail(value,setEmailError)
                        setEmail(value)
                    }}
                        errorMsg={setEmailError}
                        appendComponent={
                            <FormInputCheck
                                value={email}
                                error={emailError}
                            />
                    }     
                  />
                  <FormInput
                    label="Phone:"
                    maxLength={10}
                    value={phone}
                    keyboardType="number-pad"
                    onChange={(value)=>{
                        validationCheck.validateInput(value,10,setPhoneError)
                        setPhone(value)
                    }}
                        errorMsg={setPhoneError}
                        appendComponent={
                            <FormInputCheck
                                value={phone}
                                error={phoneError}
                            />
                    }     
                  />
                  <FormInput
                    label="State:"
                    value={state}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,1,setStateError)
                        setState(value)
                    }}
                        appendComponent={
                            <FormInputCheck
                                value={state}
                                error={stateError}
                            />
                    }     
                  />
                    <FormInput
                    label="City:"
                    value={city}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,1,setCityError)
                        setCity(value)
                    }}
                        appendComponent={
                            <FormInputCheck
                                value={city}
                                error={cityError}
                            />
                    }     
                  />
                    <FormInput
                    label="Address:"
                    value={address}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,1,setAddressError)
                        setAddress(value)
                    }}
                        appendComponent={
                            <FormInputCheck
                                value={address}
                                error={addressError}
                            />
                    }     
                  />
                  <Text style={{...FONTS.h4,marginTop:20,marginBottom:10}}>Card Details:</Text>
                  <FormInput
                    label="Card Number"
                    keyboardType="number-pad"
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value)=>{
                        setCardNumber(value.replace(/\s/g, '').replace
                        (/(\d{4})/g, '$1 ').trim())  //Every 4 numbers adds space
                        validationCheck.validateInput(value,19,setCardNumberError)
                }}
                errorMsg={cardNumberError}
                appendComponent={
                    <FormInputCheck
                        value={cardNumber}
                        error={cardNumberError}
                    />
                }     
                  />
                   <FormInput
                    label="Cardholder Name"
                    value={cardHolder}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,1,setCardHolderError)
                        setCardHolder(value)
                    }}
                        errorMsg={setCardHolderError}
                        appendComponent={
                            <FormInputCheck
                                value={cardHolder}
                                error={cardHolderError}
                            />
                    }     
                  />
                  <FormInput
                    label="Identification Number:"
                    value={customerId}
                    keyboardType="number-pad"
                    maxLength={9}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,8,setCustomerIdError)
                        setCustomerId(value)
                    }}
                        errorMsg={setCustomerIdError}
                        appendComponent={
                            <FormInputCheck
                                value={customerId}
                                error={customerIdError}
                            />
                    }     
                  />
                  <View 
                    style={{
                        flexDirection:'row',
                        marginTop: SIZES.radius
                  }}>
                  <FormInput
                    label="Expiry Date:"
                    value={valid}
                    placeholder="MM/YY"
                    maxLength={5}
                    containerStyle={{
                        flex:1
                    }}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,5,setValidError)
                        setValid(value)
                    }}
                        appendComponent={
                            <FormInputCheck
                                value={valid}
                                error={validError}
                            />
                    }     
                  />
                  <FormInput
                    label="CVV:"
                    value={cvv}
                    maxLength={3}
                    keyboardType="number-pad"
                    containerStyle={{
                        flex:1,
                        marginLeft:SIZES.radius
                    }}
                    onChange={(value)=>{
                        validationCheck.validateInput(value,3,setCVVError)
                        setCVV(value)
                    }}
                        appendComponent={
                            <FormInputCheck
                                value={cvv}
                                error={cvvError}
                            />
                    }     
                  />
                  </View>
              </View>
              
          )
      }

    return(
        <View style={styles.paymentContainer}>
            {renderHeader()}
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{flexGrow:1,paddingHorizontal:SIZES.padding}}
            > 
                {renderForm()} 
            </KeyboardAwareScrollView>
            <TextButton
                label="Next"
                disabled={!isEnable()}
                buttonContainerStyle={{
                    height:55,
                    marginBottom:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor:isEnable()?COLORS.primary:COLORS.transparentPrimray
                }}
                onPress={()=> isEnable()? navigation.replace("Success"):alert("Not all fields were filled")}
                />
        </View>
    )

}

export default Payment;