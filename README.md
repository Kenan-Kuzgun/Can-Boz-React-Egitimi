# Can-Boz-React-Egitimi Notlarım

<details>
<summary>Component Mantığı</summary>

* Proje açılması : npm create vite@latest
Functional Component açma kısayolu : rafc

* Alternatif props tanımlaması
```
function Course(props){
return ( <div></div>);}
```

* Props nedir?
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
</details>

<details>
<summary>State Mantığı</summary>

* State kullanım mantığı
Başlangıçta bir değişkene değer atanması isteniyor ve sonrasında bu değişkeni değiştirip o değişkenin tutulması istendiği durumlarda kullanılır.
useState, React'ta bir bileşenin durumunu (state) yönetmek için kullanılan bir fonksiyondur. React bileşenleri genellikle statik değil, değişken bir davranış sergilerler. Bu nedenle, bileşenlerin durumlarını dinamik olarak değiştirmek ve güncellemek gerekebilir.
useState, bir fonksiyon bileşeni içinde kullanılarak, bileşenin durumunu oluşturur ve güncellemesine olanak tanır. Böylece, bileşenin durumunu değiştirerek, bileşenin yeniden render edilmesi sağlanır ve kullanıcılara daha iyi bir kullanıcı deneyimi sunulabilir.
useState, aynı zamanda React'ta kontrollü bileşenler (controlled components) oluşturmak için de kullanılabilir. Kontrollü bileşenler, girdi değerlerinin bileşen durumu ile senkronize edildiği ve kullanıcının bu girdileri değiştirdiğinde bileşenin durumunun güncellendiği bileşenlerdir. Bu da, form gibi kullanıcı girdilerinin olduğu bileşenlerde kullanışlı bir özelliktir.

* useStateSnippet : kısayolu
```
const [value,setValue] = useState(0);
value : değişken,
setValue : değişken ataması için fonksiyon
useState(0) : başlangıç değeri
```

* Kullanım için import edilmesi gerekmektedir. ( import {useState } from 'react'; )
</details>


<details>
<summary>Javascript Notlar</summary>

 * Daha verimli JS code 
 ```
const title = props.title;
const description = props.description;
const {title,description} = props;
```
 
* ...(spread operatörü) ile ilkinin üzerine eklenir.

* Javascript'te key ve value değerleri eşit ise
(Course.jsx içinde görülebilir.)
```
 Angular: Angular,
 Bootstrap: Bootstrap,
 cSharp: cSharp,
 Web: Web 
```
yerine
```
 Angular,
 Bootstrap,
 cSharp,
 Web 
```
 şeklinde kullanılabilir.
 
* Async/await yapısı sayesinde, asenkron işlemler çağrıldıklarında promise objeleri döndürür ve bu objeler "await" anahtar kelimesiyle bekletilir. Bu sayede, işlemin tamamlanması beklenir ve işlem tamamlandığında sonuç döndürülür. Ayrıca, async fonksiyonlarında hata yönetimi de daha kolay hale gelir, çünkü hata yakalama mekanizması "try-catch" blokları kullanılarak gerçekleştirilir.

 TypeScript Notlar 
 ```
 //Arrow Functions
 function carpim(a:number,b:number):number{
 return a*b;
 }
 
 let carpim = (a:number,b:number):number => { 
 return a*b;
 }
 
 let carpim = (a:number,b:number):number => a*b;

 ```
 </details>
 


<details>
 <summary>useEffect</summary>
 * useEffect, bileşenin her render işleminden sonra otomatik olarak çağrılır. Bu, bileşenin durumundaki veya özelliklerindeki değişiklikler gibi renderi tetikleyen herhangi bir şey olduğunda useEffect'in yeniden çağrılacağı anlamına gelir. Ayrıca bileşen ilk kez render edildiğinde de çağrılır.
 
```
 useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve içerisindeki herhangi bir state değeri değiştirildiğinde tekrar çalışır."
    );
  });

  useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve daha sonra state değişse de çalışmaz."
    );
  }, []);

  useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve daha sonra can state'i değişirse çalışır."
    );
  }, [can]);
 ```
</details>
 
 
   <details>
 <summary>useContext</summary>
 
 * useContext props taşımaya gerek kalmadan,child elementlerden direk kullanılabilmesini sağlar.

 ![](UseContext/UseContext.drawio.png)
 
 ```
 import React from "react";

const authContext = React.createContext({ status: null, login: () => {} });

export default authContext;

 ```
 ```
 const { status, login } = useContext(authContext);
  ```
</details>

<details>
<summary>useReducer</summary>

* React'te useReducer, durumun yönetilmesini sağlayan bir kancadır. Bir azaltıcı işlev belirleyerek durumu yönetmek için kullanılır. Bu, useState kancasının bir alternatifidir ve durum mantığı karmaşık olduğunda veya durum güncellemeleri önceki duruma bağlı olduğunda faydalıdır.
 
 ```
 const [count, dispatch] = useReducer(reducer, initialValue);
  ```
 
  ```
 const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "descrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
  ```
   ```
      <div>Sayı: {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        Arttır
      </button>
      <button onClick={() => numberContext.dispatch("descrement")}>
        Azalt
      </button>
      <button onClick={() => numberContext.dispatch("reset")}>Reset</button>
   ```
</details>

<details>
 <summary>useMemo ve useCallback</summary>

 * useMemo ve useCallback da React'te bulunan kancalardır. İkisi de performans optimizasyonu sağlamak için kullanılır ve işlevsel bileşenlerde özellikle faydalıdır. İşlevin yeniden hesaplanmasını ve bileşenin gereksiz yere yeniden render edilmesini önlerler.
 
 * useMemo, bir değeri bellekte önbelleğe almak için kullanılır. Bu değer, bağımlılıklardaki değişikliklere göre yeniden hesaplanır ve sadece gerektiğinde güncellenir.
  
 ``` 
    const memoizedValue = useMemo(() => {
     // Değerin hesaplandığı işlemler burada yapılır
     return calculatedValue;
   }, [dependency1, dependency2]);
 
 ```

 * useCallback, bir işlevin önbelleğe alınmasını ve sadece gerektiğinde güncellenmesini sağlar. Bu özellikle, işlevlerin bağımlılıkları değiştiğinde bileşenin yeniden render edilmesini önlemek için kullanılır.
  
 ```
  const memoizedCallback = useCallback(() => {
  // İşlevin içeriği burada yer alır
}, [dependency1, dependency2]);
 ```
</details>

<details>
 <summary>useRef,useTransition ve useDeferredValue</summary>

 * useRef, React'te bir değişkeni veya bir bileşeni tutmak için kullanılan bir kancadır. useRef ile oluşturulan referans, bileşenin her render işleminden sonra aynı kalır ve bileşen yeniden render edilse bile referans değişmez.useRef kullanarak oluşturulan referans, .current özelliği üzerinden erişilebilir ve bu özellik referansın güncel değerini temsil eder. Referansın güncellenmesi, bileşenin yeniden render edilmesine neden olmaz.

* useTransition, işlemin geçişli bir şekilde gerçekleştirilmesini sağlar. Bu, kullanıcıya işlemin yükleniyor olduğunu veya tamamlanmadığını göstermek için bir geçiş süreci sağlar. Geçişli işlemler, performansı artırır ve kullanıcı deneyimini iyileştirir.

 ```
  const [isShowing, setIsShowing] = useState(false);
  const [startTransition, isPending] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setIsShowing(!isShowing);
    });
  };
 
 ```
 
 * useDeferredValue
 
 ```
  import { useMemo, useDeferredValue } from 'react';
function Characters({ input }) {
  const deferredValue = useDeferredValue(input);
  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 3000; i++) {
      myArray.push(<div key={i}>{deferredValue}</div>);
    }
    return myArray;
  }, [deferredValue]);
  return myList;
}

export default Characters;

 ```
 

</details>



