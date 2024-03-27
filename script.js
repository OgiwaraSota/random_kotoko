// タイマーIDを格納する変数を宣言
let timer1, timer2, timer3;

//ランダムことこリストを生成する
function getKoOrTo(){

    const koProb = 3/5

    let randomNum = Math.random();

    if(randomNum < koProb){
        return "こ"
    }else{
        return "と"
    }
}

//一定の間隔で文章を徐々に表示する
function displayRow(row, count, delay){
    let index = 0;
    let letterList = [];

    const intervalId = setInterval(() => {
        if(index < count){
            letterList.push(getKoOrTo());
            row.textContent = letterList.join("");
            index++;
        }else{
            clearInterval(intervalId);
        }
    }, delay);
    return intervalId; // タイマーIDを返す
}

const firstRow = document.querySelector("#first_row");
const secondRow = document.querySelector("#second_row");
const thirdRow = document.querySelector("#third_row");

function displayHaiku(letterDelay, rowDelay){
    timer1 = displayRow(firstRow, 5, letterDelay);

    timer2 = setTimeout(() => {
        timer2 = displayRow(secondRow, 7, letterDelay);
    }, rowDelay);

    timer3 = setTimeout(() => {
        timer3 = displayRow(thirdRow, 5, letterDelay);
    }, rowDelay * 2);
}

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
    // 既存のタイマーをクリア
    clearInterval(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

    firstRow.textContent = "";
    secondRow.textContent = "";
    thirdRow.textContent = "";

    displayHaiku(300, 2500); //間隔を設定
});
