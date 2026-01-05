import { Image,useWindowDimensions } from "react-native";

type ImageProp={
    size?:number
}

export default function ShowImage({size}:ImageProp){
    const {width} = useWindowDimensions();

    const imageSize = size ?? Math.min(width/1.5,400);
    return(
    <Image 
    source={require("@/assets/plantly.png")}
    style={{width:imageSize,height:imageSize}}
    />
    )
}