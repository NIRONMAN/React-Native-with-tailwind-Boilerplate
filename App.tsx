import { StatusBar } from 'expo-status-bar';
import {Button, Text, TextInput, View} from 'react-native';

import { NativeWindStyleSheet } from "nativewind";
import {Image} from "expo-image";
import {ButtonDefault} from "./components/ui/buttons/button";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
  return (
    <View className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <View className={"sm:mx-auto sm:w-full sm:max-w-md"}>
            <Image
                className={"mx-auto h-10 w-auto"}
                source={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}
                contentFit={"cover"}
                transition={1000}
            />
            <Text className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
            </Text>
        </View>

        <View className={"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"}>
            <View className={"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"}>
                <View className={"space-y-6"}>
                    <View>
                        <Text className={"block text-sm font-medium leading-6 text-gray-900"}>Email address</Text>
                        <View className={"mt-2"}>
                            <TextInput
                                className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                            />
                        </View>
                    </View>
                    <View>
                        <Text className={"block text-sm font-medium leading-6 text-gray-900"}>Password</Text>
                        <View className={"mt-2"}>
                            <TextInput
                                secureTextEntry={true}
                                className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                            />
                        </View>
                    </View>
                    <View>
                        <ButtonDefault title={"Sign in"}/>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}


