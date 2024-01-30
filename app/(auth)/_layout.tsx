import { container } from "@/styles/baseStyles";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
    return (
        <SafeAreaView style={container}>
            <Stack 
                screenOptions={{headerShown: false}}
            />
        </SafeAreaView>
    )
}