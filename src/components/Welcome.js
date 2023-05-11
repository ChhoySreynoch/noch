// named export
export const Welcome = (props) => {
    return(
        <h1>welcome, {props.name}</h1>
    )
}
export const Greeting = (props) => {
    <h1>Greeting, {props.name}, {props.age}</h1>
}
export const Byebye = ({name, age, profile}) => {
    return(
        <h1>Greeting,{name}, {age}, {profile}</h1>
    )
}