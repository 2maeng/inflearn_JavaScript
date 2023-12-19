/**
 * Async / Await
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('완료');
    }, seconds * 1000);
});

async function runner(){ // Promise로 만든 함수만 await를 사용 할 수가 있다.
    try {
        const result1 = await getPromise(1);
        console.log(result1);
    
        const result2 = await getPromise(2);
        console.log(result2);
    
        const result3 = await getPromise(1);
        console.log(result3);
    } 
    catch (e) {
        console.log('---catch e---');
        console.log(e);
    }
    finally{
        console.log('---finally---');
    }
    
}

runner();
console.log('실행 끝');