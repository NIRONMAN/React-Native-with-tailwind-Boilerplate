import {Pressable, Text} from "react-native";

export interface ButtonProps {
    title: string
}

export function ButtonDefault(props: ButtonProps){
    return(
        <Pressable className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
            <Text className={"text-sm font-semibold text-white leading-6 text-center "}>{props.title}</Text>
        </Pressable>
    )
}