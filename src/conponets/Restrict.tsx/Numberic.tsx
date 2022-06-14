type valueType={
    value:number
}



type positiveType= valueType & {
    isPositive:boolean,
    isNagative?:never,
    zero?:never

}
type negativeType= valueType & { 
    isNagative:boolean,
    isPositive?:never,
    zero?:never

}

type zeroType= valueType & {
    zero:boolean,
    isPositive?:never,
    isNagative?:never

}

type numberType=  positiveType| negativeType| zeroType

export const Numberic=({value,isPositive,isNagative,zero}:numberType)=>{
    return (
        <div>
           {value} is {isPositive && 'is positive'} {isNagative && 'is Nagative'} {zero && 'is Zero'}
        </div>
    )
}