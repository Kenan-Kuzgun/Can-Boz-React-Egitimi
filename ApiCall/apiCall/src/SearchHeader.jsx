import { useState } from "react";
function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(valueInput);
  return (
    <div className="searchHeaderContainer">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;

//preventDefault() JavaScript metodudur ve olayları kontrol etmek için kullanılır. Bir olayın varsayılan davranışını önlemek için kullanılır. Örneğin, bir form gönderme düğmesi tıklanınca sayfanın yeniden yüklenmesini önlemek için kullanılabilir.



//Async/await yapısı sayesinde, asenkron işlemler çağrıldıklarında promise objeleri döndürür ve bu objeler "await" anahtar kelimesiyle bekletilir. Bu sayede, işlemin tamamlanması beklenir ve işlem tamamlandığında sonuç döndürülür. Ayrıca, async fonksiyonlarında hata yönetimi de daha kolay hale gelir, çünkü hata yakalama mekanizması "try-catch" blokları kullanılarak gerçekleştirilir.
