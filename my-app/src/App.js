import './App.css'; /* CSS 얻어와 아래 작성된 컴포넌트에 적용 */


// import [여기서 사용할 이름] from [js 파일 경로]
import ClassComponent from './components/R01_ClassComponent'

// R01_ClassComponent.js에서 export한 컴포넌트를 가져오기(import)
//  -> 가져온 컴포넌트를 ClassComponent라고 부르겠다
//  -> 사용 시 작성법 : <ClassComponent/>

import FunctionComponent from './components/R02_FunctionComponent';

import Props1 from './components/R03_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';
import StateEx1 from './components/R06_State1';
import StateEx2 from './components/R07_State2';

function App() {

  /* (중요!) 
    리액트 컴포넌트를 반환하는 함수는
    딱 한 개의 컴포넌트만 반환 가능!!!!!
    -> 여러 요소를 반환하고 싶을 땐 [묶어서] 반환!!!
  */
  return (
    /* fragment(<> </>) : 반환되는 요소(컴포넌트)를 묶는 용도, 해석 X */
    <>
      {/* ClassComponent를 현재 위치에 렌더링 */}
 
      {/* <ClassComponent/> 

      <FunctionComponent/>         */}

      <Props1 num='1' name='홍길동' age='20' score='80'/>

      <Props1 num='2' name='김길동' age='30' score='75'/>

      <Props2 name='박길동' age='25' gender='남'/>

      <Props2 name='박길동' age='25' gender='남'/>
      
      <Props3 name='고길동'/>

      <Props3 name='김영희'/>


      <StateEx1/>

      <StateEx2 init="100" step="4"/>
      </>
  );
}

export default App;
