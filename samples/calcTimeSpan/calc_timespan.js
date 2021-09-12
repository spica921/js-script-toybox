/**
 * 経過時間の算出
 */
(function () {
  // 接種した時間(適宜変更してください)
  const START = "2021/09/12 18:00:00";

  // 経過時間をミリ秒で算出
  const diff = Math.abs(
    new Date().getTime() - new Date(START).getTime()
  );

  // ミリ秒を分、時に換算
  const diffSeconds = diff / 1000;
  const diffMinutes = (diffSeconds - (diffSeconds % 60)) / 60;

  // 計算結果
  const hours = (diffMinutes - (diffMinutes % 60)) / 60;
  const minutes = diffMinutes - (hours * 60);
  const result = hours + "時間 " + minutes + "分";
  console.log(result);
})();
