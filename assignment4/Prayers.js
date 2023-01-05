import React, { useEffect, useState } from 'react';
 import { ImageBackground, FlatList, Text, View , StyleSheet } from 'react-native';

const pic={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRoKdgyAqp71EhsLHvJZjUcEibi59_S8zfAx4qFkfHw&s"};

function Prayer(props) {
 
    const [time, setdata] = useState('');


    const data= async () => {
        try {
            const response = await fetch('https://api.aladhan.com/v1/calendar?latitude=33.948495&longitude=72.42746&method=2&month=1&year=2023.json', data);
            const get = await response.json();
            setdata(get.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        data();
    });
console.log(' ', time)
    return (
        <View style={styles.container}>


          <Text style={{fontSize:40,fontWeight:'bold' }}> Prayer Timings</Text>
          <View style={styles.Box}>
        
 <ImageBackground source={pic}

     
      > 
            <FlatList
                data={time}
               
                renderItem={({ item }) => (
                    <View>
                    <Text style={styles.item}> {item.date.readable}</Text>
                    <Text style={styles.item}> Fajar : {item.timings.Fajr}</Text>
                    <Text style={styles.item}> Dhuhr : {item.timings.Dhuhr}</Text>
                    <Text style={styles.item}> Asr : {item.timings.Asr}</Text>
                    <Text style={styles.item}> Maghrib : {item.timings.Maghrib}</Text>
                    <Text style={styles.item}> Isha : {item.timings.Isha}</Text>  
                   </View>  
                )}
            />

   </ImageBackground>     
       </View>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
      },
      item:{
        color:"black",
        justifyContent:"center",
        fontSize:20,
        fontWeight:'bold',
      },
      Box:{
        backgroundColor:"white",
        width:350,
        height:600
      }

})

export default Prayer;