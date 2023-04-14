import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RPG from './src/RPG';

export default function App() {

  const cards = [
    {
      name: "Santoryu",
      url: "https://i.pinimg.com/originals/91/70/7a/91707aca42cf70ebb4bec806d246c9be.jpg",
      desc: "This is the three swords style, with it you can cut everything in front of you, its damage is 240, in addition to giving you +50% speed and +50% resistance, with a chance to criticize. When you do the same combo 5 times, new attributes will be added to the weapon.",
    },
    {
      name: "Umbrella",
      url: "https://i.pinimg.com/564x/ed/c7/b4/edc7b4f8617a57106ed769a5402164bc.jpg",
      desc: "1st Spear: 200 damage, and medium range,2nd Sword: 150 damage, and short range,3rd Machine Gun:235 damage, and long range.When performing a combo quickly changing forms, the attack stats go up 30% and 25% defense, in its basic mode it also serves as a shield.",
    },
    {
      name: "Dragon Medallion",
      url: "https://i.pinimg.com/564x/27/70/be/2770be9fba8f43ae8b5f0f5c6bffdcdc.jpg",
      desc: "After defeating a dragon you will receive this medallion, when you equip it, you will receive 45% resistance (this resistance is given by the element of the dragon that was defeated, D.fire = fire resistance), +150 armor and has a damage of 128 + 15% of the medallion + 5% of crit",
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <RPG key={index} card={card} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#800020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});