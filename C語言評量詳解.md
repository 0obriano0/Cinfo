C語言評量詳解
===

###### tags: `C語言` `評量` `解答`

### 摘要
基於與各位討論專題的過程中，發覺各位雖然過去學習過C語言，但許多觀念與基礎似乎不夠紮實，大家學過是學過，但有沒有確實學會呢？本評量用於綜合檢視學習成果，提供解答的目的則在於幫助學習者檢討並修正觀念及技巧。

### 問題與挑戰

#### 第一部分－變數型態、宣告

1. 一段程式如下，試判斷其輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        char Number = 200;
        printf("%d", Number);
        return 0;
    }
    ```
    重點：變數數值範圍
    解答：
    > 在電腦的設計上，由於硬體資源有限，數值的儲存、計算、傳遞都有範圍上的限制，在設計程式上也特別需要注意這種限制，以防止出現錯誤、非預期的結果。就C語言而言，因應不同的計算問題，大致將資料型態分為字元(字串)、整數與浮點數三大類型；在整數形態下又分成無號整數與有號整數兩大類。但是，不論何種資料型態，現代電腦都會以二進位的方式進行儲存、計算與傳輸。數值系統詳細說明可以參考我寫的 [智慧核心－CPU，從數字系統、編碼到運算的過程3](https://sites.google.com/a/ntut.org.tw/jimmyhu/projectlist/othertechnicdata/digital-logic-cpu-numeral-system2) 一文。
    > 由於現代電腦皆採用了「2的補數表示法(2's complement)」，在2的補數表示法(2's complement)中，正負數呈現環狀排列的關係，下圖舉例為一四位元有號數數值排列方式。
    > ![](https://sites.google.com/a/ntut.org.tw/jimmyhu/_/rsrc/1496468807251/projectlist/othertechnicdata/digital-logic-cpu-numeral-system2/%E7%92%B0%E5%BD%A2%E6%95%B8%E5%AD%97%E5%9C%961.png?height=363&width=400)
    > 這是在解答本題上所需要具備的核心概念之一。
    > 在解答本問題上，第一步是需要了解char型態變數為一8位元變數，變數占用記憶體空間1個位元組(Byte)；接著要了解char型態變數可存放的數值範圍為
    > $$ -2^{7} \sim (2^{7}-1) $$
    > -128～127
    > 因此我們可以把上圖中的圓圈放大，填入-128～127範圍的所有整數，大概像是下圖的樣子：
    > ![](https://i.imgur.com/aU64QCV.png)
    > 當存放數值超出這個範圍時，電腦都會對應回到這個範圍的數值做後續的計算處理。舉例而言，若儲存數值128至char型態變數時，128=127+1，因此對電腦來說，相當於127的順時針下一個數值，亦即-128。我們可以透過以下程式驗證：
    > ```C
    > #include <stdio.h>
    > int main(void)
    > {
    >     char Number = 128;
    >     printf("%d", Number);
    >     return 0;
    > }
    > ```
    > 其顯示數值為-128。
    > 因此回到本題，填入數值200，會對應到什麼樣的數值呢？
    > 我們可以將這種對應關係以數學算式記為
    > $\require{AMScd}$
    \begin{CD}
    \LARGE \text{char variable}  =
    \left\{ {
    x \mod 255, \text{if $x$}\mod 255 \leq 127 \atop
    x \mod 255 - 256, \text{otherwise}
    }\right.
    \end{CD}
    > 
    > 經由公式計算，填入200相當於數值-56。
    > 


    
2. 一段程式如下，試判斷其輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        char Ch = 'A';
        printf("%d", Ch);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：ASCII</span>**
    
3. 一段程式如下，試判斷其輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        char Ch = 80;
        printf("%c", Ch);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：ASCII</span>**

 4. 一段程式如下，試判斷其輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        int Number = 80;
        Number = Number / 3;
        printf("%d", Number);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：數值除法計算</span>**


#### 第二部分－迴圈、判斷流程

1. 一段if敘述如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        if(2)
        {
            printf("if statement");
        }
        else
        {
            printf("else statement");
        }
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：if判斷式</span>**
    
2. 一段for敘述如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        int LoopNum;
        int Sum = 0;
        for(LoopNum = 0; LoopNum < 3;LoopNum++)
        {
            Sum = Sum + LoopNum;
        }
        printf("Sum=%d\n",Sum);
        printf("LoopNum=%d\n",LoopNum);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：for迴圈</span>**
    


#### 第三部分－陣列

1. 一段程式如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        int Number[] = {3, 4, 5};
        printf("%d\n",sizeof(Number));
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：陣列空間計算</span>**

#### 第四部份－指標
1. 一段程式如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        int A = 3;
        int *B;
        B = &A;
        printf("%d\n",A);
        printf("%d\n",*B);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：指標基本概念</span>**

2. 一段程式如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        char A[] = "Jimmy";
        char *B = A;
        printf("%c\n",*B);
        printf("%c\n",*(B+3));
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：陣列與指標</span>**
    

#### 第五部分－副程式

1. 一段程式如下：
    ```C
    int main(int argc, char *argv[])
    {
        return 0;
    }
    ```
    試敘述argc、\*argv[]參數用法。
    **<span style="color:#F3E4E4">重點：argc、\*argv[]</span>**
    
2. 試以遞迴實作費氏數列計算程式。
    [維基百科－費氏數列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)
    **<span style="color:#F3E4E4">重點：遞迴</span>**


#### 第六部分－字串

1. 一段程式如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    int main(void)
    {
        char A[] = "Jimmy";
        printf("%d\n",sizeof(A));
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：字串長度</span>**

#### 第七部分－結構

1. 一段程式如下，請試圖判斷程式輸出結果為何？
    ```C
    #include <stdio.h>
    typedef struct
    {
        char Color;
        int Length;

    }Wheel;
    typedef struct
    {
        Wheel Wheel1;
        Wheel Wheel2;
        Wheel Wheel3;
        Wheel Wheel4;
    }Car;
    int main(void)
    {
        Car Car1;
        Car1.Wheel1.Color = 'W';
        Car1.Wheel1.Length = 20;
        Car1.Wheel2.Color = 'B';
        Car1.Wheel2.Length = 30;
        printf("%c\n",Car1.Wheel1.Color);
        return 0;
    }
    ```
    **<span style="color:#F3E4E4">重點：結構基礎用法</span>**

#### 第八部分－檔案I/O

1. 試撰寫一讀取文字檔程式，將文字檔內容輸出至螢幕上。
    **<span style="color:#F3E4E4">重點：檔案I/O基礎</span>**

2. 試撰寫一讀取文字檔程式，將該文字檔之"A"字元取代為"B"字元後，覆寫該檔案。舉例而言，文字檔Test.txt之內容為"123AbCdEf"，執行過程式後其內容為"123BbCdEf"。
    **<span style="color:#F3E4E4">重點：檔案I/O基礎</span>**
    
    <style>
    #main>.blockCenter>.word>a { display: block; }
    #main>.blockCenter>.word>a>img { width: 100%; height: auto; max-width: 550px; }
    #main a { display:block; padding: 10px 15px; font-size: 16px; color: #FFF; box-sizing: border-box;
    font-family:'cwTeXHei', sans-serif; text-shadow: 2px 3px 1px #000; }
    #main a:hover { color: yellow; }
    </style>
    
    <div id="main">
            <div class="blockCenter white">
                <div class="word">
                    <div class="block_one">
                        <h2><img src="image/index/list.png" alt="標籤"><span class="gettext" gettext="index_message_title_1">SCC 腐蝕抑制劑</span></h2>
                        <p><span class="gettext" gettext="index_message_1">由微精蠟、增塑劑及水份制定之膏狀防腐蝕塗料可用手輕易施作。腐蝕抑制劑是用在金屬表面作為表面腐蝕抑制而設計，以配合精蠟防蝕帶達到防蝕的最佳效果。腐蝕抑制劑不會乾枯、硬化或崩裂。</span></p>
                    </div>
                    <div class="block_one">
                        <h2><img src="image/index/list.png" alt="標籤"><span class="gettext" gettext="index_message_title_2">SCC 腐蝕抑制劑</span></h2>
                        <p><span class="gettext" gettext="index_message_2">採用微精蠟及腐蝕抑制劑製成防蝕帶以提供金屬結構長期腐蝕保護。精蠟帶是打破傳統一般熱融型防蝕帶的冷包防蝕材料，也有別於一般礦油帶，是防蝕領域的新趨勢。精蠟帶本身可隨包覆物件熱脹冷縮，適應不規則的銳角包覆任何不規則之形狀物件也不會龜裂脫落。精蠟帶可依各設施管理與美觀要求之顏色標準製作亦可上一般面漆。對付孔蝕或點蝕區亦可隨意剪裁黏貼以保護局部嚴重腐蝕範圍。為金屬表面的腐蝕提供長期的解決方案。</span></p>
                    </div>
                </div><div class="word">
                    <a href="products.html"><img id="img02" src="image/index/02.png" alt="精蠟防蝕帶系列 - 防蝕帶"></a>
                </div>
            </div>
        </div>