# 04 - Stateの必要性
- about
    
    00:01
    
    はい、それでは今回からステートの解説をしていきます。まずは、ステートを使わないとどのような問題が起こるかを見ていきましょう。不要な部分がありますので、
    
    - 一度削除します。
        
        ```tsx
        // main.tsx
        import * as React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';
        import './index.css';
        // import PageTitle from './components/PageTitle';
        
        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            {/* <PageTitle title="main" /> */}
            <App />
          </React.StrictMode>
        );
        
        ```
        
        ```tsx
        // App.tsx
        import * as React from 'react';
        import './App.css';
        import PageTitle from './components/PageTitle';
        
        export default function App() {
          return (
            <>
              <div>
                <PageTitle title="App" />
              </div>
            </>
          );
        }
        
        ```
        
        ```tsx
        // PageTitle.tsx
        
        // import { useState } from 'react';
        // import './App.css';
        import * as React from 'react';
        
        // function PageTitle(props) {
        //   return <h1>Hello {props.title} </h1>;
        // }
        function PageTitle({ title }) {
          return <h1>Hello {title} </h1>;
        }
        
        // export default App;
        export default PageTitle;
        
        ```
        
    
    こちらの index . tsx のページタイトルも今回は使用しませんので、削除します。そうしましたら、今はハローアップと表示されているだけです。
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/70b41a1b-afe9-4147-ba52-ba4de2c3c4ff/2e9018b3-15bf-4af6-bbcd-dec9d11048a1/Untitled.png)
    
    アップコンポーネントの中に処理を追加します。変数でカウントという値を設定し、初期値を0にします。次に、関数を一つ作り、アドカウントという名前で、カウントに1ずつ足し上げていく処理を実行します。こちらは変数カウントに count + 1を足したものを格納します。その結果をコンソールに表示します。
    
    01:06
    
    さらに、jsx の中にカウント変数を表示する部分と、ボタンにアドカウントをクリックした時に実行される処理を記入します。ボタンのテキストはアドとなっています。
    
    - こちらの処理としては、
        
        ```tsx
        // App.tsx
        import * as React from 'react';
        import './App.css';
        import PageTitle from './components/PageTitle';
        
        export default function App() {
          let count = 0;
        
          const addCount = () => {
            count += 1;
            // count = count + 1
            console.log(count);
          };
        
          return (
            <>
              <div>
                <PageTitle title="App" />
                <p>{count}</p>
                <button onClick={addCount}>Add</button>
              </div>
            </>
          );
        }
        
        ```
        
    
    ボタンを押した時に表示を1から0に増やすという処理をしたいのですが、この状態でボタンを押すと、何回か押しますと、コンソールには足し算された結果が出ますが、表示が変わっていないことがわかります。
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/70b41a1b-afe9-4147-ba52-ba4de2c3c4ff/b624f9c7-cf4a-45e3-9796-ed2fcf90aa84/Untitled.png)
    
    02:12
    
    これは、リアクトのコンポーネントの中では変数を検知して表示を変えるという処理ができません。この処理を実行するために必要となるのがステートです。次回から、ステートの作り方を見ていきましょう。