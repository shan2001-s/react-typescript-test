//top-left

type X_Position='left' | 'right' |'center';
type Y_Position='top' |'button' |'center';

type PositionProps={
    position: Exclude <`${Y_Position}-${X_Position}` |'center' , 'center-center'>
}



export const Exclude=({position}:PositionProps)=>{
    return(
        <div style={{color:'red'}}> This position is {position}</div>
    )
}