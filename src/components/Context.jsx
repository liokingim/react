import React, { useContext } from 'react';

// 새로운 컨텍스트 생성
const MyContext = React.createContext(null);

// 5번째 자식 컴포넌트
function ChildFive() {
    // useContext 훅을 사용하여 컨텍스트에 접근
    const contextValue = useContext(MyContext);

    // JSON 파싱
    const parsedValue = JSON.parse(contextValue);

    // 배열로 출력
    return (
        <div>
            {parsedValue.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

// 4번째 자식 컴포넌트
function ChildFour() {
    return <ChildFive />;
}

// 3번째 자식 컴포넌트
function ChildThree() {
    return <ChildFour />;
}

// 2번째 자식 컴포넌트
function ChildTwo() {
    return <ChildThree />;
}

// 첫번째 자식 컴포넌트
function ChildOne() {
    return <ChildTwo />;
}

function App() {
    // JSON 형식의 데이터
    const data = JSON.stringify(['Hello', 'Context', 'This', 'Is', 'An', 'Array']);

    return (
        // Provider를 사용하여 컨텍스트의 값을 설정
        <MyContext.Provider value={data}>
            <ChildOne />
        </MyContext.Provider>
    );
}

export default App;