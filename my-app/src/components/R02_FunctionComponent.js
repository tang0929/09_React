import React, {useState} from 'react'; // imr 자동완성시킬 수 있음


const ClickCount = () => {

    const [count,setCount] = useState(0);

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={() => { setCount(count + 1)}}>클릭 시 1 증가</button>
        </div>
    );

}

// 함수형 컴포넌트
// 1. 함수 생성하기
// 2. return 구문에 출력하고자 하는 html 코드 작성
// 3. 만든 함수를 export default 지정하기


const FunctionEx = () => {
    /* 리액트 컴포넌트의 class 추가 시 className이라고 작성해야 함(class =''가 아님) */
    return(
        <>
            <h2 className='red'>함수형 컴포넌트입니다.</h2>

            
            <hr/>
            <ClickCount/>
        </>
    );
}
export default FunctionEx;