export interface ButtonType{
    to ?: string,
    primary ?: boolean,
    secondary ?: boolean,
    children: string, 
    rightIcon ?: any, 
    submit ?: boolean, 
    small ?: boolean, 
    rounded ?: boolean, 
    disable ?: boolean,
    onClick?: Function
}