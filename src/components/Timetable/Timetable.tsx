
type TimeInterval = {
    start: string,
    end: string,
}

type WorkTimes = TimeInterval[]

export const Timetable = () => {
    let numbers = [1,2,3,4,5,6];
    let colors = ["red","blue","green","yellow","black","white"];
    let allHours = [];
    for (let i = 0; i <= 24; i++) {
        allHours.push(i);
    }
    let currentPosition = 0;
    let initialPosition = 0;
    let dashWidth = 2
    let diagramWidth = 1280
    let diagramHeight = 50
    let dashHeight = 4
    let lineHeight = 2


    return (
        <div className={'canvas'}>
            <svg className={'timeline'} width={diagramWidth} height={diagramHeight} viewBox={`0 0 ${diagramWidth} ${diagramHeight}`}>
                {
                    allHours.map((_el,index) => {
                        currentPosition = initialPosition + index * 1280 / 24 - index*dashWidth/24;
                        return (
                            <rect fill={"#fff"} width={dashWidth} height={dashHeight} y={diagramHeight-dashHeight*1.5} x={currentPosition}></rect>
                        )
                    })
                }
                {/*{*/}
                {/*    numbers.map((el,index)=> (*/}
                {/*        <rect className={"unit"} fill={colors[index]} width={"100px"} height={"20px"} y={index*100}></rect>*/}
                {/*    ))*/}
                {/*}*/}
                <rect className={"unit"} fill={"#fff"} width={"1280px"} height={lineHeight} y={diagramHeight-lineHeight}></rect>
            </svg>
        </div>
    );
}
