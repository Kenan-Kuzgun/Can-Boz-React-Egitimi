# Can-Boz-React-Egitimi Notlarım

**Component Mantığı Notlar**

> Proje açılması : npm create vite@latest
Functional Component açma kısayolu : rafc

> Alternatif props tanımlaması
function Course(props){
return (
  <div></div>
);
}

> Props nedir?
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

> Daha verimli JS code 
const title = props.title;
const description = props.description;
const {title,description} = props;


**State Mantığı Notlar**

> State kullanım mantığı
Başlangıçta bir değişkene değer atanması isteniyor ve sonrasında bu değişkeni değiştirip o değişkenin tutulması istendiği durumlarda kullanılır.
useState, React'ta bir bileşenin durumunu (state) yönetmek için kullanılan bir fonksiyondur. React bileşenleri genellikle statik değil, değişken bir davranış sergilerler. Bu nedenle, bileşenlerin durumlarını dinamik olarak değiştirmek ve güncellemek gerekebilir.
useState, bir fonksiyon bileşeni içinde kullanılarak, bileşenin durumunu oluşturur ve güncellemesine olanak tanır. Böylece, bileşenin durumunu değiştirerek, bileşenin yeniden render edilmesi sağlanır ve kullanıcılara daha iyi bir kullanıcı deneyimi sunulabilir.
useState, aynı zamanda React'ta kontrollü bileşenler (controlled components) oluşturmak için de kullanılabilir. Kontrollü bileşenler, girdi değerlerinin bileşen durumu ile senkronize edildiği ve kullanıcının bu girdileri değiştirdiğinde bileşenin durumunun güncellendiği bileşenlerdir. Bu da, form gibi kullanıcı girdilerinin olduğu bileşenlerde kullanışlı bir özelliktir.

> useS : kısayolu
const [value,setValue] = useState(0);
value : değişken,
setValue : değişken ataması için fonksiyon
useState(0) : başlangıç değeri

> Kullanım için import edilmesi gerekmektedir. ( import {useState } from 'react'; )

> ...(spread operatörü) ile ilkinin üzerine eklenir.

>Javascript'te key ve value değerleri eşit ise
(Course.jsx içinde görülebilir.)
 Angular: Angular,
 Bootstrap: Bootstrap,
 cSharp: cSharp,
 Web: Web yerine

 Angular,
 Bootstrap,
 cSharp,
 Web  şeklinde kullanılabilir.
