import { AuthProvider } from "@/providers/AuthProvider";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout: React.FC = () => {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </AuthProvider>
    );
}

export default RootLayout;