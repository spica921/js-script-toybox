# 経過時間の算出

## 実行方法
- ブラウザ実行
    1. 開発者ツールを開く(ページ内を右クリック->要素の調査が早い)
    1. コンソールタブを開く
    1. 下記を入力欄に入力後Enter(IEは実行ボタン押下)<br>
        STARTの値を適宜変更すること

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
            const minutes = diffMinutes - hours * 60;
            const result = hours + "時間 " + minutes + "分";
            console.log(result);
            })();
    - 動作確認ブラウザ
        - IE11
        - Firefox92
        - Chrome93
- node.js
    - 前提
        - このブランチをチェックアウトしていること

                node calc_timespan.ts